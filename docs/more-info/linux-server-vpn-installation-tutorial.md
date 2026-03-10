---
title: "Linux服务器VPN安装教程"
description: "在Linux服务器上安装VPN（虚拟专用网络）有多种重要用途。对于个人用户或系统管理员而言，它主要提供安全的远程访问能力。例如，当您出差时，可以通过VPN安全地连接到家庭或公司的服务器，访问内部资源，如同身处在同一局域网内。对于服务器本身，"
readingTime: 4
lastUpdated: 1773143356968
---

# Linux服务器VPN安装教程

## 为什么需要在Linux服务器上安装VPN？

在Linux服务器上安装VPN（虚拟专用网络）有多种重要用途。对于个人用户或系统管理员而言，它主要提供安全的远程访问能力。例如，当您出差时，可以通过VPN安全地连接到家庭或公司的服务器，访问内部资源，如同身处在同一局域网内。对于服务器本身，VPN可以加密其对外或对内的网络流量，保护数据传输安全，防止敏感信息在公网上被窃听。此外，一些特定的VPN协议（如WireGuard）还能用于高效地组建多个服务器间的加密隧道，构建私有云网络。

## 主流VPN协议选择

在开始安装前，了解几种主流的VPN协议至关重要，它们各有优劣：

1.  **OpenVPN**：历史悠久，非常成熟稳定，配置灵活，安全性高，几乎兼容所有平台。缺点是配置相对复杂，性能开销稍大。
2.  **WireGuard**：新一代协议，以其代码简洁、速度快、现代加密和配置简单而闻名。它内置于Linux 5.6及以上内核中，是当前许多场景下的首选。
3.  **IPsec**：一套协议族，常用于企业级站点到站点的连接，集成在操作系统网络栈中，非常高效，但配置可能较为复杂。

对于大多数个人用户和新手，**WireGuard**因其极简的配置和优异的性能，成为本教程推荐的首选方案。

## 使用WireGuard安装VPN（Ubuntu/Debian示例）

以下是在Ubuntu 20.04或Debian 11等系统上安装WireGuard的简明步骤。

### 第一步：安装WireGuard
WireGuard已包含在主流Linux发行版的官方源中。首先更新软件包列表并安装：
```bash
sudo apt update
sudo apt install wireguard
```
对于CentOS/RHEL等系统，您需要先启用EPEL仓库。关于不同Linux发行版的详细安装基础，可以参考这篇指南：[Linux以及服务器安装方式](/catalog-2/directory-nesting-333/linux-server-installation)。

### 第二步：生成服务器密钥对
WireGuard使用公钥/私钥进行认证。为服务器生成密钥：
```bash
cd /etc/wireguard/
umask 077
wg genkey | tee server_private.key | wg pubkey > server_public.key
```
请妥善保管生成的 `server_private.key` 文件。

### 第三步：配置服务器
创建配置文件 `/etc/wireguard/wg0.conf`：
```bash
sudo nano /etc/wireguard/wg0.conf
```
输入以下内容，请将 `<服务器私钥>` 替换为 `server_private.key` 文件中的内容，并为VPN客户端规划一个子网（例如 `10.0.0.1/24`）：
```ini
[Interface]
Address = 10.0.0.1/24
SaveConfig = true
ListenPort = 51820
PrivateKey = <服务器私钥>
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE
```
`PostUp` 和 `PostDown` 规则用于设置NAT转发，允许VPN客户端通过服务器的公网接口（`eth0`，请根据实际情况修改）访问互联网。

### 第四步：启用IP转发并启动服务
编辑系统参数，启用IP转发：
```bash
echo "net.ipv4.ip_forward=1" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```
启动WireGuard接口并设置开机自启：
```bash
sudo systemctl enable wg-quick@wg0
sudo systemctl start wg-quick@wg0
```

### 第五步：为客户端生成配置
每个客户端都需要自己的密钥对和配置。在服务器上为客户端（如一台笔记本电脑）生成配置：
```bash
# 生成客户端密钥
wg genkey | tee client_private.key | wg pubkey > client_public.key

# 在服务器配置中添加对等客户端（Peer）
sudo wg set wg0 peer $(cat client_public.key) allowed-ips 10.0.0.2/32
sudo wg-quick save wg0  # 保存配置

# 创建客户端配置文件 client.conf
cat > client.conf << EOF
[Interface]
PrivateKey = <客户端私钥>
Address = 10.0.0.2/24
DNS = 8.8.8.8

[Peer]
PublicKey = <服务器公钥>
Endpoint = <你的服务器公网IP>:51820
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25
EOF
```
将文件中的 `<客户端私钥>`、`<服务器公钥>` 和 `<你的服务器公网IP>` 替换为实际值。将此 `client.conf` 文件安全地传输到客户端设备，并使用WireGuard客户端应用导入即可连接。

## 常见问题

### 连接VPN后无法访问互联网怎么办？
这通常是因为服务器端的NAT转发规则未正确生效。请检查：
1.  服务器配置文件中的 `PostUp` 规则里的网卡名称（如 `eth0`）是否与服务器实际上网的公网网卡名称一致。可以使用 `ip addr` 命令查看。
2.  是否执行了 `sudo sysctl -p` 来启用IP转发。
3.  服务器的防火墙（如`ufw`或`firewalld`）是否放行了UDP `51820` 端口以及转发流量。

### 如何添加更多的VPN客户端？
为每个新客户端重复“第五步”的操作即可。关键点是：
1.  为每个新客户端生成独立的密钥对。
2.  在服务器的 `wg0.conf` 中为每个客户端添加一个 `[Peer]` 段落，或使用 `sudo wg set` 命令添加。
3.  确保分配给每个客户端的 `Address`（如 `10.0.0.3/32`）在同一个子网内且唯一。
4.  为每个客户端生成独立的 `.conf` 配置文件。

<RelatedCards :items='[{"title":"Linux以及服务器安装方式","link":"/catalog-2/directory-nesting-333/linux-server-installation"}]' />

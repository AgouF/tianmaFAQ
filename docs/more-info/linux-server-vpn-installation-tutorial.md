---
title: "Linux服务器VPN安装教程"
description: "在Linux服务器上安装VPN（虚拟专用网络）主要有两大核心用途。首先，它能为服务器本身提供安全的远程访问通道。系统管理员可以通过VPN安全地连接到服务器进行维护，避免了直接暴露SSH等管理端口到公网的风险。其次，服务器可以充当VPN网关或"
readingTime: 5
lastUpdated: 1773327161354
---

# Linux服务器VPN安装教程

## 为什么需要在Linux服务器上安装VPN？

在Linux服务器上安装VPN（虚拟专用网络）主要有两大核心用途。首先，它能为服务器本身提供安全的远程访问通道。系统管理员可以通过VPN安全地连接到服务器进行维护，避免了直接暴露SSH等管理端口到公网的风险。其次，服务器可以充当VPN网关或中继节点。例如，你可以搭建一个OpenVPN服务器，让分散在各地的客户端设备（如员工电脑）通过加密隧道接入服务器所在的内部网络，访问受保护的资源，或者实现所有客户端流量通过服务器安全、统一地访问互联网。

无论是用于保障管理安全，还是构建企业远程访问方案，在Linux服务器上部署VPN都是一项实用且重要的技能。在开始安装前，请确保你拥有服务器的root权限，并且系统已更新到最新状态（使用 `sudo apt update && sudo apt upgrade` 或相应的yum命令）。

## 主流VPN协议选择与安装前准备

在Linux服务器上，最常见的VPN解决方案是 **OpenVPN** 和 **WireGuard**。

*   **OpenVPN**：历史悠久，非常成熟稳定，配置灵活，安全性经过广泛验证。但配置相对复杂，性能开销稍大。
*   **WireGuard**：新一代VPN协议，设计极简，内核级运行，性能卓越，连接速度快，配置更简单。是现代部署的首选，尤其适合对速度和简易性有要求的场景。

本教程将以 **WireGuard** 为例，因为它安装配置更快捷，更能体现Linux的高效。在开始前，请确认：
1.  服务器操作系统（如Ubuntu 20.04/22.04, CentOS 7/8等）。
2.  服务器有一个公网IP地址，并且在防火墙（如`ufw`或`firewalld`）中放行了UDP协议的51820端口（WireGuard默认端口）。
3.  如果你想深入了解服务器的基础系统准备，可以参考这篇关于 [Linux以及服务器安装方式](/catalog-2/directory-nesting-333/linux-server-installation) 的文章。

## 分步安装与配置WireGuard

以下以Ubuntu/Debian系统为例，介绍WireGuard的安装和基本配置。

### 步骤一：安装WireGuard
使用包管理器安装WireGuard及其工具。
```bash
sudo apt update
sudo apt install wireguard
```
对于CentOS/RHEL 8以上系统，可以启用EPEL库后安装。

### 步骤二：生成服务器密钥对
WireGuard使用公钥/私钥进行认证。
```bash
cd /etc/wireguard/
sudo umask 077 # 设置严格的权限掩码
sudo wg genkey | sudo tee server_private.key | sudo wg pubkey | sudo tee server_public.key
```
这将在`/etc/wireguard/`目录下生成`server_private.key`（私钥，必须严格保密）和`server_public.key`（公钥）。

### 步骤三：配置服务器端
创建配置文件`/etc/wireguard/wg0.conf`。
```bash
sudo nano /etc/wireguard/wg0.conf
```
将以下内容粘贴进去，并根据你的实际情况修改：
```ini
[Interface]
Address = 10.0.0.1/24 # 服务器在VPN网络中的IP，可自定义一个私有网段
ListenPort = 51820    # 监听的UDP端口
PrivateKey = <粘贴你的 server_private.key 内容>
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE
# 上面两行是配置NAT转发，允许客户端通过服务器访问互联网。eth0请替换为你服务器的公网网卡名称。

[Peer] # 这是一个客户端配置示例，稍后生成
PublicKey = <此处稍后粘贴客户端的公钥>
AllowedIPs = 10.0.0.2/32 # 分配给这个客户端的IP
```

### 步骤四：启用IP转发并配置防火墙
启用系统的IP转发功能：
```bash
sudo sysctl -w net.ipv4.ip_forward=1
```
为了使此设置永久生效，编辑`/etc/sysctl.conf`，取消`net.ipv4.ip_forward=1`的注释。

配置防火墙，允许UDP 51820端口（以UFW为例）：
```bash
sudo ufw allow 51820/udp
sudo ufw reload
```

### 步骤五：启动WireGuard服务
```bash
sudo systemctl enable wg-quick@wg0
sudo systemctl start wg-quick@wg0
```
使用 `sudo wg show` 命令可以查看当前接口和已连接的客户端状态。

### 步骤六：生成并配置客户端
在客户端机器（可以是另一台Linux、Windows、macOS或手机）上也安装WireGuard，并生成密钥对。将客户端的**公钥**复制到服务器的`wg0.conf`文件的`[Peer]`部分。同时，你需要为客户端的配置文件提供以下信息：
*   客户端的私钥
*   客户端的IP（如`10.0.0.2`）
*   服务器的公网IP和端口
*   服务器的公钥

将生成的客户端配置文件（通常是一个`.conf`文件）导入客户端的WireGuard应用即可连接。

## 常见问题

### WireGuard和OpenVPN哪个更好？
这取决于需求。**WireGuard** 在性能、速度和现代加密方面优势明显，配置简单，是大多数新项目的推荐选择。**OpenVPN** 则兼容性极广，配置极其灵活，在需要复杂路由策略或某些特定企业环境中有用武之地。对于个人用户和追求简洁高效的团队，WireGuard通常是更优解。

### 客户端连接成功但无法访问互联网？
这通常是因为服务器端的NAT转发或防火墙规则未正确设置。
1.  请确认服务器配置文件中`PostUp`和`PostDown`的iptables规则已正确添加，并且网卡名称（如`eth0`）是正确的。
2.  检查服务器的防火墙是否允许转发流量。例如，在UFW中可能需要启用转发：`sudo nano /etc/default/ufw`，将`DEFAULT_FORWARD_POLICY`改为`"ACCEPT"`。
3.  确保客户端配置中的`AllowedIPs`设置为`0.0.0.0/0`（表示将所有流量路由通过VPN）或你希望路由的特定网段。

### 如何增加更多的VPN客户端？
为每个新客户端在服务器`wg0.conf`中添加一个新的`[Peer]`区块。每个客户端需要：
1.  一个独立的客户端IP（如`10.0.0.3/32`）。
2.  其自己生成的**公钥**。
每次修改配置文件后，需要重新加载WireGuard接口：`sudo wg syncconf wg0 <(sudo wg-quick strip wg0)`。

<RelatedCards :items='[{"title":"Linux以及服务器安装方式","link":"/catalog-2/directory-nesting-333/linux-server-installation"}]' />

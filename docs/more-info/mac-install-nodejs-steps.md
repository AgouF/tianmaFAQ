---
title: "MAC安装NodeJS步骤"
description: "在 macOS 上安装 Node.js 是进行 Web 开发、服务器端编程或使用现代 JavaScript 工具链的第一步。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，它让开发者能够使用 JavaS"
readingTime: 4
lastUpdated: 1773310610590
---

# MAC安装NodeJS步骤

## Node.js 在 macOS 上的安装指南

在 macOS 上安装 Node.js 是进行 Web 开发、服务器端编程或使用现代 JavaScript 工具链的第一步。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，它让开发者能够使用 JavaScript 编写后端代码。macOS 用户有多种安装方式，每种方式都有其特点和适用场景。

### 推荐安装方法：使用 Node Version Manager (nvm)

对于大多数开发者，我们推荐使用 **nvm**（Node Version Manager）来安装和管理 Node.js。这种方法的主要优势在于可以轻松地在多个 Node.js 版本之间切换，这对于需要维护不同项目（可能依赖不同 Node.js 版本）的开发者来说至关重要。

**安装 nvm 的步骤：**
1. 打开终端（Terminal）应用程序
2. 使用以下命令安装 nvm：
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```
3. 安装完成后，关闭并重新打开终端，或者运行：
   ```bash
   source ~/.zshrc  # 如果你使用 zsh（macOS Catalina 及以后版本的默认 shell）
   # 或者
   source ~/.bash_profile  # 如果你使用 bash
   ```
4. 验证 nvm 是否安装成功：
   ```bash
   nvm --version
   ```

**使用 nvm 安装 Node.js：**
1. 安装最新的长期支持（LTS）版本：
   ```bash
   nvm install --lts
   ```
2. 或者安装特定版本：
   ```bash
   nvm install 18.0.0  # 安装 18.0.0 版本
   ```
3. 设置默认版本：
   ```bash
   nvm alias default 18.0.0
   ```

### 其他安装方法

**1. 官方安装包**
从 Node.js 官方网站下载 macOS 安装包是最直接的方法：
- 访问 [nodejs.org](https://nodejs.org/)
- 下载 macOS 安装程序（.pkg 文件）
- 双击安装包并按照向导完成安装

这种方法简单快捷，适合不熟悉命令行的用户，但缺乏多版本管理能力。

**2. 使用 Homebrew 包管理器**
如果你已经安装了 Homebrew（macOS 上流行的包管理器），可以通过以下命令安装：
```bash
brew install node
```

Homebrew 会自动处理依赖关系并保持 Node.js 更新，但同样不支持多版本切换。

### 安装后验证

无论选择哪种安装方式，安装完成后都应验证安装是否成功：

1. 检查 Node.js 版本：
   ```bash
   node --version
   ```
   这将显示已安装的 Node.js 版本号。

2. 检查 npm（Node.js 的包管理器）版本：
   ```bash
   npm --version
   ```
   npm 通常随 Node.js 一起安装。

3. 运行一个简单的测试：
   ```bash
   node -e "console.log('Node.js 安装成功！')"
   ```
   如果看到输出 "Node.js 安装成功！"，说明一切正常。

### 环境配置建议

安装 Node.js 后，建议进行以下配置：

1. **设置 npm 镜像源**（针对中国用户）：
   ```bash
   npm config set registry https://registry.npmmirror.com
   ```
   这可以显著提高包下载速度。

2. **更新 npm 到最新版本**：
   ```bash
   npm install -g npm@latest
   ```

3. **安装常用全局工具**：
   ```bash
   npm install -g yarn  # 替代 npm 的包管理器
   npm install -g nodemon  # 开发时自动重启 Node.js 应用
   ```

关于更详细的 macOS 软件安装基础，可以参考我们之前的文章：[MAC安装方式](/catalog-2/directory-nesting-333/mac-installation)，其中介绍了 macOS 上各种软件的通用安装方法。

## 常见问题

### 我已经安装了 Node.js，但终端提示“command not found”怎么办？
这通常是因为系统 PATH 环境变量没有正确配置。解决方法：
1. 确认 Node.js 确实已安装成功
2. 检查 Node.js 的安装路径是否已添加到 PATH 中
3. 如果使用 nvm 安装，确保已重新启动终端或运行了相应的 source 命令
4. 可以尝试运行 `which node` 来查找 Node.js 的安装位置

### 如何卸载 macOS 上的 Node.js？
卸载方法取决于安装方式：
- 如果通过 nvm 安装：`nvm uninstall <版本号>`
- 如果通过官方安装包安装：需要手动删除相关文件
- 如果通过 Homebrew 安装：`brew uninstall node`

建议先确定安装方式，再选择对应的卸载方法。

### 我应该安装哪个 Node.js 版本？
对于大多数用户，我们建议：
1. **生产环境**：选择最新的长期支持（LTS）版本，因为它更稳定且有长期维护
2. **学习/实验**：可以选择最新版本，体验最新的特性
3. **企业项目**：根据项目要求选择特定版本

使用 nvm 可以让你轻松地在不同版本间切换，满足不同项目的需求。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

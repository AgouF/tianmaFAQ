---
title: "MAC安装NodeJS步骤"
description: "Node.js是一个基于Chrome V8引擎的JavaScript运行时环境，它让开发者能够使用JavaScript来编写服务器端和命令行工具。对于前端开发、全栈工程或构建自动化脚本来说，在Mac上安装Node.js是必不可少的第一步。安"
readingTime: 3
lastUpdated: 1773222980970
---

# MAC安装NodeJS步骤

## 如何为你的Mac安装Node.js

Node.js是一个基于Chrome V8引擎的JavaScript运行时环境，它让开发者能够使用JavaScript来编写服务器端和命令行工具。对于前端开发、全栈工程或构建自动化脚本来说，在Mac上安装Node.js是必不可少的第一步。安装过程本身并不复杂，但选择正确的方法可以让你后续的版本管理和项目依赖处理更加顺畅。

### 推荐安装方法：使用版本管理工具

虽然你可以直接从Node.js官网下载安装包进行安装，但对于开发者，我们强烈推荐使用**Node版本管理工具**。这是因为不同的项目可能需要不同版本的Node.js，手动切换版本非常麻烦且容易出错。

目前最主流的两个工具是 **nvm** 和 **fnm**。我们以`nvm`为例，因为它社区庞大、文档丰富。

**通过Homebrew和nvm安装（推荐步骤）：**

1.  **安装Homebrew**：如果你还没有安装这个macOS上强大的包管理器，请先打开终端，粘贴以下命令：
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    按照提示完成安装。

2.  **使用Homebrew安装nvm**：
    ```bash
    brew install nvm
    ```
    安装完成后，根据终端输出的提示，将nvm的初始化脚本添加到你的shell配置文件（如 `~/.zshrc` 或 `~/.bash_profile`）中。通常需要添加类似这样的行：
    ```bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
    ```
    添加后，执行 `source ~/.zshrc` 使配置生效。

3.  **使用nvm安装Node.js**：
    ```bash
    nvm install --lts
    ```
    这个命令会安装最新的长期支持版本，这是最稳定、最推荐用于生产的版本。安装完成后，使用 `node -v` 和 `npm -v` 来验证安装是否成功。

### 验证安装与基本使用

安装成功后，你可以在终端进行一些简单操作来确保一切就绪：
- `node -v`：查看已安装的Node.js版本。
- `npm -v`：查看随Node.js一同安装的npm包管理器的版本。
- 运行 `node` 命令可以进入Node.js的交互式环境（REPL），直接输入JavaScript代码并执行。

### 管理多个Node.js版本

这是使用nvm的最大优势。你可以轻松安装、切换和删除不同版本。
- `nvm install 18`：安装Node.js 18的最新版本。
- `nvm ls`：列出所有本地已安装的版本。
- `nvm use 16`：将当前终端会话的Node.js切换到版本16。
- `nvm alias default 18`：将Node.js 18设置为系统默认版本。

### 配置npm与开始项目

Node.js安装包自带了npm。为了提高依赖安装速度并避免权限问题，建议进行一些初始配置：
- **设置淘宝镜像**：国内用户可以将npm源设置为国内镜像以加速下载。
  ```bash
  npm config set registry https://registry.npmmirror.com/
  ```
- **初始化新项目**：进入你的项目目录，运行 `npm init -y` 可以快速创建一个`package.json`文件来管理项目依赖。

## 常见问题

### 安装nvm后，在终端输入`nvm`命令提示“command not found”？
这通常是因为shell配置没有正确加载。请确保你已按照安装完成后的提示，将nvm的初始化脚本行添加到了正确的配置文件中（对于新版macOS，通常是`~/.zshrc`）。添加后，务必执行 `source ~/.zshrc` 或重新打开终端窗口。

### 我应该安装哪个版本的Node.js？
对于大多数新用户和项目，建议安装**LTS版本**。LTS代表“长期支持”，它更稳定、有更长的维护周期，适合生产环境。你可以使用 `nvm install --lts` 来安装它。对于想尝试最新特性的用户，可以安装“Current”版本，但请注意其可能不够稳定。

### 除了nvm，还有其他安装方式吗？
有的。除了使用版本管理工具，你还可以：
1.  **从官网下载安装包**：访问 Node.js 官网，下载`.pkg`文件进行图形化安装。这种方法最简单，但不利于多版本管理。
2.  **使用Homebrew直接安装**：运行 `brew install node`。这种方法同样简单，但Homebrew通常只维护一个主要版本，切换版本不如nvm灵活。
你可以参考我们关于 [MAC安装方式](/catalog-2/directory-nesting-333/mac-installation) 的更多指南，了解其他软件在Mac上的通用安装思路。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

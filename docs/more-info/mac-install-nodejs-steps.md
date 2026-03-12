---
title: "MAC安装NodeJS步骤"
description: "在 macOS 上安装 Node.js 是进行现代 Web 开发、服务器端编程或使用 JavaScript 构建工具链的第一步。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，让开发者能够在浏览器之"
readingTime: 4
lastUpdated: 1773316988910
---

# MAC安装NodeJS步骤

## Node.js 在 macOS 上的安装指南

在 macOS 上安装 Node.js 是进行现代 Web 开发、服务器端编程或使用 JavaScript 构建工具链的第一步。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，让开发者能够在浏览器之外运行 JavaScript 代码。macOS 系统因其类 Unix 的特性，与 Node.js 的兼容性非常好。本文将详细介绍几种主流且可靠的安装方法，帮助你快速搭建开发环境。

### 方法一：使用官方安装包（最直接）

这是最适合新手的安装方式，过程简单直观。
1.  **访问官网**：打开 [Node.js 官方网站](https://nodejs.org/zh-cn/)。
2.  **选择版本**：官网会提供两个主要版本：**LTS（长期支持版）** 和 **Current（最新特性版）**。对于学习和生产环境，强烈建议选择 **LTS 版本**，它更稳定且拥有长期的安全更新。
3.  **下载安装**：点击对应的 macOS 安装包（.pkg 文件）进行下载。下载完成后，双击打开，按照图形化安装向导的提示一步步操作即可，整个过程与安装其他普通软件无异。
4.  **验证安装**：安装完成后，打开终端（Terminal）应用程序，输入以下命令并回车：
    ```bash
    node -v
    npm -v
    ```
    如果分别显示出 Node.js 和 npm（Node 包管理器）的版本号，例如 `v18.17.0` 和 `9.6.7`，则说明安装成功。

### 方法二：使用 Homebrew 安装（推荐给开发者）

Homebrew 是 macOS 上强大的包管理器，通过命令行管理软件非常方便。如果你经常进行开发工作，这是最佳选择。
1.  **安装 Homebrew**：如果你还没有安装 Homebrew，请打开终端，访问 [brew.sh](https://brew.sh/) 官网，复制并运行首页提供的安装脚本。
2.  **安装 Node.js**：在终端中运行以下命令：
    ```bash
    brew install node
    ```
    这个命令会自动下载并安装最新稳定版的 Node.js 和 npm。
3.  **验证安装**：同样使用 `node -v` 和 `npm -v` 来确认安装成功。使用 Homebrew 安装的另一个好处是，未来升级 Node.js 只需运行 `brew upgrade node` 即可。

### 方法三：使用版本管理工具 nvm（高级选择）

如果你需要在多个 Node.js 版本之间切换（例如，不同的项目需要不同版本的 Node），那么 nvm（Node Version Manager）是完美的工具。
1.  **安装 nvm**：通过 Homebrew 安装 (`brew install nvm`)，或者使用官方提供的安装脚本。使用脚本安装时，请务必访问 [nvm GitHub 仓库](https://github.com/nvm-sh/nvm) 查看并复制最新的安装命令。
2.  **安装特定 Node 版本**：安装 nvm 后，重启终端，然后你可以安装任意版本的 Node.js。例如：
    ```bash
    nvm install 18  # 安装最新的 Node.js 18.x 版本
    nvm install 20  # 安装最新的 Node.js 20.x 版本
    ```
3.  **切换和使用版本**：
    ```bash
    nvm use 18      # 在当前终端会话中切换到 18.x 版本
    nvm alias default 18  # 将 18.x 设置为默认版本
    ```
    使用 `nvm ls` 可以查看所有已安装的版本。

### 安装后的第一步

安装成功后，建议先配置 npm 的国内镜像源，以加速后续安装包的速度。在终端中执行：
```bash
npm config set registry https://registry.npmmirror.com/
```

## 常见问题

### 安装后 `node` 命令找不到怎么办？
这通常是因为终端会话没有更新系统的 PATH 环境变量。请尝试以下步骤：
1.  完全关闭终端应用程序，然后重新打开。
2.  如果使用 Homebrew 安装，请确保 Homebrew 的路径已正确配置在 `~/.zshrc`（如果你使用 macOS Catalina 及之后版本，默认 shell 是 zsh）文件中。Homebrew 安装成功后通常会有提示。
3.  运行 `echo $PATH` 查看输出中是否包含 Node.js 的安装路径（如 `/usr/local/bin`）。

### 应该选择哪个安装方法？
*   **初学者或只想快速使用**：请选择**方法一（官方安装包）**，最省心。
*   **开发者或需要管理多个软件**：强烈推荐**方法二（Homebrew）**，管理更新和卸载都非常方便。
*   **需要为不同项目切换不同 Node 版本**：必须选择**方法三（nvm）**。

### 如何彻底卸载 Node.js？
卸载方式取决于你的安装方式：
*   **通过官方安装包安装**：可以尝试使用第三方卸载工具，或手动删除 `/usr/local/lib` 和 `/usr/local/include` 中与 node 相关的文件，并删除 `/usr/local/bin` 下的 `node`、`npm` 等命令。操作前请备份。
*   **通过 Homebrew 安装**：非常简单，在终端运行 `brew uninstall node` 即可。
*   **通过 nvm 安装**：首先切换到非要卸载的版本，然后运行 `nvm uninstall <版本号>`。

无论采用哪种方式，安装 Node.js 都是开启你 JavaScript 全栈之旅的关键一步。就像为你的 Mac 安装其他专业软件一样，选择适合自己工作流的方式最重要。如果你对其他开发环境的配置感兴趣，也可以参考我们关于 [MAC安装方式](/catalog-2/directory-nesting-333/mac-installation) 的系列文章。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

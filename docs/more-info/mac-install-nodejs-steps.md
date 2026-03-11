---
title: "MAC安装NodeJS步骤"
description: "在 macOS 上安装 Node.js 是进行现代 Web 开发、服务器端编程或使用 JavaScript 构建工具链的第一步。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，让开发者能够使用 Ja"
readingTime: 4
lastUpdated: 1773259114589
---

# MAC安装NodeJS步骤

## Node.js 在 macOS 上的安装指南

在 macOS 上安装 Node.js 是进行现代 Web 开发、服务器端编程或使用 JavaScript 构建工具链的第一步。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，让开发者能够使用 JavaScript 编写后端服务。在 macOS 上，你有多种可靠且便捷的安装方式，本文将详细介绍最常用的几种方法。

### 方法一：使用官方安装包（最简单）

这是最适合新手的方法。
1.  **访问官网**：打开浏览器，访问 [Node.js 官方网站](https://nodejs.org/zh-cn/)。
2.  **选择版本**：你会看到两个主要版本推荐：**LTS（长期支持版）** 和 **最新版**。对于大多数用户，尤其是生产环境或学习，强烈建议选择 **LTS 版本**，因为它更稳定且支持周期长。
3.  **下载并安装**：点击对应的 macOS 安装包（.pkg 文件）进行下载。下载完成后，双击打开，按照图形化安装向导的提示一步步操作即可，过程与安装其他普通软件无异。
4.  **验证安装**：安装完成后，需要打开“终端”应用程序（可在“应用程序”->“实用工具”中找到）。在终端中依次输入以下两个命令并回车：
    ```bash
    node -v
    npm -v
    ```
    如果安装成功，终端会分别显示你安装的 Node.js 版本号和 npm（Node 包管理器）版本号。

### 方法二：使用 Homebrew 安装（推荐给开发者）

Homebrew 是 macOS 上强大的包管理器，通过命令行管理软件非常方便。如果你经常进行开发工作，这是最佳选择。
1.  **安装 Homebrew**：如果你还没有安装 Homebrew，请打开终端，粘贴以下命令并回车：
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    按照提示完成安装。
2.  **使用 Homebrew 安装 Node.js**：在终端中输入以下命令：
    ```bash
    brew install node
    ```
    Homebrew 会自动下载并安装 Node.js 及其依赖，包括 npm。
3.  **验证安装**：同样使用 `node -v` 和 `npm -v` 来确认安装成功。使用 Homebrew 安装的另一个好处是，未来升级 Node.js 只需运行 `brew upgrade node` 即可。

### 方法三：使用 Node 版本管理器（nvm）

如果你需要在不同项目中使用不同的 Node.js 版本，nvm（Node Version Manager）是必不可少的工具。它允许你在同一台机器上安装和切换多个 Node.js 版本。
1.  **安装 nvm**：通过 Homebrew 安装（`brew install nvm`），或者使用官方安装脚本。建议通过脚本安装，在终端中运行：
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```
    安装完成后，**关闭并重新打开终端**，或者运行 `source ~/.zshrc`（如果你使用 Zsh shell，这是 macOS Catalina 及之后版本的默认shell）使配置生效。
2.  **使用 nvm 安装 Node.js**：安装一个 LTS 版本：
    ```bash
    nvm install --lts
    ```
    或者安装一个特定版本：`nvm install 18.17.0`。
3.  **切换和使用版本**：使用 `nvm use 18.17.0` 来切换版本。使用 `nvm ls` 可以查看所有已安装的版本。

### 安装后的重要步骤

无论通过哪种方式安装，完成后都建议做一件事：**配置 npm 的全局安装路径**，以避免将来使用 `npm install -g` 安装全局包时出现权限错误。
在终端中执行：
```bash
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
```
然后，你需要将 `~/.npm-global/bin` 添加到系统的 PATH 环境变量中。具体操作与配置 shell 环境相关，你可以参考我们另一篇关于环境配置的详细文章 **[MAC安装方式](/catalog-2/directory-nesting-333/mac-installation)** 来获得指导。

## 常见问题

### 安装时提示“权限被拒绝”错误怎么办？
这通常是因为使用 `sudo` 或权限问题。最佳实践是**避免使用 `sudo` 来安装 Node.js 或 npm 包**。如果你已经用其他方式安装并遇到了权限问题，可以尝试重置 npm 默认目录的所有权：
```bash
sudo chown -R $(whoami) ~/.npm
```
更根本的解决方案是使用上述提到的“配置 npm 全局安装路径”方法，或直接使用 nvm 来管理 Node.js，它可以完全避免系统级的权限冲突。

### 我已经安装了 Node.js，如何升级到新版本？
这取决于你的安装方式：
*   **通过官方安装包**：前往官网下载新版安装包，重新安装即可覆盖。
*   **通过 Homebrew**：运行 `brew update` 然后 `brew upgrade node`。
*   **通过 nvm**：运行 `nvm install node --reinstall-packages-from=node`（其中 `node` 是你当前版本别名，或使用具体版本号），这会安装最新版并迁移全局包，然后使用 `nvm use node` 切换过去。

### 安装后 `node` 或 `npm` 命令找不到怎么办？
这表示系统的 PATH 环境变量没有包含 Node.js 的安装路径。
*   如果你使用官方安装包，通常会自动配置。可以尝试重启终端或电脑。
*   如果你使用 Homebrew 安装，请确保 Homebrew 本身已正确配置在 PATH 中。运行 `echo $PATH` 检查是否包含 `/usr/local/bin`。
*   如果你使用 nvm，请确保你已按照安装说明正确运行了 `source` 命令或重启了终端。可以运行 `nvm --version` 检查 nvm 本身是否可用。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

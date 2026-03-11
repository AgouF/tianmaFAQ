---
title: "MAC安装NodeJS步骤"
description: "Node.js 是当今现代 Web 开发和 JavaScript 服务端编程的核心运行环境。在 macOS 上安装 Node.js 有多种可靠的方法，每种方法都各有优劣，适合不同的使用场景。选择正确的安装方式可以帮助你更好地管理版本和依赖。"
readingTime: 4
lastUpdated: 1773240191825
---

# MAC安装NodeJS步骤

## Node.js 在 macOS 上的安装指南

Node.js 是当今现代 Web 开发和 JavaScript 服务端编程的核心运行环境。在 macOS 上安装 Node.js 有多种可靠的方法，每种方法都各有优劣，适合不同的使用场景。选择正确的安装方式可以帮助你更好地管理版本和依赖。

### 推荐安装方法：使用版本管理工具

对于大多数开发者，尤其是需要同时处理多个项目的专业人士，我们强烈推荐使用版本管理工具进行安装。这可以让你轻松地在不同版本的 Node.js 之间切换，以适应不同项目的需求。

目前最主流的版本管理工具是 **nvm**。以下是使用 nvm 安装 Node.js 的详细步骤：

1.  **安装 nvm**：首先，你需要安装 Node Version Manager。打开你的终端，执行以下命令。建议使用官方安装脚本：
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```
    安装完成后，关闭并重新打开终端，或者运行 `source ~/.zshrc`（如果你使用 Zsh）或 `source ~/.bash_profile`（如果你使用 Bash）使配置生效。

2.  **使用 nvm 安装 Node.js**：安装 nvm 后，你可以轻松安装任何版本的 Node.js。
    *   安装最新的长期支持版本：`nvm install --lts`
    *   安装最新的当前版本：`nvm install node`
    *   安装特定版本：`nvm install 18.12.1`

3.  **切换和使用版本**：你可以列出所有已安装的版本 (`nvm ls`)，并通过 `nvm use <version>` 来切换当前终端会话使用的版本。还可以通过 `nvm alias default <version>` 来设置默认版本。

### 其他安装方式

除了 nvm，你还有其他选择：

*   **官方安装包**：最直接的方式是从 [Node.js 官网](https://nodejs.org) 下载 macOS 安装包。双击 `.pkg` 文件并按照图形界面向导完成安装即可。这种方式简单快捷，适合新手或只需要单一稳定版本的用户。缺点是难以管理多个版本。
*   **使用 Homebrew**：如果你已经是 Homebrew 的用户，可以通过包管理器安装。在终端中运行 `brew install node` 即可。Homebrew 同样便于安装和更新，但与 nvm 相比，版本切换不够灵活。

无论选择哪种方式，安装完成后，都请在终端中运行 `node -v` 和 `npm -v` 来验证 Node.js 和其包管理器 npm 是否已成功安装并显示版本号。

### 安装后的配置建议

成功安装 Node.js 后，建议进行以下配置以优化开发体验：

1.  **配置 npm 镜像**：为了提升在中国大陆下载包的速度，可以将 npm 的注册表地址设置为国内镜像源。
    ```bash
    npm config set registry https://registry.npmmirror.com/
    ```
2.  **全局安装常用工具**：一些开发工具如 `nodemon`（自动重启应用）、`yarn` 或 `pnpm`（替代 npm 的包管理器）非常有用，可以考虑全局安装。
    ```bash
    npm install -g nodemon pnpm
    ```

## 常见问题

### 我已经通过安装包安装了 Node.js，如何改用 nvm？
首先，建议你从 macOS 的“系统偏好设置” -> “用户与群组”中，手动卸载之前通过安装包安装的 Node.js。然后，按照上述 nvm 的安装步骤重新开始。nvm 会将所有文件安装在你的用户目录下，不会与系统全局安装冲突，管理起来更加清晰。

### 使用 nvm 安装时出现权限错误怎么办？
大多数权限错误是因为之前的安装残留或目录所有权问题。确保你拥有 `~/.nvm` 目录的所有权。你可以尝试运行 `sudo chown -R $(whoami) ~/.nvm` 来修复权限。同时，请确保你的 shell 配置文件（如 `.zshrc`）中正确配置了 nvm 的环境变量。

### 如何彻底卸载 macOS 上的 Node.js？
卸载方式取决于你的安装方法。如果通过 nvm 安装，只需删除 `~/.nvm` 目录并从 shell 配置文件中移除相关行即可。如果通过官方安装包安装，除了在应用程序中移除，可能还需要手动删除 `/usr/local/lib` 和 `/usr/local/include` 中相关的 node 文件。对于通过 Homebrew 安装的情况，运行 `brew uninstall node`。更详细的系统级清理步骤，可以参考我们关于 [MAC安装方式](/catalog-2/directory-nesting-333/mac-installation) 的通用指南。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

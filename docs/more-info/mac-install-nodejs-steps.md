---
title: "MAC安装NodeJS步骤"
description: "在 macOS 上安装 Node.js 是进行 Web 开发、构建工具链或运行 JavaScript 服务端应用的第一步。macOS 系统提供了多种灵活且可靠的安装方式，您可以根据自己的技术偏好和项目需求进行选择。正确的安装方法不仅能确保环"
readingTime: 4
lastUpdated: 1773273434336
---

# MAC安装NodeJS步骤

## Node.js 在 macOS 上的安装指南

在 macOS 上安装 Node.js 是进行 Web 开发、构建工具链或运行 JavaScript 服务端应用的第一步。macOS 系统提供了多种灵活且可靠的安装方式，您可以根据自己的技术偏好和项目需求进行选择。正确的安装方法不仅能确保环境的稳定性，还能方便后续的版本管理。本文将详细介绍几种主流且经过验证的安装步骤。

### 通过官方安装包安装（最简单直接）

这是最适合新手的方法，过程直观。
1.  **访问官网**：打开 [Node.js 官方网站](https://nodejs.org/zh-cn/)。
2.  **选择版本**：通常建议选择标有“长期维护版 (LTS)”的版本，它为生产环境提供了更好的稳定性和支持。
3.  **下载安装**：点击下载 `.pkg` 安装包。下载完成后，双击打开，跟随图形化安装向导的提示一步步操作即可，过程与安装其他 macOS 软件无异。
4.  **验证安装**：安装完成后，打开“终端”应用，输入以下命令并回车：
    ```bash
    node -v
    npm -v
    ```
    如果分别正确显示 Node.js 和 npm（Node 包管理器）的版本号，如 `v18.17.0` 和 `9.6.7`，则表明安装成功。

**优点**：无需命令行操作，简单快捷。
**缺点**：版本切换不够灵活，升级需要重新下载安装包。

### 通过 Homebrew 安装（推荐给开发者）

Homebrew 是 macOS 上强大的包管理器，通过它安装和管理 Node.js 非常高效。
1.  **安装 Homebrew**：如果您尚未安装 Homebrew，请在终端中运行以下命令：
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    按照提示完成安装。
2.  **使用 Brew 安装 Node.js**：在终端中执行以下命令：
    ```bash
    brew install node
    ```
    Homebrew 会自动下载并安装最新的稳定版 Node.js 及其包含的 npm。
3.  **验证安装**：同样使用 `node -v` 和 `npm -v` 命令验证。

**优点**：安装和管理方便，易于后续升级（使用 `brew upgrade node`）。
**缺点**：需要先安装 Homebrew。

### 使用版本管理工具 nvm 安装（高级推荐）

对于需要同时在不同项目中使用多个 Node.js 版本的专业开发者，nvm (Node Version Manager) 是最佳选择。它允许你在系统中安装并随时切换多个版本。
1.  **安装 nvm**：通过终端脚本安装。请务必访问 [nvm 官方 GitHub 仓库](https://github.com/nvm-sh/nvm) 查看并复制最新的安装命令。通常命令如下：
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```
    安装完成后，关闭并重新打开终端，或运行 `source ~/.zshrc`（如果你使用 Zsh shell，这是 macOS Catalina 及之后版本的默认shell）使配置生效。
2.  **使用 nvm 安装 Node.js**：
    ```bash
    nvm install --lts # 安装最新的 LTS 版本
    # 或安装特定版本
    # nvm install 16.14.0
    ```
3.  **切换和使用版本**：
    ```bash
    nvm use --lts # 使用刚安装的 LTS 版本
    nvm alias default node # 设置默认版本（可选）
    ```

**优点**：完美的多版本管理和切换，完全隔离不同项目的环境。
**缺点**：配置步骤稍多，需要一定的命令行操作经验。

无论选择哪种方式，安装完成后，你就可以在 macOS 上开始你的 Node.js 之旅了。对于更深入的配置和优化，可以参考我们另一篇关于 [MAC安装方式](/catalog-2/directory-nesting-333/mac-installation) 的详细指南。

## 常见问题

### 我已经通过安装包安装了 Node.js，如何升级到新版本？
如果你使用的是官方安装包，最直接的方法是去官网下载新版本的 `.pkg` 文件重新安装，安装程序会自动覆盖旧版本。如果你希望更优雅地管理版本，建议卸载当前版本后，改用 **Homebrew** (`brew upgrade node`) 或 **nvm** (`nvm install new-version`) 进行安装和升级，后者在长期开发中更为方便。

### 安装时提示“权限被拒绝”或“命令未找到”怎么办？
这类错误通常与环境变量或权限有关。
1.  **对于“命令未找到 (command not found)”**：安装后请确保重启终端，或手动刷新 shell 配置（如运行 `source ~/.zshrc`）。如果使用 nvm 或 Homebrew 安装，请检查它们的安装脚本是否已正确配置路径。
2.  **对于“权限被拒绝 (EACCES)”**：这通常发生在全局安装 npm 包时。**不建议使用 `sudo` 来解决**，因为这可能导致安全问题。正确的做法是重新配置 npm 的默认目录权限。可以按照官方指南，使用 `npm config set prefix` 命令更改全局安装路径到你有写入权限的目录。

### 如何彻底卸载 macOS 上的 Node.js？
彻底卸载取决于你的安装方式：
*   **通过安装包安装**：除了删除 Node.js 程序本身，还需要手动清理 `/usr/local/lib`、`/usr/local/include` 等目录下的 `node`、`node_modules` 相关文件，以及 `/usr/local/bin` 下的相关链接。使用专门的卸载脚本或查找详细教程更稳妥。
*   **通过 Homebrew 安装**：运行 `brew uninstall node` 并按照提示清理。
*   **通过 nvm 安装**：首先删除要卸载的版本 `nvm uninstall <version>`，如果你想移除 nvm 本身，则需删除其安装目录（通常是 `~/.nvm`）并从 shell 配置文件（如 `~/.zshrc`）中移除相关行。相比之下，使用版本管理器进行卸载是最干净和简单的。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

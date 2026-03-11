---
title: "MAC安装NodeJS步骤"
description: "在 macOS 上安装 Node.js 是进行 Web 开发、运行 JavaScript 服务器端应用或使用现代前端构建工具（如 Vue CLI、Create React App）的第一步。macOS 系统提供了多种清晰、可靠的安装方式，用"
readingTime: 5
lastUpdated: 1773263185984
---

# MAC安装NodeJS步骤

## Node.js 在 macOS 上的安装步骤

在 macOS 上安装 Node.js 是进行 Web 开发、运行 JavaScript 服务器端应用或使用现代前端构建工具（如 Vue CLI、Create React App）的第一步。macOS 系统提供了多种清晰、可靠的安装方式，用户可以根据自身的技术偏好和项目需求进行选择。下面将详细介绍最常用的几种方法及其具体操作步骤。

### 方法一：使用官方安装包（最推荐新手）

这是最直接、最不易出错的方式，适合大多数用户，尤其是刚接触开发的新手。

1.  **访问官网下载**：打开浏览器，访问 [Node.js 官方网站](https://nodejs.org/zh-cn/)。
2.  **选择版本**：官网会提供两个主要版本：**LTS（长期支持版）** 和 **Current（最新特性版）**。对于学习和生产环境，**强烈建议选择 LTS 版本**，因为它更稳定且拥有长期的安全更新。
3.  **下载并安装**：点击对应的 macOS 安装器（`.pkg` 文件）进行下载。下载完成后，双击打开 `.pkg` 文件，跟随图形化安装向导的提示一步步完成即可。安装程序会自动配置好环境变量。
4.  **验证安装**：安装完成后，需要打开“终端”应用程序进行验证。
    *   输入 `node -v` 并回车，会显示安装的 Node.js 版本号（例如 `v18.17.0`）。
    *   输入 `npm -v` 并回车，会显示随 Node.js 一同安装的包管理器 npm 的版本号。
    如果两者都能正确显示版本信息，说明安装成功。

### 方法二：使用 Homebrew 安装（推荐开发者）

Homebrew 是 macOS 上强大的包管理器，通过命令行管理软件非常方便，便于后续的升级和管理。

1.  **安装 Homebrew**：如果你还没有安装 Homebrew，请打开终端，粘贴以下命令并回车：
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    按照提示完成安装。
2.  **使用 Homebrew 安装 Node.js**：在终端中输入以下命令：
    ```bash
    brew install node
    ```
    Homebrew 会自动下载并安装 Node.js 和 npm。
3.  **验证安装**：同样使用 `node -v` 和 `npm -v` 命令验证。

**优势**：使用 Homebrew 可以轻松更新 (`brew upgrade node`) 或卸载 (`brew uninstall node`) Node.js，并且能管理多个版本（需借助 `n` 或 `nvm` 等工具）。

### 方法三：使用版本管理工具 nvm（推荐高级用户/多项目）

如果你的工作需要同时维护多个需要不同 Node.js 版本的项目，那么 nvm (Node Version Manager) 是最佳选择。它允许你在同一台机器上安装并随时切换多个 Node.js 版本。

1.  **安装 nvm**：通过 Homebrew 安装 (`brew install nvm`)，或使用官方提供的安装脚本。使用脚本安装的常见命令如下（安装前请务必查阅 [nvm GitHub 主页](https://github.com/nvm-sh/nvm) 获取最新命令）：
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```
    安装后，根据提示可能需要重启终端或执行 `source ~/.zshrc`（如果你使用 Zsh shell，这是 macOS Catalina 及之后版本的默认shell）。
2.  **使用 nvm 安装 Node.js**：
    *   安装最新的 LTS 版本：`nvm install --lts`
    *   安装特定版本：`nvm install 16.20.0`
    *   查看已安装版本：`nvm ls`
    *   切换使用某个版本：`nvm use 18.17.0`
    *   设置默认版本：`nvm alias default 18.17.0`
3.  **验证**：切换版本后，使用 `node -v` 验证当前生效的版本。

### 安装后的基础配置

安装成功后，建议进行一项基础配置：更改 npm 的全局安装包路径，以避免使用 `sudo` 权限。
在终端中执行：
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
```
然后，将 `~/.npm-global/bin` 添加到你的环境变量 `PATH` 中。通常需要编辑 `~/.zshrc` 文件，添加一行 `export PATH=~/.npm-global/bin:$PATH`，然后执行 `source ~/.zshrc` 使其生效。

## 常见问题

### 安装时提示“权限被拒绝”怎么办？
这通常发生在使用 `npm install -g` 全局安装包时。根本的解决方法是按照上文“安装后的基础配置”更改 npm 的全局路径。临时解决方案是在命令前加上 `sudo`，但这不是最佳实践。另外，请确保你是从官方渠道下载安装包，系统偏好设置中的“安全性与隐私”允许运行来自“App Store 和被认可的开发者”的应用。

### 已经安装了 Node.js，如何升级到新版本？
这取决于你的安装方式：
*   **通过官方 `.pkg` 安装**：重新下载新版安装包，再次运行安装程序，它会覆盖旧版。
*   **通过 Homebrew 安装**：在终端运行 `brew update && brew upgrade node`。
*   **通过 nvm 安装**：直接运行 `nvm install <新版本号>`，然后使用 `nvm use` 或 `nvm alias default` 切换到新版本。旧版本仍保留在系统中可供切换。

### 安装过程与一般的 [MAC安装方式](/catalog-2/directory-nesting-333/mac-installation) 有何异同？
Node.js 的安装遵循了 macOS 软件安装的通用逻辑：提供直观的图形化安装包（`.pkg`）和灵活的命令行方式（Homebrew）。其特殊之处在于，作为开发环境的核心工具，它更常通过专业的包管理器（Homebrew）或版本管理器（nvm）来安装，以满足开发者对多版本管理和便捷更新的需求。这与安装一个普通的桌面应用程序（如浏览器或办公软件）只需下载 `.dmg` 文件拖拽到“应用程序”文件夹相比，步骤稍多，但提供了更强的可控性。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

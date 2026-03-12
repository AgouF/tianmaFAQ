---
title: "MAC安装NodeJS步骤"
description: "在 macOS 上安装 Node.js 是进行 Web 开发、运行 JavaScript 服务端应用或使用各种现代前端工具链（如 Vue CLI、Create React App）的第一步。macOS 系统提供了多种清晰、可靠的安装方式，您"
readingTime: 4
lastUpdated: 1773292330131
---

# MAC安装NodeJS步骤

## Node.js 在 macOS 上的安装步骤

在 macOS 上安装 Node.js 是进行 Web 开发、运行 JavaScript 服务端应用或使用各种现代前端工具链（如 Vue CLI、Create React App）的第一步。macOS 系统提供了多种清晰、可靠的安装方式，您可以根据自身的技术偏好和项目需求进行选择。下面将详细介绍最常用的几种方法及其具体步骤。

### 方法一：使用官方安装包（最简便）

这是最适合新手的方法，整个过程图形化，无需接触命令行。

1.  **访问官网下载**：打开浏览器，访问 [Node.js 官方网站](https://nodejs.org/zh-cn/)。
2.  **选择版本**：官网会提供两个主要版本：**LTS（长期支持版）** 和 **最新版**。对于学习和生产环境，强烈建议下载 **LTS 版本**，它更稳定且拥有长期的安全更新。
3.  **下载并安装**：点击对应的 macOS 安装包（`.pkg` 文件）进行下载。下载完成后，双击打开，跟随安装向导的提示（点击“继续”、“同意”、“安装”）即可完成。安装程序会自动配置好环境变量。
4.  **验证安装**：安装完成后，打开“终端”应用，输入以下命令并回车：
    ```bash
    node -v
    npm -v
    ```
    如果分别显示出 Node.js 和 npm（Node 包管理器）的版本号，例如 `v18.17.0` 和 `9.6.7`，则说明安装成功。

### 方法二：使用 Homebrew 安装（推荐开发者使用）

Homebrew 是 macOS 上强大的包管理器，通过命令行管理软件，非常方便后续的升级和管理。如果您尚未安装 Homebrew，请先参考 [MAC安装方式](/catalog-2/directory-nesting-333/mac-installation) 中的指引进行安装。

1.  **打开终端**：通过 Spotlight（Command+空格，搜索“终端”）或从“应用程序”文件夹中打开。
2.  **安装 Node.js**：在终端中输入以下命令并回车：
    ```bash
    brew install node
    ```
    Homebrew 会自动下载并安装 Node.js 及其附带的 npm。
3.  **验证安装**：同样使用 `node -v` 和 `npm -v` 命令来确认安装成功。使用 Homebrew 安装后，未来可以通过 `brew upgrade node` 轻松升级到新版本。

### 方法三：使用 Node 版本管理器（nvm）

如果您需要在多个 Node.js 版本之间切换（例如，不同项目需要不同版本），nvm 是最佳工具。

1.  **安装 nvm**：在终端中运行以下安装脚本（请务必访问 [nvm GitHub 仓库](https://github.com/nvm-sh/nvm) 以获取最新的安装命令）：
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```
    安装完成后，关闭并重新打开终端，或运行 `source ~/.zshrc`（如果使用 Zsh shell，这是 macOS Catalina 及之后版本的默认shell）使配置生效。
2.  **使用 nvm 安装 Node.js**：
    ```bash
    nvm install --lts # 安装最新的 LTS 版本
    # 或指定版本：nvm install 16
    ```
3.  **切换和使用版本**：
    ```bash
    nvm use --lts # 使用刚安装的 LTS 版本
    nvm ls # 查看已安装的所有版本
    ```

### 安装后的重要配置

安装成功后，建议进行一项配置以优化 npm 的全局包安装体验，避免权限问题：
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
```
然后，将 `~/.npm-global/bin` 添加到您的环境变量 `PATH` 中。通常可以将 `export PATH=~/.npm-global/bin:$PATH` 这行添加到 `~/.zshrc` 文件末尾，然后运行 `source ~/.zshrc`。

## 常见问题

### 安装后 `node` 命令找不到怎么办？
这通常是因为终端会话没有刷新环境变量。请尝试：
1.  完全关闭终端应用并重新打开。
2.  如果使用 Homebrew 安装，请确认 Homebrew 本身已正确配置。可以运行 `brew doctor` 检查。
3.  检查您的 shell 配置文件（如 `~/.zshrc`）中是否正确设置了 PATH。

### 应该选择哪个安装方法？
- **普通用户或新手**：请直接使用**方法一（官方安装包）**，最省心。
- **开发者或需要管理多个软件**：强烈推荐**方法二（Homebrew）**，管理升级非常方便。
- **需要为不同项目切换不同 Node.js 版本**：必须使用**方法三（nvm）**。

### 如何彻底卸载 Node.js？
卸载方式取决于安装方式：
- **通过安装包安装**：可以尝试使用第三方卸载工具，或手动删除 `/usr/local/bin` 中相关的 node、npm 文件以及 `/usr/local/lib` 中的 node_modules 目录。
- **通过 Homebrew 安装**：运行 `brew uninstall node` 即可。
- **通过 nvm 安装**：首先切换到非待删除版本，然后运行 `nvm uninstall <版本号>`。卸载 nvm 本身只需删除其安装目录（通常为 `~/.nvm`）并从 `~/.zshrc` 中移除相关行。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

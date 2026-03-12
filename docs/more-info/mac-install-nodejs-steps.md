---
title: "MAC安装NodeJS步骤"
description: "在 macOS 上安装 Node.js 是进行 Web 开发、构建工具链或运行 JavaScript 服务端应用的第一步。macOS 系统提供了多种清晰、可靠的安装方式，用户可以根据自身的技术背景和需求选择最合适的一种。主流方法包括使用官方"
readingTime: 4
lastUpdated: 1773326803578
---

# MAC安装NodeJS步骤

## Node.js 在 macOS 上的安装方法

在 macOS 上安装 Node.js 是进行 Web 开发、构建工具链或运行 JavaScript 服务端应用的第一步。macOS 系统提供了多种清晰、可靠的安装方式，用户可以根据自身的技术背景和需求选择最合适的一种。主流方法包括使用官方安装包、通过 Homebrew 包管理器安装，以及使用版本管理工具 nvm。每种方法都有其特点和适用场景。

对于大多数初学者和追求简单快捷的用户，直接从 Node.js 官网下载安装包是最直观的选择。而对于经常需要管理多个项目或不同 Node.js 版本的开发者，使用 nvm 则是更专业和灵活的方案。

### 方法一：使用官方安装包（推荐新手）
这是最直接的方法，适合不熟悉命令行的用户。
1.  **访问官网**：打开浏览器，访问 [Node.js 官方网站](https://nodejs.org/zh-cn/)。
2.  **选择版本**：官网会推荐最新的长期支持版本（LTS），对于大多数用户来说，选择 LTS 版本可以获得更好的稳定性。点击绿色的 “macOS 安装包” 按钮进行下载。
3.  **运行安装程序**：下载完成后，打开 `.pkg` 文件。只需跟随图形化安装向导的提示，点击“继续”、“同意”、“安装”即可。安装过程会同时安装 Node.js 运行时和 npm 包管理器。
4.  **验证安装**：安装完成后，打开“终端”应用，输入以下命令并回车：
    ```bash
    node -v
    npm -v
    ```
    如果终端分别显示出 Node.js 和 npm 的版本号（例如 `v18.17.0` 和 `9.6.7`），则说明安装成功。

### 方法二：使用 Homebrew 安装
Homebrew 是 macOS 上强大的包管理器，适合已经使用或愿意使用命令行工具的用户。
1.  **安装 Homebrew**：如果你还没有安装 Homebrew，请在终端中运行其官网提供的安装脚本。
2.  **安装 Node.js**：在终端中执行以下命令：
    ```bash
    brew install node
    ```
    此命令会自动下载并安装最新稳定版的 Node.js 和 npm。
3.  **验证安装**：同样使用 `node -v` 和 `npm -v` 命令来确认安装是否成功。使用 Homebrew 安装的另一个好处是，未来可以通过 `brew upgrade node` 命令轻松升级。

### 方法三：使用 nvm（Node Version Manager）安装
这是开发者的首选，因为它允许你在同一台机器上安装和切换多个 Node.js 版本，完美解决不同项目依赖不同版本 Node.js 的问题。
1.  **安装 nvm**：通过终端脚本安装 nvm。请注意，安装前应确保没有通过其他方式安装过 Node.js，以免冲突。
2.  **使用 nvm 安装 Node.js**：安装好 nvm 后，你可以安装特定版本的 Node.js，例如安装最新的 LTS 版本：
    ```bash
    nvm install --lts
    ```
    或者安装一个具体版本：`nvm install 16.20.0`。
3.  **切换和使用版本**：你可以列出所有已安装的版本 (`nvm ls`)，并切换到其中一个 (`nvm use 16.20.0`)。还可以设置默认版本 (`nvm alias default 18`)。

无论选择哪种方式，成功安装后，你就可以在 macOS 上开始你的 Node.js 项目了。就像掌握 [MAC安装方式](/catalog-2/directory-nesting-333/mac-installation) 一样，选择适合自己的工具是高效工作的开始。

## 常见问题

### 我应该选择哪个 Node.js 版本？
对于学习和生产环境，**强烈建议选择标记为 LTS 的版本**。LTS 代表“长期支持”，意味着该版本会获得更长时间的安全更新和错误修复，稳定性更高。奇数版本（如 19.x, 21.x）是当前版本，包含最新特性，但可能不够稳定，更适合尝鲜。

### 安装时提示“权限被拒绝”错误怎么办？
在终端执行命令时如果遇到 `Permission denied` 错误，通常是因为当前用户没有对安装目录的写入权限。
*   如果使用 **nvm** 或 **Homebrew**，请确保按照官方指南正确安装了它们本身。
*   一个常见的解决方法是使用 `sudo` 命令临时获取管理员权限，例如 `sudo npm install -g some-package`。但需谨慎使用 `sudo` 安装全局 npm 包。
*   更根本的解决方法是修正目录的归属权，例如：`sudo chown -R $(whoami) ~/.npm`。

### 如何彻底卸载 macOS 上的 Node.js？
卸载方式取决于你当初的安装方式：
*   **通过安装包安装**：没有一键卸载程序。你需要手动删除 `/usr/local/bin` 下的 node、npm 等可执行文件，以及 `/usr/local/lib` 下的 node_modules 目录。
*   **通过 Homebrew 安装**：运行 `brew uninstall node` 即可。
*   **通过 nvm 安装**：首先删除 nvm 管理的所有 Node.js 版本：`nvm uninstall <version>`，然后按照 nvm 的指南卸载 nvm 本身。这是最干净的方式。

鉴于卸载官方安装包比较繁琐，这也从侧面体现了使用 **Homebrew** 或 **nvm** 这类包管理工具在管理软件生命周期上的优势。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

---
title: "MAC安装NodeJS步骤"
description: "Node.js是一个基于Chrome V8引擎的JavaScript运行环境，它让开发者能够使用JavaScript来编写服务器端和命令行工具。对于现代Web开发、构建工具（如Webpack、Vite）或运行各种前端框架（如React、Vu"
readingTime: 4
lastUpdated: 1773251002861
---

# MAC安装NodeJS步骤

## 为什么需要在Mac上安装Node.js？

Node.js是一个基于Chrome V8引擎的JavaScript运行环境，它让开发者能够使用JavaScript来编写服务器端和命令行工具。对于现代Web开发、构建工具（如Webpack、Vite）或运行各种前端框架（如React、Vue、Next.js）来说，Node.js几乎是必不可少的基石。在macOS上安装Node.js，意味着你为本地开发环境搭建好了核心的运行时和包管理工具（npm或yarn）。

## 主流安装方法对比

在Mac上安装Node.js主要有三种推荐方式，每种方式各有优劣，适合不同的使用场景。

1.  **官方安装包（最直接）**
    *   **方式**：直接从Node.js官网下载`.pkg`安装程序。
    *   **优点**：图形化界面，操作简单，适合新手。
    *   **缺点**：版本管理不灵活，升级或降级需要手动卸载重装。

2.  **使用Homebrew（推荐给大多数开发者）**
    *   **方式**：通过macOS强大的包管理器Homebrew进行安装。
    *   **优点**：安装和管理极其方便，易于升级和卸载。与系统环境集成好。
    *   **缺点**：需要先安装Homebrew。

3.  **使用版本管理工具（nvm，推荐给需要多版本切换的开发者）**
    *   **方式**：使用Node Version Manager来安装和管理多个Node.js版本。
    *   **优点**：可以轻松在多个项目所需的Node.js版本间切换，是团队协作和 legacy 项目开发的利器。
    *   **缺点**：需要额外的命令行工具学习。

## 详细安装步骤

### 方法一：通过Homebrew安装（推荐）

这是目前最通用和便捷的方式。

1.  **确保已安装Homebrew**。如果未安装，打开终端（Terminal），粘贴以下命令：
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    按照提示完成安装。关于Homebrew更详细的安装和配置，可以参考这篇关于[MAC安装方式](/catalog-2/directory-nesting-333/mac-installation)的文章。

2.  **安装Node.js**。在终端中运行：
    ```bash
    brew install node
    ```
    这个命令会同时安装Node.js和其包管理器npm。

3.  **验证安装**。安装完成后，运行以下命令检查版本：
    ```bash
    node -v
    npm -v
    ```
    如果分别输出了Node.js和npm的版本号（例如 `v20.11.0` 和 `10.2.4`），则说明安装成功。

### 方法二：使用nvm安装（多版本管理）

如果你需要为不同项目切换Node.js版本，nvm是最佳选择。

1.  **安装nvm**。在终端中运行安装脚本：
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```
    安装完成后，**关闭并重新打开终端**，或者运行 `source ~/.zshrc`（如果你使用Zsh shell，这是macOS Catalina及之后版本的默认shell）使配置生效。

2.  **使用nvm安装Node.js**。例如，安装最新的长期支持版本：
    ```bash
    nvm install --lts
    ```
    你也可以安装特定版本：`nvm install 18.19.0`

3.  **使用特定版本**。列出所有已安装版本：`nvm ls`。切换到某个版本：`nvm use 18.19.0`。设置默认版本：`nvm alias default 18.19.0`。

### 方法三：下载官方安装包

访问 [Node.js 官网](https://nodejs.org/zh-cn/)，首页会显示两个推荐版本：LTS（长期支持版，稳定，推荐生产环境使用）和Current（最新特性版）。点击相应的macOS安装器（.pkg）下载，双击打开，按照图形向导一步步完成安装即可。

## 安装后的基础配置

1.  **配置npm镜像（可选但建议）**：为了在国内获得更快的下载速度，可以将npm registry设置为国内镜像源，如淘宝镜像。
    ```bash
    npm config set registry https://registry.npmmirror.com/
    ```
2.  **全局安装常用工具**：你可以使用npm全局安装一些开发工具，例如：
    ```bash
    npm install -g yarn # 另一个包管理器
    npm install -g create-react-app # React脚手架
    npm install -g @vue/cli # Vue脚手架
    ```

## 常见问题

### ### 安装后运行 `node -v` 提示“command not found”怎么办？
这通常是因为终端没有找到Node.js的安装路径。请尝试：
*   **Homebrew安装**：确保Homebrew安装正确，并尝试重启终端。
*   **官方安装包**：有时需要重启电脑才能使环境变量生效。
*   **通用检查**：在终端输入 `echo $PATH`，查看输出中是否包含Node.js的安装路径（如 `/usr/local/bin`）。如果没有，你可能需要手动在 `~/.zshrc` 文件中添加路径，或重新安装。

### ### 如何彻底卸载Mac上的Node.js？
卸载方式取决于你的安装方式：
*   **Homebrew安装**：运行 `brew uninstall node`，并可能需 `brew cleanup`。
*   **官方安装包安装**：没有一键卸载，需要手动删除 `/usr/local/lib` 下的node相关文件、`/usr/local/include` 下的node和node_modules目录，以及 `/usr/local/bin` 下的node、npm等命令链接。操作需谨慎。
*   **nvm安装**：直接删除nvm目录即可，通常是 `rm -rf ~/.nvm`。

### ### 应该选择哪个Node.js版本？
对于学习和新项目，**强烈建议选择官网首页的LTS版本**。它经过了更长时间的测试，拥有更稳定的API和社区支持，能避免因版本过新而遇到一些冷门bug。Current版本可用于体验最新特性，但不建议用于生产环境。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

---
title: "MAC安装NodeJS教程"
description: "Node.js是一个基于Chrome V8引擎的JavaScript运行时环境，它让开发者能够使用JavaScript来编写服务器端和命令行工具。对于现代Web开发、构建工具（如Webpack、Vite）或运行各种前端框架（如React、V"
readingTime: 4
lastUpdated: 1773269850238
---

# MAC安装NodeJS教程

## 为什么需要在Mac上安装Node.js？

Node.js是一个基于Chrome V8引擎的JavaScript运行时环境，它让开发者能够使用JavaScript来编写服务器端和命令行工具。对于现代Web开发、构建工具（如Webpack、Vite）或运行各种前端框架（如React、Vue、Next.js）来说，Node.js几乎是必不可少的基石。在Mac上安装Node.js，意味着你为本地开发环境搭建好了核心的引擎，可以开始运行npm（Node包管理器）来管理项目依赖、执行脚本以及启动开发服务器。

## 主流安装方法详解

在macOS上，主要有三种推荐的方式来安装Node.js，每种方式各有优劣，适合不同的使用场景。

### 方法一：使用官方安装包（最简单直接）
这是最适合新手的入门方式。
1.  **访问官网**：打开 [Node.js官方网站](https://nodejs.org/zh-cn/)。
2.  **选择版本**：你会看到两个主要版本：**LTS（长期支持版）** 和 **Current（最新特性版）**。对于学习和大多数生产环境，**强烈建议选择LTS版本**，它更稳定、支持周期更长。
3.  **下载并安装**：点击对应的macOS安装包（.pkg文件）进行下载。下载完成后，双击打开，跟随图形化安装向导的提示一步步完成即可。安装程序会自动配置好环境变量。

**优点**：过程简单，无需命令行操作。
**缺点**：后续升级或管理多个Node.js版本比较麻烦。

### 方法二：使用Homebrew（推荐给开发者）
Homebrew是macOS上强大的包管理器，通过它安装和管理软件非常方便。如果你尚未安装Homebrew，可以查阅我们详细的 [MAC安装方式](/catalog-2/directory-nesting-333/mac-installation) 指南。
安装Node.js的步骤如下：
1.  打开“终端”应用程序。
2.  执行安装命令：
    ```bash
    brew install node
    ```
3.  Homebrew会自动下载并安装Node.js及其附带的npm。

**优点**：
*   **管理方便**：后续可以通过 `brew upgrade node` 轻松升级。
*   **生态统一**：与通过Homebrew安装的其他开发工具管理方式一致。
**缺点**：需要先安装Homebrew。

### 方法三：使用版本管理工具nvm（高级/多项目必备）
如果你的不同项目需要切换使用不同版本的Node.js，那么nvm（Node Version Manager）是最佳选择。它允许你在同一台机器上安装并随时切换多个Node版本。
1.  安装nvm。可以通过Homebrew (`brew install nvm`)，或使用官方安装脚本（请在终端中谨慎执行从网络获取的脚本）：
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```
    安装后，根据提示关闭并重新打开终端，或运行 `source ~/.zshrc`（如果你使用Zsh shell）。
2.  使用nvm安装Node.js。例如，安装最新的LTS版本：
    ```bash
    nvm install --lts
    ```
3.  使用特定版本：
    ```bash
    nvm use 18.17.0
    ```

**优点**：完美的版本隔离和控制，是专业开发者的标配。
**缺点**：对初学者来说配置稍显复杂。

## 验证安装与基础配置

无论采用哪种方式安装，安装完成后都需要验证。
1.  **检查版本**：打开终端，分别运行以下命令：
    ```bash
    node -v
    npm -v
    ```
    如果正确显示出版本号（如 `v18.17.0` 和 `9.6.7`），则说明安装成功。
2.  **配置npm镜像（可选但建议）**：为了在国内获得更快的包下载速度，可以将npm的注册表源设置为国内镜像，例如淘宝源：
    ```bash
    npm config set registry https://registry.npmmirror.com/
    ```

## 常见问题

### 安装后，在终端输入`node`命令提示“command not found”怎么办？
这通常是因为系统环境变量（PATH）没有正确配置。
*   如果你使用**官方安装包**，尝试重启终端或电脑。
*   如果你使用**Homebrew**，请确保Homebrew自身安装正确，路径已配置。可以运行 `brew doctor` 检查。
*   最通用的检查方法是，在终端输入 `which node` 或 `where node`，查看系统是否能找到node命令的位置。如果找不到，需要手动将Node.js的安装路径（例如 `/usr/local/bin`）添加到你的shell配置文件（如 `~/.zshrc`）的PATH中。

### 我应该选择哪个Node.js版本？
对于绝大多数用户，选择官网标注的 **LTS（Long Term Support）版本** 是最稳妥的选择。LTS版本有长达30个月的维护期，修复安全漏洞和关键错误，稳定性高，兼容性好。而Current版本包含最新的实验性特性，可能不稳定，仅适合尝鲜或测试特定功能。

### 如何卸载Mac上的Node.js？
卸载方式取决于你的安装方式：
*   **官方安装包**：通常可以像卸载其他Mac应用一样，在“访达”的“应用程序”文件夹中找到并删除。但更彻底的方法是使用其提供的卸载脚本，或手动删除 `/usr/local/lib` 和 `/usr/local/include` 中相关的node文件。
*   **Homebrew**：在终端运行 `brew uninstall node`。
*   **nvm**：首先切换到要卸载的版本（如 `nvm use system` 切换到系统版本），然后运行 `nvm uninstall <版本号>`。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

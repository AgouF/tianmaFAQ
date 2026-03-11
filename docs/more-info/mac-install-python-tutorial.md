---
title: "MAC安装Python教程"
description: "在Mac上安装Python是许多开发者和数据分析师的第一步。虽然macOS系统已经预装了Python 2.7版本，但这个版本已经于2020年停止官方支持。为了使用最新的语言特性、库和安全更新，安装最新版本的Python 3是必要的。无论是进"
readingTime: 3
lastUpdated: 1773250970686
---

# MAC安装Python教程

## 为什么在Mac上安装Python？

在Mac上安装Python是许多开发者和数据分析师的第一步。虽然macOS系统已经预装了Python 2.7版本，但这个版本已经于2020年停止官方支持。为了使用最新的语言特性、库和安全更新，安装最新版本的Python 3是必要的。无论是进行Web开发、机器学习、自动化脚本还是学术研究，一个独立且可管理的Python环境都是高效工作的基础。

## 如何选择Python版本？

目前，Python 3是绝对的主流，所有新项目和库都基于此版本开发。建议直接安装Python 3的最新稳定版（如3.11或3.12）。你可以访问[Python官方网站](https://www.python.org/downloads/)查看最新版本。对于初学者，最新稳定版即可；如果参与特定项目，则需要根据项目要求选择对应版本。

## 详细安装步骤

### 方法一：使用官方安装包（推荐初学者）
这是最直观的方法。
1.  访问 [Python官网下载页面](https://www.python.org/downloads/macos/)。
2.  下载标有“macOS 64-bit universal2 installer”的.pkg文件（适用于Apple Silicon和Intel芯片）。
3.  双击下载的.pkg文件，按照图形化安装向导的提示完成安装。**关键一步**：在安装过程中，请务必勾选“**Add Python to PATH**”选项，这能确保你可以在终端中直接使用`python3`命令。
4.  安装完成后，打开“终端”应用，输入 `python3 --version` 并回车。如果显示版本号（如 `Python 3.11.4`），则说明安装成功。

### 方法二：使用Homebrew包管理器（推荐开发者）
Homebrew是macOS上强大的软件包管理器，能更方便地管理和更新Python。
1.  **首先安装Homebrew**：如果你还没有安装，可以在终端中运行以下命令：
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
2.  **使用Homebrew安装Python**：在终端中输入以下命令：
    ```bash
    brew install python
    ```
    这个命令会安装最新的Python 3版本以及`pip`（Python包管理工具）。
3.  安装后，同样使用 `python3 --version` 和 `pip3 --version` 来验证安装。

## 安装后的重要配置

### 1. 设置正确的别名
系统自带的Python 2命令是`python`，而你新安装的Python 3命令是`python3`。为了避免混淆，你可以在用户主目录下的Shell配置文件（如`~/.zshrc`，如果你使用macOS Catalina或更高版本）中添加一行别名：
```bash
alias python=python3
alias pip=pip3
```
保存文件后，在终端执行 `source ~/.zshrc`，之后你就可以直接使用 `python` 和 `pip` 命令了。

### 2. 使用虚拟环境
强烈建议为每个项目创建独立的虚拟环境，以隔离项目依赖。Python 3自带了`venv`模块。
```bash
# 进入你的项目目录
cd my_project
# 创建虚拟环境
python -m venv venv
# 激活虚拟环境
source venv/bin/activate
# 激活后，终端提示符前会出现 (venv)
```

## 常见问题

### 安装后输入“python”命令仍然打开旧版本？
这是因为系统默认的`python`命令仍然指向自带的Python 2.7。请按照上文“设置正确的别名”部分进行操作，或始终使用 `python3` 命令来调用新安装的版本。

### 如何卸载通过Homebrew安装的Python？
如果你使用Homebrew安装，卸载也非常简单。在终端中运行：
```bash
brew uninstall python
```
对于通过官方.pkg安装包安装的Python，你可以前往“系统设置” > “通用” > “存储空间” > “应用程序”中找到并删除它。更彻底的清理可能涉及删除相关框架和路径，操作相对复杂。

### 安装Python后，如何安装第三方库？
使用`pip`工具。在终端中，你可以使用 `pip install 库名` 来安装。例如，安装著名的数据分析库pandas：`pip install pandas`。请确保你是在正确的Python环境（或已激活的虚拟环境）下执行此命令。

完成Python的安装和基础配置后，你的Mac就成为了一个强大的开发工作站。这就像为你的电脑装备了核心工具，接下来你可以自由地探索各种开发领域。如果你在安装过程中遇到其他系统层面的配置问题，也可以参考我们关于 **[MAC安装方式](/catalog-2/directory-nesting-333/mac-installation)** 的通用指南来获取更多帮助。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

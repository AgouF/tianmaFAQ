---
title: "MAC如何安装Python"
description: "在Mac上安装Python是开始编程或进行数据分析、Web开发等项目的第一步。虽然macOS系统通常预装了Python，但版本可能较旧（如Python 2.7），且不建议直接修改系统自带的Python，以免影响系统稳定性。因此，推荐通过以下"
readingTime: 4
lastUpdated: 1773269823432
---

# MAC如何安装Python

## 在Mac上安装Python的几种方法

在Mac上安装Python是开始编程或进行数据分析、Web开发等项目的第一步。虽然macOS系统通常预装了Python，但版本可能较旧（如Python 2.7），且不建议直接修改系统自带的Python，以免影响系统稳定性。因此，推荐通过以下安全、高效的方法来安装和管理Python版本。

### 推荐方法：使用Homebrew安装

Homebrew是macOS上最受欢迎的包管理器，它能轻松安装、更新和管理软件包，包括Python。

1.  **首先，安装Homebrew（如果尚未安装）**：
    打开“终端”应用程序，粘贴以下命令并按回车：
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    按照屏幕提示完成安装。

2.  **通过Homebrew安装Python**：
    在终端中运行以下命令来安装最新稳定版的Python 3：
    ```bash
    brew install python
    ```
    安装完成后，可以通过运行 `python3 --version` 来验证安装。Homebrew会自动处理路径设置，通常非常方便。

**优点**：管理方便，易于更新和卸载，且与系统Python完全隔离。

### 官方安装包：从Python官网下载

这是最直接的方法，适合所有用户，尤其是刚入门的朋友。

1.  访问 [Python官方网站](https://www.python.org/downloads/)。
2.  下载适用于macOS的最新版本安装程序（.pkg文件）。
3.  双击下载的.pkg文件，按照图形化安装向导的步骤完成安装。
4.  安装程序通常会提示你安装“Shell Profile Updater”，它可以帮助你配置PATH环境变量。建议勾选。

**验证安装**：安装完成后，打开终端，输入 `python3 --version` 查看版本号。请注意，在终端中可能需要使用 `python3` 命令来调用新安装的Python 3，而 `python` 命令可能仍指向系统自带的旧版本。

### 高级之选：使用Pyenv管理多版本

如果你需要在不同项目中使用不同版本的Python（例如，一个项目用Python 3.8，另一个用Python 3.11），那么Pyenv是完美的工具。

1.  **安装Pyenv**：
    最简单的方式是通过Homebrew安装：
    ```bash
    brew install pyenv
    ```
2.  **配置Shell环境**：
    根据你使用的Shell（通常是zsh，即macOS Catalina及之后版本的默认Shell），将以下配置添加到 `~/.zshrc` 文件中：
    ```bash
    export PYENV_ROOT="$HOME/.pyenv"
    [[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
    eval "$(pyenv init -)"
    ```
    然后运行 `source ~/.zshrc` 使配置生效。
3.  **使用Pyenv**：
    - 查看所有可安装版本：`pyenv install --list`
    - 安装指定版本：`pyenv install 3.11.4`
    - 设置全局默认版本：`pyenv global 3.11.4`
    - 在特定目录下使用特定版本：`pyenv local 3.8.16`

**优点**：版本切换灵活，项目环境隔离性好。

### 安装后的重要步骤

无论采用哪种方式安装，都强烈建议同时安装并学习使用 `pip`（Python的包管理工具）和 `venv`（创建虚拟环境的模块）。
- 使用 `pip3 install <包名>` 来安装第三方库。
- 使用 `python3 -m venv my_project_env` 为每个项目创建独立的虚拟环境，避免包版本冲突。激活环境使用 `source my_project_env/bin/activate`。

如果你在安装过程中遇到环境变量或路径问题，可以参考我们关于 [MAC安装方式](/catalog-2/directory-nesting-333/mac-installation) 的专题文章，其中提供了更详细的系统配置和故障排除指南。

## 常见问题

### 我已经安装了Python，为什么在终端输入`python`还是旧版本？
这是因为系统为兼容性保留了旧的Python 2命令。在macOS上，新安装的Python 3通常需要通过 `python3` 命令来调用。你可以通过 `alias python=python3` 命令在当前终端会话中设置别名，或将其添加到你的Shell配置文件（如 `~/.zshrc`）中永久生效。更推荐使用 `python3` 和 `pip3` 来明确指定版本，避免混淆。

### 使用Homebrew安装Python后，`pip`不能用怎么办？
通过Homebrew安装Python后，`pip` 通常已随之安装。请确保你使用的是 `pip3` 命令。如果提示命令未找到，可以尝试重新链接：`brew link python`。有时可能需要手动将Python的Scripts目录加入PATH，但Homebrew通常已自动处理。你可以通过 `which pip3` 来检查其位置。

### 我应该安装哪个Python版本？
对于初学者和大多数新项目，建议安装**最新稳定版**（在Python官网下载页面上明确标出的版本）。它拥有最新的特性和安全更新。对于需要特定环境的项目（如某些框架或库仅支持到特定版本），请根据项目要求选择。使用Pyenv可以让你轻松地在不同版本间切换，以应对这种需求。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

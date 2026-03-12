---
title: "MAC安装Python教程"
description: "对于Mac用户来说，无论是进行数据分析、Web开发、自动化脚本编写还是学习编程，Python都是一门不可或缺的语言。虽然macOS系统预装了Python 2.7，但该版本已于2020年停止官方支持。如今，Python 3已成为绝对主流。因此"
readingTime: 4
lastUpdated: 1773292301153
---

# MAC安装Python教程

## 为什么需要在Mac上安装Python？

对于Mac用户来说，无论是进行数据分析、Web开发、自动化脚本编写还是学习编程，Python都是一门不可或缺的语言。虽然macOS系统预装了Python 2.7，但该版本已于2020年停止官方支持。如今，Python 3已成为绝对主流。因此，为了使用最新的语言特性、库和安全更新，手动安装一个独立且可管理的Python 3环境是开发者的标准做法。通过本教程，你将学会如何在Mac上安全、高效地安装和管理Python。

## 推荐安装方法：使用Homebrew

对于大多数开发者，我们强烈推荐使用 **Homebrew** 这个macOS上强大的包管理器来安装Python。它能帮你轻松管理Python版本，并与系统自带的Python完全隔离，避免潜在的冲突。

### 第一步：安装Homebrew
如果你还没有安装Homebrew，请打开“终端”应用（可在“应用程序”->“实用工具”中找到），并粘贴以下命令：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
按照屏幕上的提示完成安装。安装完成后，可以运行 `brew --version` 来验证。

### 第二步：通过Homebrew安装Python
在终端中执行以下命令，这将安装最新的稳定版Python 3：
```bash
brew install python
```
安装完成后，Homebrew通常会提示你将Python路径添加到环境变量中。请务必按照提示执行（通常是运行一两行 `echo 'export PATH=...' >> ~/.zshrc` 这样的命令），然后重启终端或运行 `source ~/.zshrc` 使更改生效。

### 第三步：验证安装
安装后，在终端中输入：
```bash
python3 --version
```
或
```bash
pip3 --version
```
如果正确显示版本号（如 `Python 3.11.2`），则说明安装成功。请注意，通过Homebrew安装后，命令是 `python3` 和 `pip3`，这有助于与系统自带的 `python`（Python 2）区分开。

## 替代方案：使用官方安装包

如果你不熟悉命令行，也可以直接从Python官网下载图形化安装程序。
1.  访问 [Python官方网站](https://www.python.org/downloads/macos/)。
2.  下载最新的“macOS 64-bit installer”安装包。
3.  双击下载的 `.pkg` 文件，按照图形向导的步骤完成安装。
4.  安装过程中，**请务必勾选“Add Python to PATH”选项**，这样才可以在终端中直接使用。

安装后，同样可以通过打开新终端窗口并输入 `python3 --version` 来验证。

## 最佳实践：使用虚拟环境

无论采用哪种方式安装Python，都强烈建议你为每个项目创建独立的虚拟环境。这可以隔离不同项目所需的依赖库，防止版本冲突。

使用Python内置的 `venv` 模块创建虚拟环境非常简单：
```bash
# 进入你的项目目录
cd my_project
# 创建名为‘venv’的虚拟环境
python3 -m venv venv
# 激活虚拟环境
source venv/bin/activate
```
激活后，终端提示符前会出现 `(venv)` 标识。之后所有通过 `pip install` 安装的包都只会存在于这个独立环境中。要退出虚拟环境，只需输入 `deactivate`。

## 常见问题

### 安装后输入“python”命令仍然显示旧版本？
这是正常现象。macOS系统自带的Python 2被保留且其 `python` 命令指向它。我们安装的Python 3需要通过 `python3` 命令来调用。为了避免混淆，并确保使用新版本，建议在项目中始终明确使用 `python3` 和 `pip3` 命令。你也可以通过配置Shell别名来让 `python` 指向 `python3`，但这需要谨慎操作。

### 如何安装和管理多个Python版本？
使用Homebrew可以很方便地安装特定版本，例如 `brew install python@3.9`。但更专业、更强大的多版本管理工具是 `pyenv`。它允许你在全局或每个项目目录中无缝切换Python版本。安装 `pyenv` 也可以通过Homebrew完成：`brew install pyenv`。之后你可以使用 `pyenv install 3.9.13` 安装指定版本，并用 `pyenv global 3.9.13` 设置全局版本。

### 安装过程遇到权限错误怎么办？
大多数权限问题源于没有正确配置PATH或使用`sudo`不当。请牢记：
1.  使用Homebrew安装时，仔细阅读安装成功后的提示信息，并按要求将指定路径添加到你的Shell配置文件中（如 `~/.zshrc`）。
2.  尽量避免使用 `sudo pip install` 来安装全局包，这可能会破坏系统完整性。正确的做法是始终在激活的虚拟环境中使用 `pip install`。
3.  如果你在软件安装方面需要更基础的指引，可以参考我们关于 [MAC安装方式](/catalog-2/directory-nesting-333/mac-installation) 的通用指南。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

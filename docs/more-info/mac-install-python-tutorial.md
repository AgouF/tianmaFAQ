---
title: "MAC安装Python教程"
description: "对于开发者、数据分析师或任何希望自动化任务的Mac用户来说，Python都是一门极其重要的编程语言。macOS系统本身预装了Python，但通常是较旧的版本（如Python 2.7或较旧的Python 3版本），且与系统深度绑定，不建议直接"
readingTime: 3
lastUpdated: 1773302678769
---

# MAC安装Python教程

## 为什么在Mac上安装Python？

对于开发者、数据分析师或任何希望自动化任务的Mac用户来说，Python都是一门极其重要的编程语言。macOS系统本身预装了Python，但通常是较旧的版本（如Python 2.7或较旧的Python 3版本），且与系统深度绑定，不建议直接用于开发，以免影响系统稳定性。因此，独立安装一个最新且干净的管理版本是开始Python之旅的最佳实践。本教程将引导你通过最推荐、最安全的方式在Mac上完成Python安装。

## 推荐安装方法：使用Homebrew

在Mac上安装软件，特别是开发工具，最强大和便捷的方式是使用**包管理器Homebrew**。它可以轻松管理Python的多个版本，并解决依赖问题。

### 第一步：安装Homebrew
如果你尚未安装Homebrew，请打开“终端”应用（可在“应用程序”->“实用工具”中找到），并粘贴以下命令：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
按照屏幕上的提示完成安装。安装完成后，可以运行 `brew --version` 来验证。

### 第二步：通过Homebrew安装Python
在终端中，只需一行命令即可安装最新的稳定版Python：
```bash
brew install python
```
此命令会安装Python 3的最新版本及其包管理工具 `pip`。安装完成后，关闭并重新打开终端，以使路径生效。

### 第三步：验证安装
输入以下命令来检查安装是否成功以及版本号：
```bash
python3 --version
pip3 --version
```
你应该能看到类似 `Python 3.x.x` 和 `pip 21.x.x` 的输出。请注意，在终端中，新安装的Python 3需要通过 `python3` 命令调用，而系统自带的旧版Python则对应 `python` 命令。

## 另一种选择：使用官方安装包

如果你不习惯使用命令行，也可以直接从Python官网下载图形化安装程序。
1.  访问 [Python官方网站](https://www.python.org/downloads/macos/)。
2.  下载标有“macOS 64-bit installer”的最新稳定版本。
3.  打开下载的 `.pkg` 文件，并按照图形向导的提示完成安装。
4.  安装过程中，请务必勾选“将Python 3.x添加到PATH”的选项，这样你就可以在终端中直接使用 `python3` 命令了。

**注意**：此方法安装的Python可能无法像Homebrew那样方便地管理多个版本。

## 安装后的重要步骤

### 1. 设置虚拟环境
强烈建议为每个项目创建独立的虚拟环境，以隔离项目依赖。这是Python开发的最佳实践。
```bash
# 安装虚拟环境工具（如果尚未安装）
pip3 install virtualenv
# 为你的项目创建一个新环境
python3 -m venv my_project_env
# 激活该环境
source my_project_env/bin/activate
# 激活后，终端提示符前会出现环境名，所有pip安装的包都将局限于此环境内
```

### 2. 升级包管理工具pip
确保你的pip是最新版本：
```bash
pip3 install --upgrade pip
```

## 常见问题

### 我运行 `python` 命令为什么还是旧版本？
这是因为系统默认的 `python` 命令指向了macOS自带的旧版Python。我们安装的新版Python 3需要通过 `python3` 命令来调用。为了避免混淆，你可以在项目中使用虚拟环境，或者在Shell配置文件（如 `.zshrc`）中为 `python` 设置别名，但这通常不是必须的。

### 安装时遇到权限错误怎么办？
如果在使用 `pip3 install` 时遇到权限拒绝（Permission Denied）错误，**切勿使用 `sudo`**。这可能会破坏系统完整性。正确的做法是：
1.  使用 `--user` 选项为用户本地安装：`pip3 install --user package_name`
2.  或者，更好的方式是如前所述，在虚拟环境中安装所有包。

### 如何管理多个Python版本？
使用Homebrew可以轻松安装多个版本，例如 `brew install python@3.9`。然后，你可以通过指定完整路径或使用像 `pyenv` 这样的专业版本管理工具来切换它们。这与在Mac上安装其他开发工具的思路类似，如果你对其他软件的安装也感兴趣，可以参考这篇关于[MAC安装方式](/catalog-2/directory-nesting-333/mac-installation)的综合性指南。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

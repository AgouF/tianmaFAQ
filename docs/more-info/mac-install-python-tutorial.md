---
title: "MAC安装Python教程"
description: "对于Mac用户来说，学习编程、进行数据分析、自动化脚本或开发网络应用，Python都是一个绝佳的选择。macOS系统本身预装了Python，但通常是较旧的版本（如Python 2.7），且与系统深度绑定，不建议直接用于开发，以免影响系统稳定"
readingTime: 3
lastUpdated: 1773273403285
---

# MAC安装Python教程

## 为什么要在Mac上安装Python？

对于Mac用户来说，学习编程、进行数据分析、自动化脚本或开发网络应用，Python都是一个绝佳的选择。macOS系统本身预装了Python，但通常是较旧的版本（如Python 2.7），且与系统深度绑定，不建议直接用于开发，以免影响系统稳定性。因此，独立安装一个最新且干净的管理版本是开发者的标准做法。通过本教程，您将学会如何在Mac上安全、高效地安装和管理Python环境。

## 推荐安装方法：使用Homebrew

在Mac上安装软件，最推荐的方式是使用**包管理器Homebrew**。它可以自动处理依赖关系，方便后续的升级和管理，是Mac开发者的标配工具。

### 第一步：安装Homebrew（如果您尚未安装）

打开Mac的“终端”应用程序（可在“应用程序”->“实用工具”中找到），粘贴并运行以下命令：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
按照屏幕上的提示完成安装。安装完成后，可以运行 `brew --version` 来验证。

### 第二步：使用Homebrew安装Python

在终端中，只需一行命令即可安装最新的稳定版Python：

```bash
brew install python
```
此命令会安装Python 3（写作 `python3`）以及配套的包管理工具 `pip3`。

### 第三步：验证安装

安装完成后，请关闭当前终端窗口并重新打开一个新窗口，然后运行以下命令检查版本：

```bash
python3 --version
pip3 --version
```
如果正确显示版本号（例如 `Python 3.11.4`），则说明安装成功。

## 配置环境与最佳实践

安装完成后，为了获得更好的开发体验，建议进行以下配置：

1.  **设置虚拟环境**：强烈建议为每个项目创建独立的虚拟环境，以隔离项目依赖。可以使用Python内置的 `venv` 模块：
    ```bash
    # 进入你的项目目录
    cd your_project_folder
    # 创建虚拟环境
    python3 -m venv venv
    # 激活虚拟环境
    source venv/bin/activate
    ```
    激活后，终端提示符前会出现 `(venv)` 标识。

2.  **使用pip安装包**：在激活的虚拟环境中，使用 `pip install package_name` 来安装所需的第三方库（如 `numpy`, `requests`）。

3.  **选择集成开发环境（IDE）**：推荐使用 **PyCharm**（功能强大）或 **Visual Studio Code**（轻量灵活）进行Python开发，它们都能很好地识别和管理虚拟环境。

## 常见问题

### 安装后，终端输入 `python` 命令仍然打开旧版本？
这是因为系统默认的 `python` 命令仍指向旧的Python 2。Homebrew安装的Python 3需要通过 `python3` 命令调用。为了避免混淆，你可以在你的Shell配置文件（如 `~/.zshrc`， 如果你使用的是macOS Catalina及以后版本）中添加别名：
```bash
echo 'alias python="python3"' >> ~/.zshrc
echo 'alias pip="pip3"' >> ~/.zshrc
```
然后执行 `source ~/.zshrc` 使配置生效。之后，在终端输入 `python` 就会指向Python 3了。

### 如何管理多个Python版本？
如果你需要在同一台机器上使用多个版本的Python（例如3.9和3.11），推荐使用 **`pyenv`** 工具。它可以非常方便地安装、切换和全局设置Python版本。你可以通过Homebrew安装它：`brew install pyenv`，然后根据其文档进行配置。

### 除了Homebrew，还有其他安装方式吗？
是的，你也可以直接从[Python官网](https://www.python.org/downloads/macos/)下载安装包进行安装，或者使用Anaconda发行版（特别适合数据科学）。每种方式都有其适用场景，你可以根据需求选择。关于更详细的软件包安装与管理，可以参考我们的另一篇指南：[MAC安装方式](/catalog-2/directory-nesting-333/mac-installation)，其中介绍了Mac上各类软件的通用安装逻辑。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

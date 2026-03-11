---
title: "MAC安装Python教程"
description: "在Mac上安装Python是开启编程、数据分析、自动化脚本或Web开发的第一步。macOS系统虽然预装了Python，但通常是较旧的版本（如Python 2.7），且与系统深度绑定，不建议直接用于开发，以免影响系统稳定性。因此，独立安装一个"
readingTime: 3
lastUpdated: 1773240167517
---

# MAC安装Python教程

## 为什么在Mac上安装Python？

在Mac上安装Python是开启编程、数据分析、自动化脚本或Web开发的第一步。macOS系统虽然预装了Python，但通常是较旧的版本（如Python 2.7），且与系统深度绑定，不建议直接用于开发，以免影响系统稳定性。因此，独立安装一个较新且独立的Python版本是标准做法。无论是学习编程语言基础，还是运行流行的机器学习框架如PyTorch，一个干净、可管理的Python环境都至关重要。

## 推荐安装方法：使用Homebrew

对于大多数Mac用户，我们强烈推荐使用**Homebrew**这款macOS上强大的包管理器来安装Python。它简化了安装、更新和管理软件的过程。

### 步骤一：安装Homebrew
如果你尚未安装Homebrew，请打开“终端”应用程序（可在“应用程序”->“实用工具”中找到），并粘贴以下命令：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
按照屏幕提示完成安装。安装完成后，可以运行 `brew --version` 来验证。

### 步骤二：通过Homebrew安装Python
在终端中，输入以下命令来安装最新的Python 3版本：
```bash
brew install python
```
这个命令会自动下载并安装最新稳定版的Python 3及其包管理工具`pip`。

### 步骤三：验证安装
安装完成后，请关闭当前终端窗口并重新打开一个新的（以确保环境变量更新），然后输入：
```bash
python3 --version
```
或
```bash
pip3 --version
```
如果正确显示版本号（例如 `Python 3.11.4`），则说明安装成功。请注意，在终端中，你应始终使用 `python3` 和 `pip3` 命令来明确调用新安装的版本，以避免与系统自带的旧版本混淆。

## 管理Python版本与虚拟环境

安装好基础Python后，还有两件重要的事情：

1.  **管理多版本**：如果你需要同时使用多个Python版本（例如，为不同项目测试兼容性），可以使用 `pyenv` 工具。它可以通过Homebrew安装：`brew install pyenv`，然后方便地切换全局或项目本地版本。

2.  **使用虚拟环境**：这是Python开发的最佳实践。虚拟环境可以为每个项目创建独立的依赖库空间，避免包之间的冲突。安装Python后，你可以使用内置的 `venv` 模块创建虚拟环境：
    ```bash
    # 进入你的项目目录
    cd path/to/your_project
    # 创建虚拟环境
    python3 -m venv venv
    # 激活虚拟环境
    source venv/bin/activate
    ```
    激活后，终端提示符前会出现 `(venv)` 标识，之后所有通过 `pip install` 安装的包都只存在于该环境中。

## 配置开发环境

安装Python后，你可以选择一个代码编辑器或集成开发环境（IDE），例如功能强大的 **Visual Studio Code**（VS Code）。在VS Code中安装官方的Python扩展后，即可获得代码补全、调试、 linting等强大功能，并能方便地选择已安装的Python解释器或虚拟环境。

## 常见问题

### 我运行 `python` 命令显示的是2.7版本，怎么办？
这是正常现象。macOS系统为兼容性保留了 `python` 命令指向Python 2.7。你新安装的Python 3应通过 `python3` 命令调用。为了避免混淆，在终端和脚本中，请始终养成使用 `python3` 和 `pip3` 的习惯。不建议修改系统默认的 `python` 链接。

### 安装Homebrew或Python时遇到权限错误？
这通常是因为命令需要 `sudo` 权限，但Homebrew设计上不建议使用 `sudo`。请确保你正在以普通用户（非root）身份操作，并检查 `/usr/local` 目录（对于Intel Mac）或 `/opt/homebrew` 目录（对于Apple Silicon Mac）的所有权是否正确。可以尝试运行 `sudo chown -R $(whoami) /opt/homebrew`（根据你的Homebrew路径调整）来修复权限。

### 除了Homebrew，还有其他安装方式吗？
是的，你也可以直接从[Python官网](https://www.python.org/downloads/macos/)下载安装包（.pkg文件）进行图形化安装，这种方式同样简单直接。此外，对于更复杂的科学计算环境，也可以考虑安装Anaconda发行版。如果你对通过.pkg文件安装其他软件（如MongoDB）的详细步骤感兴趣，可以参考这篇关于[MAC安装方式](/catalog-2/directory-nesting-333/mac-installation)的指南，其中包含了通用的思路和注意事项。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

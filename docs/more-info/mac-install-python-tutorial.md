---
title: "MAC安装Python教程"
description: "在Mac上安装Python是许多开发者和数据分析师开始工作的第一步。macOS系统虽然预装了Python，但通常是较旧的版本（如Python 2.7），并且与系统深度绑定，不建议直接用于开发，以免影响系统稳定性。安装一个独立、可管理的新版本"
readingTime: 3
lastUpdated: 1773310556021
---

# MAC安装Python教程

## 为什么在Mac上安装Python？

在Mac上安装Python是许多开发者和数据分析师开始工作的第一步。macOS系统虽然预装了Python，但通常是较旧的版本（如Python 2.7），并且与系统深度绑定，不建议直接用于开发，以免影响系统稳定性。安装一个独立、可管理的新版本Python，可以让你自由地使用最新的语言特性、库和工具，例如用于机器学习的`pandas`、`numpy`，或用于Web开发的`Django`、`Flask`。

## 主流安装方法推荐

对于大多数用户，我们推荐通过**Homebrew**或官方**Python.org安装包**进行安装。这两种方法都能提供干净、易于管理的Python环境。

### 方法一：使用Homebrew安装（推荐）

Homebrew是macOS上最受欢迎的包管理器，它能优雅地处理依赖关系。

1.  **安装Homebrew**（如果尚未安装）：
    打开“终端”应用，粘贴以下命令：
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    按照提示完成安装。

2.  **通过Homebrew安装Python**：
    在终端中运行：
    ```bash
    brew install python
    ```
    此命令会安装最新稳定版本的Python 3，并自动配置`pip`（Python包管理工具）。

3.  **验证安装**：
    安装完成后，重启终端，然后运行：
    ```bash
    python3 --version
    pip3 --version
    ```
    这两条命令应分别显示Python 3和pip的版本号。

### 方法二：使用官方安装包

如果你更喜欢图形界面安装，这是最直接的方式。

1.  **下载安装包**：
    访问 [Python官方网站](https://www.python.org/downloads/)，下载适用于macOS的最新版本安装程序（.pkg文件）。

2.  **运行安装程序**：
    双击下载的.pkg文件，按照图形化向导的提示一步步完成安装。**关键一步**：在安装过程中，请务必勾选“**将Python 3.x添加到PATH**”这个选项，这能确保你可以在终端中直接调用`python3`命令。

3.  **验证安装**：
    打开终端，输入`python3 --version`检查版本。

## 安装后的重要配置

安装主程序只是第一步，正确的配置能让后续开发更顺畅。

*   **区分命令**：在终端中，系统自带的旧版本通过`python`命令调用，而新安装的版本需要通过`python3`命令调用。`pip`同理，新版本的包管理工具应使用`pip3`。
*   **使用虚拟环境**：强烈建议为每个项目创建独立的虚拟环境，以隔离项目依赖。可以使用内置的`venv`模块：
    ```bash
    # 进入项目目录
    cd your_project_folder
    # 创建虚拟环境
    python3 -m venv venv
    # 激活虚拟环境
    source venv/bin/activate
    # 激活后，终端提示符前会出现(venv)，此时所有pip安装的包都只在此环境内生效
    ```

## 常见问题

### 安装后输入`python`还是旧版本，怎么办？
这是正常现象。macOS系统自带的Python 2.7被保留且优先级较高。你安装的Python 3必须使用`python3`和`pip3`命令来调用。不建议强行替换系统默认的`python`命令，以免引发系统工具链问题。你可以通过在`~/.zshrc`（如果使用Zsh shell）或`~/.bash_profile`（如果使用Bash）文件中设置别名来简化操作，例如添加一行：`alias python=python3`。

### 如何彻底卸载通过Homebrew安装的Python？
如果你需要卸载，可以使用Homebrew的命令行操作，这比手动删除更干净。在终端中运行：
```bash
brew uninstall python
brew cleanup
```
这将卸载Python并清理相关的文件。对于通过官方.pkg安装包安装的Python，你可以像卸载其他Mac应用一样，在“访达”中进入“应用程序”文件夹，找到“Python 3.x”目录并将其拖入废纸篓。更详细的Mac软件管理指南，可以参考这篇关于[MAC安装方式](/catalog-2/directory-nesting-333/mac-installation)的文章。

### 安装过程中遇到“权限被拒绝”错误？
这通常是因为命令需要管理员权限。在命令前加上`sudo`并输入你的电脑密码即可，例如`sudo brew install python`。但需谨慎使用`sudo`，尤其是与`pip`一起全局安装包时，这可能导致权限混乱。最佳实践始终是在虚拟环境中安装项目所需的包。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

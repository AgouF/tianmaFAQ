---
title: "MAC安装Python教程"
description: "对于Mac用户来说，安装Python是开始编程、数据分析或自动化任务的第一步。好消息是，macOS系统本身已经预装了Python，但通常是较旧的版本（如Python 2.7或较旧的Python 3版本）。为了使用最新的特性和库，我们通常需要"
readingTime: 4
lastUpdated: 1773216122881
---

# MAC安装Python教程

## 在Mac上安装Python的完整指南

对于Mac用户来说，安装Python是开始编程、数据分析或自动化任务的第一步。好消息是，macOS系统本身已经预装了Python，但通常是较旧的版本（如Python 2.7或较旧的Python 3版本）。为了使用最新的特性和库，我们通常需要自行安装更新的版本。本教程将详细介绍几种主流且可靠的安装方法。

### 方法一：使用官方安装包（最直接）

这是最适合新手的安装方式。

1.  **访问官网**：打开浏览器，访问 [Python官方网站](https://www.python.org)。
2.  **下载安装程序**：点击首页的“Downloads”菜单，系统通常会自动推荐macOS版本的安装包。或者，进入“Downloads”页面后，手动选择“macOS”并下载最新的稳定版（如Python 3.12.x）的“macOS 64-bit universal2 installer”安装包。
3.  **运行安装**：下载完成后，双击 `.pkg` 文件，按照图形化安装向导的提示一步步操作即可。安装过程中，请务必勾选“将Python 3.x添加到PATH”或类似的选项，这能让你在终端中直接使用`python3`命令。
4.  **验证安装**：安装完成后，打开“终端”（Terminal）应用程序，输入 `python3 --version` 并回车。如果显示类似“Python 3.12.1”的版本号，则说明安装成功。

### 方法二：使用Homebrew（推荐给开发者）

Homebrew是macOS上强大的包管理器，通过它安装和管理Python非常方便，也便于后续升级。

1.  **安装Homebrew**：如果你还没有安装Homebrew，请打开终端，粘贴并运行以下命令：
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    按照屏幕提示完成安装。
2.  **通过Homebrew安装Python**：在终端中运行以下命令：
    ```bash
    brew install python
    ```
    这个命令会安装最新的Python 3版本。
3.  **验证安装**：同样，在终端输入 `python3 --version` 来验证。使用Homebrew安装的Python，其可执行文件通常位于 `/usr/local/bin` 目录下，并且已经配置好了环境变量。

**优势**：使用Homebrew可以轻松管理多个Python版本（需配合`pyenv`），并且更新Python版本只需运行 `brew upgrade python`。

### 安装后的重要配置

1.  **理解`python`与`python3`命令**：在终端中，系统自带的旧版Python通常由 `python` 命令调用。而我们新安装的Python 3版本，需要通过 `python3` 命令来调用。这是为了避免与系统自带的Python产生冲突。
2.  **使用pip管理包**：Python的包管理工具`pip`会随安装包或Homebrew一同安装。为Python 3安装第三方库时，请使用 `pip3` 命令，例如 `pip3 install requests`。
3.  **设置虚拟环境**：强烈建议为每个项目创建独立的虚拟环境，以隔离项目依赖。可以使用内置的 `venv` 模块：
    ```bash
    python3 -m venv my_project_env  # 创建名为my_project_env的虚拟环境
    source my_project_env/bin/activate # 激活虚拟环境（激活后，终端提示符会变化）
    ```

### 管理多个Python版本

如果你需要同时使用多个Python版本（例如，为不同项目测试兼容性），不建议直接安装多个安装包，这容易造成混乱。最佳实践是使用版本管理工具 **`pyenv`**。它可以让你轻松地在系统上安装、切换和全局设置多个Python版本。你可以通过Homebrew安装它：`brew install pyenv`，然后通过 `pyenv install 3.10.0` 这样的命令安装特定版本。

## 常见问题

### ### 安装后，在终端输入`python`还是旧版本，怎么办？
这是正常现象。macOS系统为保护其内部功能，保留了旧的Python 2.7，`python`命令默认指向它。你新安装的Python 3应使用 `python3` 命令来调用。请始终使用 `python3` 和 `pip3`。不要尝试删除系统自带的Python，以免影响系统稳定性。

### ### 如何卸载通过官方安装包安装的Python？
通过官方`.pkg`安装的Python，其文件分散在系统目录中，手动删除比较麻烦。相对干净的方法是：
1.  找到安装时生成的“Python 3.x”目录（通常在“应用程序”文件夹里），将其拖入废纸篓。
2.  删除相关的环境变量（如果你手动修改过`~/.zshrc`或`~/.bash_profile`文件）。
更彻底的卸载可以参考官方文档。相比之下，如果你通过Homebrew安装，卸载则非常简单：`brew uninstall python`。

### ### 安装过程中遇到权限错误或“命令未找到”怎么办？
这通常是因为环境变量（PATH）未正确配置。
*   对于官方安装包：请确保安装时勾选了“添加到PATH”选项。如果没有，可以手动在用户主目录下的 `~/.zshrc` 文件（如果使用较新macOS）或 `~/.bash_profile` 文件末尾添加一行：`export PATH="/Library/Frameworks/Python.framework/Versions/3.x/bin:$PATH"`（请将`3.x`替换为你的具体版本号），然后重启终端或运行 `source ~/.zshrc`。
*   对于Homebrew：安装后按照Homebrew最后的提示执行配置命令（通常是关于将brew路径添加到PATH），或手动添加 `eval "$(/opt/homebrew/bin/brew shellenv)"` 到 `~/.zshrc` 文件。

如果你对在Mac上安装其他开发工具也感兴趣，可以参考我们关于 **[MAC安装方式](/catalog-2/directory-nesting-333/mac-installation)** 的专题文章，获取更多系统的软件安装指南。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

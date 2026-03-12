---
title: "MAC安装Python教程"
description: "在Mac上安装Python是开启编程、数据分析、自动化脚本或Web开发的第一步。虽然macOS系统自带了一个Python 2.7版本（在较新的macOS版本中可能已移除），但这个版本已经过时且不再被官方维护。为了使用最新的语言特性、安全补丁"
readingTime: 4
lastUpdated: 1773316928119
---

# MAC安装Python教程

## 为什么在Mac上安装Python？

在Mac上安装Python是开启编程、数据分析、自动化脚本或Web开发的第一步。虽然macOS系统自带了一个Python 2.7版本（在较新的macOS版本中可能已移除），但这个版本已经过时且不再被官方维护。为了使用最新的语言特性、安全补丁和丰富的第三方库（如NumPy, Pandas, Django等），安装一个独立且更新的Python版本是必要且推荐的做法。本教程将引导你通过几种主流且可靠的方式完成安装。

## 推荐安装方法

对于大多数用户，我们推荐使用**Homebrew**或从**Python官网安装**。这两种方法都能提供清晰的管理方式。

### 方法一：使用Homebrew安装（推荐）

Homebrew是macOS上强大的包管理器，能让你轻松安装、更新和管理软件。

1.  **安装Homebrew（如果尚未安装）**：
    打开“终端”应用程序，粘贴以下命令并按回车：
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    按照屏幕提示完成安装。

2.  **通过Homebrew安装Python**：
    在终端中运行以下命令：
    ```bash
    brew install python
    ```
    这个命令会安装最新稳定版的Python 3（同时会安装`pip`包管理工具）。

3.  **验证安装**：
    安装完成后，重启终端或打开一个新的终端窗口，运行：
    ```bash
    python3 --version
    ```
    或
    ```bash
    pip3 --version
    ```
    如果显示了对应的版本号（例如 `Python 3.11.2`），说明安装成功。

**优点**：Homebrew能很好地管理依赖，并且方便后续的升级（使用 `brew upgrade python`）。

### 方法二：从Python官网下载安装包

这是最直接的方法，适合所有用户。

1.  **访问下载页面**：
    打开浏览器，访问 [Python官方网站](https://www.python.org/downloads/)。

2.  **下载安装程序**：
    网站通常会自动检测你的操作系统并推荐macOS的安装包。点击下载“macOS 64-bit installer”（文件名通常类似 `python-3.x.x-macosx10.9.pkg`）。

3.  **运行安装向导**：
    下载完成后，双击 `.pkg` 文件，按照图形化安装向导的提示一步步操作即可。**重要提示**：在安装过程中，请务必勾选“`Install Certificates`”和“`Add Python to PATH`”选项，这能省去后续手动配置环境变量的麻烦。

4.  **验证安装**：
    安装完成后，打开终端，输入：
    ```bash
    python3 --version
    ```
    检查版本号。

### 方法三：使用Pyenv（适合高级用户/多版本管理）

如果你需要在同一台电脑上管理多个Python版本（例如，为不同项目使用Python 3.8, 3.10, 3.11），Pyenv是完美的工具。你可以参考我们关于不同系统安装方式的详细指南，其中包含了使用包管理器进行安装的通用逻辑，例如在 **[MAC安装方式](/catalog-2/directory-nesting-333/mac-installation)** 中提到的思路，同样适用于通过Homebrew安装Pyenv：`brew install pyenv`，然后通过Pyenv安装特定版本的Python。

## 安装后的重要步骤

1.  **升级pip**：安装后，建议立即升级pip到最新版。
    ```bash
    pip3 install --upgrade pip
    ```
2.  **配置虚拟环境**：强烈建议为每个项目创建独立的虚拟环境，以避免包依赖冲突。可以使用内置的 `venv` 模块：
    ```bash
    python3 -m venv my_project_env
    source my_project_env/bin/activate
    ```

## 常见问题

### 终端输入`python`命令还是打开了旧版本？
这是因为系统自带的Python 2可能仍然在路径中。在终端输入 `python` 默认可能仍指向Python 2。我们安装的Python 3需要通过 `python3` 命令来调用。你可以通过创建别名或调整环境变量来改变这一行为，但为了清晰和兼容性，在教程和命令中坚持使用 `python3` 和 `pip3` 是更好的实践。

### 安装时提示“权限被拒绝”或“命令未找到”？
这通常是因为没有使用管理员权限或环境变量未正确设置。
- 对于Homebrew，确保按照安装成功后的提示，将所需路径（如 `/opt/homebrew/bin`）添加到你的shell配置文件（如 `~/.zshrc`）中。
- 对于官网安装包，请确保勾选了“Add Python to PATH”选项。如果问题依旧，可能需要手动添加安装路径（通常是 `/usr/local/bin/` 或 `/Library/Frameworks/Python.framework/Versions/3.x/bin`）到你的 `~/.zshrc` 文件。

### 如何卸载通过Homebrew安装的Python？
如果你需要卸载，可以使用Homebrew的命令：
```bash
brew uninstall python
brew cleanup
```
这将移除Python和相关的依赖。通过官网安装包安装的Python，则需要到“应用程序”文件夹中找到“Python 3.x”目录，运行其中的“Install Certificates”程序，里面通常包含卸载选项。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

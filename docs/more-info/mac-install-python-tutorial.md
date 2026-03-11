---
title: "MAC安装Python教程"
description: "对于Mac用户来说，安装Python是开启编程之旅或进行数据分析、Web开发等工作的第一步。macOS系统本身预装了Python 2.7，但该版本已于2020年停止维护。因此，安装最新版本的Python 3是更安全、更现代的选择。本教程将详"
readingTime: 4
lastUpdated: 1773263156365
---

# MAC安装Python教程

## 在Mac上安装Python的完整指南

对于Mac用户来说，安装Python是开启编程之旅或进行数据分析、Web开发等工作的第一步。macOS系统本身预装了Python 2.7，但该版本已于2020年停止维护。因此，安装最新版本的Python 3是更安全、更现代的选择。本教程将详细介绍几种主流且可靠的安装方法。

### 方法一：使用官方安装包（最简单）

这是最适合新手的安装方式。

1.  **访问官方网站**：打开浏览器，访问 [Python官方网站](https://www.python.org/downloads/)。网站会自动检测你的系统并推荐最新的macOS安装包。
2.  **下载安装程序**：点击黄色的“Download Python”按钮，下载后缀为 `.pkg` 的安装程序。
3.  **运行安装**：双击下载好的 `.pkg` 文件，按照图形化安装向导的提示一步步操作即可。安装程序会自动将Python添加到你的系统路径中。
4.  **验证安装**：安装完成后，打开“终端”应用，输入以下命令并按回车：
    ```bash
    python3 --version
    ```
    如果显示类似 `Python 3.x.x` 的版本号，则说明安装成功。

**优点**：操作简单，无需命令行知识。
**注意**：此方法安装的Python位于 `/Library/Frameworks/Python.framework/` 目录下，与系统自带的Python 2.7互不干扰。

### 方法二：使用Homebrew安装（推荐给开发者）

Homebrew是macOS上强大的包管理器，能方便地管理软件版本和依赖。

1.  **安装Homebrew**：如果你还没有安装Homebrew，请在终端中运行以下命令：
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
2.  **通过Homebrew安装Python**：在终端中输入：
    ```bash
    brew install python
    ```
    这个命令会安装最新的Python 3版本。
3.  **验证安装**：同样使用 `python3 --version` 命令检查。通过Homebrew安装的Python位于 `/usr/local/bin/` 目录下。

**优点**：便于后续升级和管理多个Python版本，与Homebrew生态的其他工具集成性好。

### 方法三：使用Pyenv管理多个版本（高级）

如果你需要在不同项目中使用不同版本的Python（例如，同时维护一个用Python 3.8的老项目和一个用Python 3.11的新项目），Pyenv是完美的工具。

1.  **安装Pyenv**：使用Homebrew安装最为简单：
    ```bash
    brew install pyenv
    ```
2.  **配置Shell环境**：根据你使用的Shell（通常是zsh），将以下配置添加到 `~/.zshrc` 文件中：
    ```bash
    export PYENV_ROOT="$HOME/.pyenv"
    [[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
    eval "$(pyenv init -)"
    ```
    然后运行 `source ~/.zshrc` 使配置生效。
3.  **安装特定Python版本**：
    ```bash
    pyenv install 3.11.4  # 安装Python 3.11.4
    pyenv install 3.8.16  # 安装Python 3.8.16
    ```
4.  **切换全局或本地版本**：
    - 设置全局默认版本：`pyenv global 3.11.4`
    - 为当前目录设置版本：`pyenv local 3.8.16`

**优点**：版本隔离彻底，是进行多项目开发的行业标准做法。

### 安装后的重要步骤

无论采用哪种方式安装，都建议你同时安装 `pip`（Python包管理工具）。通常，安装Python 3时，`pip3` 会随之自动安装。你可以通过 `pip3 --version` 来确认。首次使用pip安装包时，建议使用虚拟环境来隔离项目依赖，可以使用Python内置的 `venv` 模块：
```bash
python3 -m venv my_project_env
source my_project_env/bin/activate
```

## 常见问题

### 终端输入`python`命令为什么打开的是Python 2.7？
这是因为系统为兼容性保留了`python`命令指向旧版本。新安装的Python 3需要通过`python3`命令来调用。这是有意为之的设计，以避免破坏依赖Python 2的系统脚本。你可以通过创建别名来修改这一行为，但通常建议显式使用`python3`和`pip3`以保持清晰。

### 安装时提示“权限被拒绝”或“无法写入”怎么办？
这通常是因为没有使用管理员权限。在通过Homebrew或终端命令安装时，确保你有足够的权限。你可以尝试在命令前加上`sudo`（例如`sudo pip3 install`），但更推荐的做法是使用虚拟环境（`venv`）来安装项目所需的包，这样可以避免修改系统级的Python环境，也更安全。

### 如何彻底卸载Mac上的Python？
卸载方式取决于你的安装方法：
- **官方安装包**：可以像卸载普通应用一样，或将 `/Library/Frameworks/Python.framework/` 目录和 `/Applications/Python 3.x` 文件夹移到废纸篓。同时检查 `/usr/local/bin/` 中是否有相关的符号链接并删除。
- **Homebrew安装**：在终端运行 `brew uninstall python` 即可。
请注意，**不要尝试删除系统自带的Python 2.7**，因为部分系统工具依赖它。只需确保你的开发环境正确指向新安装的Python 3即可。

完成Python安装后，你可能还需要配置开发环境。关于在Mac上安装其他开发工具和配置工作流，可以参考这篇详细的 [MAC安装方式](/catalog-2/directory-nesting-333/mac-installation) 指南。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

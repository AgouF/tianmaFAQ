---
title: "MAC安装Python教程"
description: "在Mac上安装Python是许多开发者和数据分析师开始工作的第一步。macOS系统虽然预装了Python，但通常是较旧的版本（如Python 2.7），且与系统深度绑定，不建议直接用于开发，以免影响系统稳定性。安装一个独立、可管理的新版本P"
readingTime: 4
lastUpdated: 1773259084174
---

# MAC安装Python教程

## 为什么在Mac上安装Python？

在Mac上安装Python是许多开发者和数据分析师开始工作的第一步。macOS系统虽然预装了Python，但通常是较旧的版本（如Python 2.7），且与系统深度绑定，不建议直接用于开发，以免影响系统稳定性。安装一个独立、可管理的新版本Python（如Python 3.11或3.12）能让你自由地使用最新的语言特性、库和工具，为学习、Web开发、自动化脚本或机器学习项目打下坚实基础。

## 主流安装方法详解

在Mac上安装Python主要有三种可靠的方法，各有优劣。

### 方法一：使用官方安装包（最简单）
这是最适合新手的入门方式。
1.  **访问官网**：打开 [Python官方网站](https://www.python.org/downloads/)，网站通常会自动推荐最新的macOS安装包。
2.  **下载安装**：点击下载 `.pkg` 文件，双击打开并按照图形化向导完成安装。安装程序会同时安装Python解释器和IDLE开发环境。
3.  **验证安装**：安装完成后，打开“终端”（Terminal），输入 `python3 --version` 并回车。如果显示类似 `Python 3.12.1` 的版本号，即表示安装成功。
*   **优点**：过程直观，无需命令行操作。
*   **注意**：安装后，在终端中需要使用 `python3` 和 `pip3` 命令来调用新安装的Python 3和包管理器。

### 方法二：使用Homebrew（推荐给开发者）
Homebrew是macOS上强大的包管理器，能让你轻松安装、更新和管理软件。
1.  **安装Homebrew**：如果你还没有安装Homebrew，可以在终端中运行以下命令：
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
2.  **通过Homebrew安装Python**：在终端中运行命令 `brew install python`。
3.  **验证安装**：同样使用 `python3 --version` 验证。Homebrew安装的Python，其 `pip3` 也会被自动配置好。
*   **优点**：便于后续升级和管理多个Python版本，与Homebrew生态无缝集成。
*   **提示**：安装后，你可能需要将Homebrew的Python路径添加到环境变量中，具体可参考Homebrew完成安装后的提示。

### 方法三：使用Pyenv（管理多个版本）
如果你需要在不同项目中使用不同版本的Python，Pyenv是最佳选择。
1.  **安装Pyenv**：推荐通过Homebrew安装：`brew install pyenv`。
2.  **安装特定Python版本**：例如，安装Python 3.11.5：`pyenv install 3.11.5`。
3.  **设置全局或本地版本**：
    *   设置为全局默认版本：`pyenv global 3.11.5`
    *   在当前目录下使用特定版本：`pyenv local 3.11.5`
*   **优点**：可以精确控制每个项目或目录使用的Python版本，解决版本冲突问题。
*   **适用场景**：维护多个旧项目或需要测试不同版本兼容性的开发者。

## 安装后的关键配置

1.  **设置虚拟环境（强烈建议）**：为了避免项目间的依赖包互相干扰，应使用虚拟环境。Python 3内置了 `venv` 模块。在项目目录下执行：
    ```bash
    python3 -m venv my_project_env
    source my_project_env/bin/activate
    ```
    激活后，终端提示符前会出现环境名，所有 `pip` 安装的包都将隔离在此环境中。
2.  **升级包管理工具pip**：在终端运行 `pip3 install --upgrade pip`，确保pip是最新版本。
3.  **配置代码编辑器/IDE**：如VSCode或PyCharm，在设置中指向你新安装的Python解释器路径。

## 常见问题

### 终端输入`python`命令还是显示旧版本？
这是因为系统预装的Python 2.7的优先级较高。在终端输入 `python` 默认调用Python 2，而输入 `python3` 才会调用你新安装的Python 3。这是正常现象，使用 `python3` 和 `pip3` 即可。你也可以通过创建别名或调整 `$PATH` 环境变量来改变这一行为，但操作需谨慎。

### 安装时提示“权限被拒绝”怎么办？
在终端执行安装命令（如使用Homebrew或pip安装包）时，如果遇到权限错误，切勿使用 `sudo` 直接提权安装到系统目录，这可能导致混乱。正确的做法是：
*   使用 `pip install --user package_name` 将包安装到用户目录。
*   或者，如前所述，优先在虚拟环境中进行所有包安装操作，这是最安全、最规范的做法。

### 如何完全卸载已安装的Python？
卸载方式取决于安装方法：
*   **官方安装包**：可以像卸载普通Mac应用一样，在“访达”的“应用程序”目录中找到“Python 3.x”文件夹并将其拖入废纸篓。但更彻底的清理需要手动删除相关配置文件。
*   **Homebrew安装**：使用命令 `brew uninstall python` 卸载。对于更复杂的多版本管理，你可能需要参考我们另一篇关于软件管理的详细指南，例如在卸载特定开发环境时，**[MAC安装方式](/catalog-2/directory-nesting-333/mac-installation)** 一文中提到的原则同样适用：优先使用包管理器进行卸载。
*   **Pyenv安装**：使用 `pyenv uninstall 3.11.5` 卸载特定版本。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

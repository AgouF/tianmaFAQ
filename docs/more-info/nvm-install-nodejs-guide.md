---
title: "nvm安装NodeJS指南"
description: "nvm（Node Version Manager）是一个用于管理多个Node.js版本的工具。对于开发者而言，项目可能依赖不同版本的Node.js，手动安装和切换版本不仅繁琐，还容易出错。nvm完美解决了这个问题，它允许你在同一台机器上安装"
readingTime: 4
lastUpdated: 1773273547543
---

# nvm安装NodeJS指南

## 什么是nvm？

nvm（Node Version Manager）是一个用于管理多个Node.js版本的工具。对于开发者而言，项目可能依赖不同版本的Node.js，手动安装和切换版本不仅繁琐，还容易出错。nvm完美解决了这个问题，它允许你在同一台机器上安装、切换和卸载不同的Node.js版本，操作简单高效。

使用nvm的优势非常明显：你可以轻松为不同的项目指定所需的Node.js版本，确保开发环境与生产环境一致，避免因版本差异导致的兼容性问题。无论是学习新特性，还是维护老项目，nvm都是Node.js开发者的必备工具。

## 如何安装nvm？

在安装nvm之前，请确保你的系统已安装必要的构建工具（如Git和C++编译器）。以下是在不同操作系统上的安装方法。

**对于macOS和Linux用户：**
推荐使用官方安装脚本。打开终端，执行以下命令：
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
或者使用wget：
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
安装完成后，重启终端或运行 `source ~/.bashrc`（或 `~/.zshrc`、`~/.profile`，具体取决于你的shell）使nvm生效。

**对于Windows用户：**
由于原版nvm不支持Windows，你可以使用其衍生版本 `nvm-windows`。请访问其GitHub发布页面，下载最新的安装程序（.exe文件），然后按照向导步骤完成安装。安装后，你可以在命令提示符（CMD）或PowerShell中使用nvm命令。

安装完成后，可以通过运行 `nvm --version` 来验证是否安装成功。

## 使用nvm管理Node.js版本

安装好nvm后，你就可以开始管理Node.js了。以下是一些最常用的命令。

**1. 安装Node.js版本**
要安装最新的长期支持（LTS）版本，运行：
```bash
nvm install --lts
```
要安装特定版本（如18.20.3）：
```bash
nvm install 18.20.3
```
要安装最新的发布版：
```bash
nvm install node
```

**2. 切换和使用Node.js版本**
列出所有已安装的版本：
```bash
nvm ls
```
切换到某个已安装的版本（如18.20.3）：
```bash
nvm use 18.20.3
```
将某个版本（如18.20.3）设置为系统默认版本：
```bash
nvm alias default 18.20.3
```
这样，每次新开终端都会自动使用该版本。

**3. 其他实用命令**
查看当前使用的Node.js和npm版本：
```bash
node -v
npm -v
```
卸载某个不再需要的Node.js版本：
```bash
nvm uninstall 16.14.0
```

## 最佳实践与故障排除

为了更顺畅地使用nvm，这里有一些建议：
*   **项目级版本控制**：在项目根目录创建 `.nvmrc` 文件，里面只写版本号（如 `18.20.3`）。进入目录后，只需运行 `nvm use`，nvm会自动读取该文件并切换版本。
*   **镜像加速**：如果你在中国大陆，安装Node.js时可能会很慢。可以设置淘宝镜像来加速下载：
    ```bash
    export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
    ```
    将这条命令添加到你的shell配置文件（如 `~/.zshrc`）中。
*   **常见问题**：如果遇到 `nvm: command not found` 错误，通常是因为shell配置文件没有正确加载。请检查你是否将nvm的初始化脚本正确添加到了 `~/.bashrc`、`~/.zshrc` 或 `~/.profile` 文件中，并执行 `source` 命令重新加载。

对于macOS用户，如果你对通过包管理器（如Homebrew）安装Node.js更感兴趣，可以参考这篇详细的 [MAC安装方式](/catalog-2/directory-nesting-333/mac-installation) 文章，其中对比了不同方法的优劣。

## 常见问题

### 我已经用其他方式安装了Node.js，还能安装nvm吗？
完全可以。建议你先卸载通过其他途径（如官网安装包、系统包管理器）安装的全局Node.js，以避免路径冲突。然后按照上述步骤安装nvm，再用nvm安装你需要的Node.js版本。这样能确保所有版本都由nvm统一管理。

### 使用nvm安装Node.js后，为什么npm包需要重新安装？
nvm将每个Node.js版本及其全局安装的包都隔离在独立的目录中。当你切换Node.js版本时，之前版本下全局安装的包（通过 `npm install -g` 安装的）在新版本环境下是不可见的。这是正常的设计，目的是保证环境的纯净。你需要在新的版本下重新安装所需的全局工具。项目本地（`node_modules`）的依赖不受影响。

### nvm-windows 和 macOS/Linux 版的nvm命令完全一样吗？
核心功能（如 `install`, `use`, `ls`, `uninstall`）是基本一致的。但由于系统差异，`nvm-windows` 在实现和部分命令上可能有细微差别。例如，在Windows上设置默认版本的命令是 `nvm use 18.20.3` 并加上 `nvm on`，而类Unix系统是 `nvm alias default 18.20.3`。建议使用时查阅各自官方文档以获取最准确的信息。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

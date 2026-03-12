---
title: "MAC安装NodeJS步骤"
description: "在 macOS 上安装 Node.js 是进行 Web 开发、服务器端编程或使用现代 JavaScript 工具链的第一步。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，让开发者能够在浏览器之外运"
readingTime: 4
lastUpdated: 1773302713441
---

# MAC安装NodeJS步骤

## Node.js 在 macOS 上的安装指南

在 macOS 上安装 Node.js 是进行 Web 开发、服务器端编程或使用现代 JavaScript 工具链的第一步。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，让开发者能够在浏览器之外运行 JavaScript 代码。本文将详细介绍几种在 macOS 上安装 Node.js 的可靠方法，帮助你选择最适合自己需求的方式。

### 方法一：使用官方安装包（最简单）

这是最适合新手的安装方式，直接从 Node.js 官网下载 macOS 安装包。

1. 访问 [Node.js 官方网站](https://nodejs.org/)
2. 你会看到两个版本选项：
   - **LTS 版本**（长期支持版）：推荐大多数用户使用，稳定性高，适合生产环境
   - **Current 版本**（当前最新版）：包含最新特性，适合想体验新功能的开发者
3. 点击 macOS 安装包（.pkg 文件）下载
4. 下载完成后，双击安装包文件，按照安装向导的提示完成安装
5. 安装完成后，打开终端（Terminal）验证安装是否成功：
   ```bash
   node --version
   npm --version
   ```
   如果正确显示版本号，说明安装成功。

### 方法二：使用 Homebrew 安装（推荐开发者使用）

Homebrew 是 macOS 上流行的包管理器，通过命令行安装和管理软件。

1. 首先确保已安装 Homebrew，如果没有安装，在终端运行：
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. 使用 Homebrew 安装 Node.js：
   ```bash
   brew install node
   ```

3. 安装完成后同样使用 `node --version` 和 `npm --version` 验证安装

使用 Homebrew 的优势在于：
- 方便后续更新：`brew upgrade node`
- 易于管理多个版本
- 与 macOS 系统集成更好

### 方法三：使用 nvm（Node Version Manager）

如果你需要在不同项目中使用不同版本的 Node.js，nvm 是最佳选择。

1. 安装 nvm，在终端运行：
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```
   或者使用 Homebrew：`brew install nvm`

2. 关闭并重新打开终端，或运行 `source ~/.zshrc`（或 `~/.bash_profile`）

3. 安装特定版本的 Node.js：
   ```bash
   nvm install 18  # 安装 Node.js 18 的最新版本
   nvm install 16  # 安装 Node.js 16 的最新版本
   ```

4. 切换使用的 Node.js 版本：
   ```bash
   nvm use 18
   ```

5. 设置默认版本：
   ```bash
   nvm alias default 18
   ```

### 安装后的配置建议

1. **配置 npm 全局安装路径**（避免使用 sudo）：
   ```bash
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   ```
   然后将 `~/.npm-global/bin` 添加到 PATH 环境变量中。

2. **更新 npm 到最新版本**：
   ```bash
   npm install -g npm@latest
   ```

3. **安装常用全局工具**：
   ```bash
   npm install -g yarn nodemon typescript
   ```

### 验证安装和基本使用

安装完成后，可以创建一个简单的测试文件来验证 Node.js 是否正常工作：

1. 创建 `test.js` 文件：
   ```javascript
   console.log('Node.js 安装成功！');
   console.log('当前 Node.js 版本：', process.version);
   ```

2. 在终端运行：
   ```bash
   node test.js
   ```

3. 你应该能看到输出信息，确认 Node.js 正常运行。

## 常见问题

### 安装后终端提示 "command not found: node" 怎么办？
这通常是因为终端会话没有更新 PATH 环境变量。解决方法：
1. 关闭当前终端窗口，重新打开一个新的终端窗口
2. 如果是使用 nvm 安装的，确保已运行 `nvm use [版本号]`
3. 检查 Node.js 是否确实安装成功，可以尝试重新安装

### 如何完全卸载 Node.js 并重新安装？
完全卸载 Node.js 的步骤：
1. 如果使用安装包安装，可以下载官方卸载脚本
2. 如果使用 Homebrew 安装：`brew uninstall node`
3. 如果使用 nvm：`nvm uninstall [版本号]`
4. 手动删除相关文件和目录：
   ```bash
   sudo rm -rf /usr/local/lib/node_modules
   sudo rm -rf /usr/local/include/node
   sudo rm -rf ~/.npm
   sudo rm -rf ~/.nvm
   ```

### 应该选择哪个 Node.js 版本？
对于大多数用户：
- **生产环境**：选择最新的 LTS 版本（偶数版本号，如 18.x、20.x）
- **学习或实验**：可以选择 Current 版本体验最新特性
- **企业项目**：根据项目要求选择特定版本

如果你需要更详细的 macOS 软件安装基础知识，可以参考我们之前的文章：[MAC安装方式](/catalog-2/directory-nesting-333/mac-installation)，其中介绍了 macOS 系统下各种软件的安装方法和最佳实践。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

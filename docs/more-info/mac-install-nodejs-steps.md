---
title: "MAC安装NodeJS步骤"
description: "Node.js是当今Web开发中不可或缺的JavaScript运行时环境，无论是前端工程化、后端API开发还是构建工具链都离不开它。在macOS上安装Node.js有多种可靠的方法，每种方式都有其适用场景。 对于大多数开发者，我们强烈推荐使"
readingTime: 3
lastUpdated: 1773230713636
---

# MAC安装NodeJS步骤

## Node.js在macOS上的安装指南

Node.js是当今Web开发中不可或缺的JavaScript运行时环境，无论是前端工程化、后端API开发还是构建工具链都离不开它。在macOS上安装Node.js有多种可靠的方法，每种方式都有其适用场景。

### 推荐安装方法：使用Node版本管理器

对于大多数开发者，我们强烈推荐使用Node版本管理器进行安装。这种方法允许您轻松地在不同Node.js版本之间切换，非常适合需要同时维护多个项目的开发环境。

**nvm（Node Version Manager）是目前最受欢迎的选择**：

1. **安装Homebrew**（如果尚未安装）：
   在终端中执行以下命令：
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **通过Homebrew安装nvm**：
   ```bash
   brew install nvm
   ```

3. **配置nvm环境**：
   安装完成后，根据终端提示将nvm初始化脚本添加到您的shell配置文件（如`~/.zshrc`或`~/.bash_profile`）中。

4. **使用nvm安装Node.js**：
   ```bash
   nvm install --lts  # 安装最新的LTS（长期支持）版本
   nvm use --lts      # 使用LTS版本
   ```

### 直接下载安装包

如果您偏好图形界面操作，可以直接从Node.js官网下载安装包：

1. 访问 [Node.js官方网站](https://nodejs.org/)
2. 点击绿色的"LTS"下载按钮（推荐大多数用户使用）
3. 下载完成后，双击`.pkg`文件并按照安装向导完成安装
4. 安装完成后，打开终端验证安装：
   ```bash
   node --version
   npm --version
   ```

### 通过包管理器安装

如果您已经熟悉macOS的包管理器，也可以选择以下方式：

**使用Homebrew直接安装Node.js**：
```bash
brew install node
```

这种方法简单直接，但不如nvm灵活，无法轻松切换多个Node.js版本。

### 安装后的配置与验证

无论选择哪种安装方式，安装完成后都应进行以下验证和配置：

1. **验证安装**：
   ```bash
   node -v  # 显示Node.js版本
   npm -v   # 显示npm版本
   ```

2. **配置npm全局安装路径**（避免使用sudo）：
   ```bash
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   ```

3. **将npm全局路径添加到环境变量**：
   在`~/.zshrc`或`~/.bash_profile`中添加：
   ```bash
   export PATH=~/.npm-global/bin:$PATH
   ```

4. **更新npm到最新版本**：
   ```bash
   npm install -g npm@latest
   ```

### 选择正确的Node.js版本

- **LTS版本**：适合生产环境和大多数项目，每12个月发布一次，提供18个月的支持
- **Current版本**：包含最新特性，适合尝鲜和测试，每6个月发布一次

对于新项目，建议从最新的LTS版本开始。如果您需要了解其他在macOS上的软件安装方式，可以参考我们之前介绍的[MAC安装方式](/catalog-2/directory-nesting-333/mac-installation)文章，其中包含了更多macOS环境配置的技巧。

## 常见问题

### 安装Node.js后命令无法识别怎么办？
这通常是因为环境变量没有正确配置。首先确认Node.js是否已成功安装，然后检查您的shell配置文件（如`~/.zshrc`或`~/.bash_profile`）是否正确设置了PATH。如果您使用nvm，请确保已按照提示将初始化脚本添加到配置文件中。重启终端或执行`source ~/.zshrc`（或相应的配置文件）使更改生效。

### 如何彻底卸载Node.js重新安装？
如果您使用nvm安装，只需运行`nvm uninstall <version>`即可移除特定版本。如果使用.pkg安装包安装，需要手动删除相关文件：1) 删除`/usr/local/lib`中的node_modules目录；2) 删除`/usr/local/lib`中的node和node目录；3) 删除`/usr/local/bin`中的node、npm和npx等可执行文件；4) 删除`/usr/local/share`中的man页面。建议使用nvm管理，可以避免复杂的卸载过程。

### 应该选择哪个Node.js版本管理器？
nvm是目前最受欢迎且维护活跃的Node版本管理器，特别适合需要同时处理多个项目的开发者。如果您只需要单一Node.js版本且偏好简单，可以直接使用Homebrew安装。对于企业环境或需要更精细控制的场景，可以考虑nvs或fnm等替代方案，但nvm的社区支持和文档最为完善。

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />

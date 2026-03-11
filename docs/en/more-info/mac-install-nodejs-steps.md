---
title: "Steps to Install Node.js on macOS"
description: "Node.js is a JavaScript runtime environment built on Chrome's V8 engine, enabling developers to use JavaScript for serve"
lastUpdated: 1773251002861
---

# Steps to Install Node.js on Mac

## Why Install Node.js on Mac?

Node.js is a JavaScript runtime environment built on Chrome's V8 engine, enabling developers to use JavaScript for server-side programming and command-line tools. It is an almost essential foundation for modern web development, build tools (like Webpack, Vite), or running various front-end frameworks (like React, Vue, Next.js). Installing Node.js on macOS means you have set up the core runtime and package management tools (npm or yarn) for your local development environment.

## Comparison of Main Installation Methods

There are three main recommended ways to install Node.js on Mac, each with its own pros and cons, suitable for different scenarios.

1.  **Official Installer (Most Direct)**
    *   **Method**: Download the `.pkg` installer directly from the Node.js official website.
    *   **Pros**: Graphical interface, simple operation, suitable for beginners.
    *   **Cons**: Inflexible version management; upgrading or downgrading requires manual uninstallation and reinstallation.

2.  **Using Homebrew (Recommended for Most Developers)**
    *   **Method**: Install via Homebrew, the powerful package manager for macOS.
    *   **Pros**: Extremely convenient installation and management, easy to upgrade and uninstall. Good integration with the system environment.
    *   **Cons**: Requires Homebrew to be installed first.

3.  **Using a Version Manager (nvm, Recommended for Developers Needing Multi-Version Switching)**
    *   **Method**: Use Node Version Manager (nvm) to install and manage multiple Node.js versions.
    *   **Pros**: Easily switch between different Node.js versions required by various projects. Ideal for team collaboration and legacy project development.
    *   **Cons**: Requires learning an additional command-line tool.

## Detailed Installation Steps

### Method 1: Install via Homebrew (Recommended)

This is currently the most universal and convenient method.

1.  **Ensure Homebrew is installed**. If not, open Terminal and paste the following command:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Follow the prompts to complete the installation. For more detailed Homebrew installation and configuration, you can refer to this article about [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation).

2.  **Install Node.js**. Run in Terminal:
    ```bash
    brew install node
    ```
    This command installs both Node.js and its package manager, npm.

3.  **Verify Installation**. After installation, run the following commands to check the versions:
    ```bash
    node -v
    npm -v
    ```
    If the version numbers for Node.js and npm are output respectively (e.g., `v20.11.0` and `10.2.4`), the installation was successful.

### Method 2: Install using nvm (Multi-Version Management)

If you need to switch Node.js versions for different projects, nvm is the best choice.

1.  **Install nvm**. Run the installation script in Terminal:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```
    After installation, **close and reopen Terminal**, or run `source ~/.zshrc` (if you use Zsh shell, which is the default for macOS Catalina and later) to activate the configuration.

2.  **Install Node.js using nvm**. For example, to install the latest Long-Term Support (LTS) version:
    ```bash
    nvm install --lts
    ```
    You can also install a specific version: `nvm install 18.19.0`

3.  **Use a specific version**. List all installed versions: `nvm ls`. Switch to a version: `nvm use 18.19.0`. Set a default version: `nvm alias default 18.19.0`.

### Method 3: Download the Official Installer

Visit the [Node.js official website](https://nodejs.org/zh-cn/). The homepage displays two recommended versions: LTS (Long-Term Support, stable, recommended for production) and Current (latest features). Click the corresponding macOS installer (.pkg) to download, double-click to open, and follow the graphical wizard to complete the installation.

## Basic Configuration After Installation

1.  **Configure npm registry (Optional but recommended)**: To get faster download speeds within China, you can set the npm registry to a domestic mirror source, such as the Taobao mirror.
    ```bash
    npm config set registry https://registry.npmmirror.com/
    ```
2.  **Globally install common tools**: You can use npm to globally install some development tools, for example:
    ```bash
    npm install -g yarn # Another package manager
    npm install -g create-react-app # React scaffolding
    npm install -g @vue/cli # Vue CLI
    ```

## Common Issues

### ### What to do if `node -v` shows "command not found" after installation?
This usually means the terminal cannot find the Node.js installation path. Try:
*   **Homebrew installation**: Ensure Homebrew is installed correctly and try restarting the terminal.
*   **Official installer**: Sometimes a computer restart is needed for environment variables to take effect.
*   **General check**: Type `echo $PATH` in the terminal to see if the output includes the Node.js installation path (e.g., `/usr/local/bin`). If not, you may need to manually add the path in the `~/.zshrc` file or reinstall.

### ### How to completely uninstall Node.js from Mac?
The uninstallation method depends on how you installed it:
*   **Homebrew installation**: Run `brew uninstall node`, and possibly `brew cleanup`.
*   **Official installer installation**: No one-click uninstall. You need to manually delete Node-related files in `/usr/local/lib`, the node and node_modules directories in `/usr/local/include`, and command links like node, npm in `/usr/local/bin`. Proceed with caution.
*   **nvm installation**: Simply delete the nvm directory, usually `rm -rf ~/.nvm`.

### ### Which Node.js version should I choose?
For learning and new projects, **it is strongly recommended to choose the LTS version on the official homepage**. It has undergone longer testing, has more stable APIs and community support, and helps avoid obscure bugs that might occur with very new versions. The Current version can be used to experience the latest features but is not recommended for production environments.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
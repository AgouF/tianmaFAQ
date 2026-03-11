---
title: "MAC Installation Guide for NodeJS"
description: "Node.js is a JavaScript runtime environment built on Chrome's V8 engine, enabling developers to use JavaScript for serve"
lastUpdated: 1773269850238
---

# MAC Installation Guide for NodeJS

## Why Install Node.js on Mac?

Node.js is a JavaScript runtime environment built on Chrome's V8 engine, enabling developers to use JavaScript for server-side programming and command-line tools. It is an almost essential cornerstone for modern web development, build tools (like Webpack, Vite), or running various front-end frameworks (such as React, Vue, Next.js). Installing Node.js on your Mac means you have set up the core engine for your local development environment, allowing you to start using npm (Node Package Manager) to manage project dependencies, execute scripts, and launch development servers.

## Detailed Guide to Main Installation Methods

On macOS, there are three main recommended ways to install Node.js, each with its own advantages and disadvantages, suitable for different usage scenarios.

### Method 1: Using the Official Installer (Simplest and Most Direct)
This is the most beginner-friendly approach.
1.  **Visit the Official Website**: Go to the [Node.js official website](https://nodejs.org/zh-cn/).
2.  **Choose a Version**: You will see two main versions: **LTS (Long Term Support)** and **Current (Latest Features)**. For learning and most production environments, **it is strongly recommended to choose the LTS version**, as it is more stable and has a longer support cycle.
3.  **Download and Install**: Click the corresponding macOS installer (.pkg file) to download. Once downloaded, double-click to open it and follow the graphical installation wizard's prompts to complete the setup. The installer will automatically configure the environment variables.

**Advantages**: Simple process, no command-line operations required.
**Disadvantages**: Upgrading or managing multiple Node.js versions later can be cumbersome.

### Method 2: Using Homebrew (Recommended for Developers)
Homebrew is a powerful package manager for macOS, making it very convenient to install and manage software. If you haven't installed Homebrew yet, you can refer to our detailed [MAC Installation Guide](/catalog-2/directory-nesting-333/mac-installation).
Steps to install Node.js:
1.  Open the "Terminal" application.
2.  Execute the installation command:
    ```bash
    brew install node
    ```
3.  Homebrew will automatically download and install Node.js along with its bundled npm.

**Advantages**:
*   **Easy Management**: Can be easily upgraded later via `brew upgrade node`.
*   **Unified Ecosystem**: Consistent management style with other development tools installed via Homebrew.
**Disadvantages**: Requires Homebrew to be installed first.

### Method 3: Using the Version Manager nvm (Advanced / Essential for Multiple Projects)
If your different projects require switching between different versions of Node.js, then nvm (Node Version Manager) is the best choice. It allows you to install and switch between multiple Node versions on the same machine.
1.  Install nvm. You can use Homebrew (`brew install nvm`), or use the official installation script (execute scripts from the network in the terminal with caution):
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```
    After installation, close and reopen the terminal as prompted, or run `source ~/.zshrc` (if you use the Zsh shell).
2.  Use nvm to install Node.js. For example, to install the latest LTS version:
    ```bash
    nvm install --lts
    ```
3.  Use a specific version:
    ```bash
    nvm use 18.17.0
    ```

**Advantages**: Perfect version isolation and control, a standard tool for professional developers.
**Disadvantages**: Configuration is slightly more complex for beginners.

## Verifying Installation and Basic Configuration

Regardless of the installation method used, verification is necessary after installation.
1.  **Check Versions**: Open the terminal and run the following commands separately:
    ```bash
    node -v
    npm -v
    ```
    If version numbers are displayed correctly (e.g., `v18.17.0` and `9.6.7`), the installation was successful.
2.  **Configure npm Mirror (Optional but Recommended)**: To achieve faster package download speeds within China, you can set npm's registry to a domestic mirror, such as the Taobao source:
    ```bash
    npm config set registry https://registry.npmmirror.com/
    ```

## Common Issues

### After installation, entering the `node` command in the terminal shows "command not found". What should I do?
This is usually because the system environment variable (PATH) is not configured correctly.
*   If you used the **official installer**, try restarting the terminal or computer.
*   If you used **Homebrew**, ensure Homebrew itself is installed correctly and its path is configured. You can run `brew doctor` to check.
*   The most general troubleshooting method is to enter `which node` or `where node` in the terminal to see if the system can locate the node command. If not found, you need to manually add Node.js's installation path (e.g., `/usr/local/bin`) to the PATH in your shell configuration file (like `~/.zshrc`).

### Which Node.js version should I choose?
For the vast majority of users, choosing the **LTS (Long Term Support) version** marked on the official website is the safest choice. LTS versions have a maintenance period of up to 30 months, with security patches and critical bug fixes, offering high stability and good compatibility. The Current version includes the latest experimental features, which may be unstable and are only suitable for trying out new features or testing specific functionalities.

### How to uninstall Node.js from Mac?
The uninstallation method depends on how you installed it:
*   **Official Installer**: Usually, you can uninstall it like other Mac applications by finding and deleting it in the "Applications" folder in Finder. However, a more thorough method is to use the provided uninstall script or manually delete related node files in `/usr/local/lib` and `/usr/local/include`.
*   **Homebrew**: Run `brew uninstall node` in the terminal.
*   **nvm**: First switch to the version you want to uninstall (e.g., `nvm use system` to switch to the system version), then run `nvm uninstall <version_number>`.

<RelatedCards :items='[{"title":"MAC Installation Guide","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
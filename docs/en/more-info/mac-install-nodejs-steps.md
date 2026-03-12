---
title: "Steps to Install Node.js on macOS"
description: "Installing Node.js on macOS is the first step for modern web development, server-side programming, or building toolchain"
lastUpdated: 1773316988910
---

# Steps to Install NodeJS on MAC

## Node.js Installation Guide on macOS

Installing Node.js on macOS is the first step for modern web development, server-side programming, or building toolchains with JavaScript. Node.js is a JavaScript runtime environment based on the Chrome V8 engine, allowing developers to run JavaScript code outside the browser. Due to its Unix-like characteristics, macOS has excellent compatibility with Node.js. This article details several mainstream and reliable installation methods to help you quickly set up your development environment.

### Method 1: Using the Official Installer (Most Direct)

This is the most suitable installation method for beginners, as the process is simple and intuitive.
1.  **Visit the Official Website**: Open the [Node.js official website](https://nodejs.org/zh-cn/).
2.  **Choose a Version**: The website offers two main versions: **LTS (Long-Term Support)** and **Current (Latest Features)**. For learning and production environments, it is strongly recommended to choose the **LTS version**, as it is more stable and receives long-term security updates.
3.  **Download and Install**: Click the corresponding macOS installer (.pkg file) to download. Once downloaded, double-click to open it and follow the prompts of the graphical installation wizard step by step. The entire process is similar to installing other regular software.
4.  **Verify Installation**: After installation, open the Terminal application and enter the following commands, pressing Enter after each:
    ```bash
    node -v
    npm -v
    ```
    If the version numbers for Node.js and npm (Node Package Manager) are displayed, such as `v18.17.0` and `9.6.7`, the installation was successful.

### Method 2: Using Homebrew Installation (Recommended for Developers)

Homebrew is a powerful package manager for macOS, making software management via the command line very convenient. If you frequently engage in development work, this is the best choice.
1.  **Install Homebrew**: If you haven't installed Homebrew yet, open Terminal, visit the [brew.sh](https://brew.sh/) website, and copy and run the installation script provided on the homepage.
2.  **Install Node.js**: Run the following command in Terminal:
    ```bash
    brew install node
    ```
    This command will automatically download and install the latest stable version of Node.js and npm.
3.  **Verify Installation**: Use `node -v` and `npm -v` again to confirm successful installation. Another advantage of using Homebrew is that future upgrades to Node.js only require running `brew upgrade node`.

### Method 3: Using the Version Manager nvm (Advanced Option)

If you need to switch between multiple Node.js versions (e.g., different projects require different Node versions), then nvm (Node Version Manager) is the perfect tool.
1.  **Install nvm**: Install via Homebrew (`brew install nvm`), or use the official installation script. When using the script, be sure to visit the [nvm GitHub repository](https://github.com/nvm-sh/nvm) to view and copy the latest installation command.
2.  **Install a Specific Node Version**: After installing nvm, restart Terminal, and then you can install any version of Node.js. For example:
    ```bash
    nvm install 18  # Install the latest Node.js 18.x version
    nvm install 20  # Install the latest Node.js 20.x version
    ```
3.  **Switch and Use Versions**:
    ```bash
    nvm use 18      # Switch to the 18.x version in the current terminal session
    nvm alias default 18  # Set 18.x as the default version
    ```
    Use `nvm ls` to view all installed versions.

### First Steps After Installation

After successful installation, it is recommended to configure npm's domestic mirror source to speed up subsequent package installations. Execute the following in Terminal:
```bash
npm config set registry https://registry.npmmirror.com/
```

## Common Issues

### What to Do If the `node` Command Is Not Found After Installation?
This is usually because the terminal session hasn't updated the system's PATH environment variable. Try the following steps:
1.  Completely close the Terminal application and reopen it.
2.  If installed via Homebrew, ensure Homebrew's path is correctly configured in the `~/.zshrc` file (if you are using macOS Catalina or later, the default shell is zsh). Homebrew usually provides a prompt after successful installation.
3.  Run `echo $PATH` to check if the output includes Node.js's installation path (e.g., `/usr/local/bin`).

### Which Installation Method Should I Choose?
*   **Beginners or those who just want to use it quickly**: Choose **Method 1 (Official Installer)** for the most hassle-free experience.
*   **Developers or those needing to manage multiple software**: Strongly recommend **Method 2 (Homebrew)**, as managing updates and uninstalls is very convenient.
*   **Need to switch between different Node versions for different projects**: Must choose **Method 3 (nvm)**.

### How to Completely Uninstall Node.js?
The uninstallation method depends on how you installed it:
*   **Installed via the official installer**: You can try using third-party uninstaller tools or manually delete node-related files in `/usr/local/lib` and `/usr/local/include`, and remove the `node`, `npm` commands in `/usr/local/bin`. Please back up before proceeding.
*   **Installed via Homebrew**: Very simple, just run `brew uninstall node` in Terminal.
*   **Installed via nvm**: First switch to a version you don't want to uninstall, then run `nvm uninstall <version_number>`.

Regardless of the method chosen, installing Node.js is a crucial step in starting your full-stack JavaScript journey. Just like installing other professional software on your Mac, choosing the method that fits your workflow is most important. If you are interested in configuring other development environments, you can also refer to our series of articles on [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation).

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
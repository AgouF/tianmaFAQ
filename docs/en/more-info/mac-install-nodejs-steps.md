---
title: "Steps to Install Node.js on macOS"
description: "Installing Node.js on macOS is the first step for web development, running JavaScript server-side applications, or using"
lastUpdated: 1773292330131
---

# Steps to Install NodeJS on MAC

## Installation Steps for Node.js on macOS

Installing Node.js on macOS is the first step for web development, running JavaScript server-side applications, or using various modern front-end toolchains (such as Vue CLI, Create React App). The macOS system offers several clear and reliable installation methods, which you can choose based on your technical preferences and project requirements. Below are detailed steps for the most commonly used methods.

### Method 1: Using the Official Installer (Simplest)

This is the most suitable method for beginners, as the entire process is graphical and does not require using the command line.

1.  **Visit the Official Website to Download**: Open your browser and go to the [Node.js official website](https://nodejs.org/zh-cn/).
2.  **Choose a Version**: The website offers two main versions: **LTS (Long-Term Support)** and **Current**. For learning and production environments, it is strongly recommended to download the **LTS version**, as it is more stable and receives long-term security updates.
3.  **Download and Install**: Click the corresponding macOS installer (`.pkg` file) to download. Once downloaded, double-click to open it and follow the installation wizard prompts (click "Continue," "Agree," "Install") to complete the installation. The installer will automatically configure the environment variables.
4.  **Verify Installation**: After installation, open the "Terminal" application and enter the following commands, pressing Enter after each:
    ```bash
    node -v
    npm -v
    ```
    If the version numbers for Node.js and npm (Node Package Manager) are displayed, such as `v18.17.0` and `9.6.7`, the installation was successful.

### Method 2: Using Homebrew Installation (Recommended for Developers)

Homebrew is a powerful package manager for macOS, allowing software management via the command line, making future upgrades and management very convenient. If you haven't installed Homebrew yet, please refer to the instructions in [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation) to install it first.

1.  **Open Terminal**: Open via Spotlight (Command+Space, search for "Terminal") or from the "Applications" folder.
2.  **Install Node.js**: In the terminal, enter the following command and press Enter:
    ```bash
    brew install node
    ```
    Homebrew will automatically download and install Node.js along with its accompanying npm.
3.  **Verify Installation**: Use the `node -v` and `npm -v` commands again to confirm successful installation. After installing via Homebrew, you can easily upgrade to new versions in the future using `brew upgrade node`.

### Method 3: Using a Node Version Manager (nvm)

If you need to switch between multiple Node.js versions (e.g., different projects require different versions), nvm is the best tool.

1.  **Install nvm**: Run the following installation script in the terminal (be sure to visit the [nvm GitHub repository](https://github.com/nvm-sh/nvm) for the latest installation command):
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```
    After installation, close and reopen the terminal, or run `source ~/.zshrc` (if using Zsh shell, which is the default for macOS Catalina and later) to apply the configuration.
2.  **Use nvm to Install Node.js**:
    ```bash
    nvm install --lts # Install the latest LTS version
    # Or specify a version: nvm install 16
    ```
3.  **Switch and Use Versions**:
    ```bash
    nvm use --lts # Use the newly installed LTS version
    nvm ls # View all installed versions
    ```

### Important Configuration After Installation

After successful installation, it is recommended to configure one setting to optimize the npm global package installation experience and avoid permission issues:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
```
Then, add `~/.npm-global/bin` to your environment variable `PATH`. Typically, you can add the line `export PATH=~/.npm-global/bin:$PATH` to the end of your `~/.zshrc` file, then run `source ~/.zshrc`.

## Common Issues

### What to Do If the `node` Command Is Not Found After Installation?
This is usually because the terminal session hasn't refreshed the environment variables. Try:
1.  Completely close the Terminal application and reopen it.
2.  If installed via Homebrew, ensure Homebrew itself is correctly configured. You can run `brew doctor` to check.
3.  Check if the PATH is correctly set in your shell configuration file (e.g., `~/.zshrc`).

### Which Installation Method Should I Choose?
- **Regular Users or Beginners**: Use **Method 1 (Official Installer)** for the easiest experience.
- **Developers or Those Needing to Manage Multiple Software**: Strongly recommend **Method 2 (Homebrew)** for convenient management and upgrades.
- **Need to Switch Between Different Node.js Versions for Different Projects**: Must use **Method 3 (nvm)**.

### How to Completely Uninstall Node.js?
The uninstallation method depends on how it was installed:
- **Installed via Installer**: You can try using third-party uninstaller tools or manually delete related node and npm files in `/usr/local/bin` and the node_modules directory in `/usr/local/lib`.
- **Installed via Homebrew**: Run `brew uninstall node`.
- **Installed via nvm**: First switch to a version other than the one you want to delete, then run `nvm uninstall <version_number>`. To uninstall nvm itself, simply delete its installation directory (usually `~/.nvm`) and remove the relevant lines from `~/.zshrc`.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
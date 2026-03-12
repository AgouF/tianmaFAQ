---
title: "Steps to Install Node.js on macOS"
description: "Installing Node.js on macOS is the first step for web development, building toolchains, or running JavaScript server-sid"
lastUpdated: 1773273434336
---

# Steps to Install NodeJS on MAC

## Node.js Installation Guide on macOS

Installing Node.js on macOS is the first step for web development, building toolchains, or running JavaScript server-side applications. The macOS system offers several flexible and reliable installation methods, allowing you to choose based on your technical preferences and project requirements. The correct installation method not only ensures environment stability but also facilitates subsequent version management. This article details several mainstream and verified installation steps.

### Installation via Official Installer (Simplest and Most Direct)

This is the most suitable method for beginners, with an intuitive process.
1.  **Visit the Official Website**: Open the [Node.js official website](https://nodejs.org/zh-cn/).
2.  **Choose a Version**: It is generally recommended to choose the version labeled "Long Term Support (LTS)", which offers better stability and support for production environments.
3.  **Download and Install**: Click to download the `.pkg` installer. Once downloaded, double-click to open it and follow the prompts of the graphical installation wizard step by step. The process is similar to installing other macOS software.
4.  **Verify Installation**: After installation, open the "Terminal" application, enter the following commands, and press Enter:
    ```bash
    node -v
    npm -v
    ```
    If the version numbers for Node.js and npm (Node Package Manager) are displayed correctly, such as `v18.17.0` and `9.6.7`, the installation is successful.

**Advantages**: No command-line operations required; simple and fast.
**Disadvantages**: Version switching is not flexible; upgrading requires re-downloading the installer.

### Installation via Homebrew (Recommended for Developers)

Homebrew is a powerful package manager for macOS. Installing and managing Node.js through it is very efficient.
1.  **Install Homebrew**: If you haven't installed Homebrew yet, run the following command in the terminal:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Follow the prompts to complete the installation.
2.  **Install Node.js Using Brew**: Execute the following command in the terminal:
    ```bash
    brew install node
    ```
    Homebrew will automatically download and install the latest stable version of Node.js and its included npm.
3.  **Verify Installation**: Use the `node -v` and `npm -v` commands to verify.

**Advantages**: Convenient installation and management, easy to upgrade later (using `brew upgrade node`).
**Disadvantages**: Requires installing Homebrew first.

### Installation Using Version Manager nvm (Advanced Recommendation)

For professional developers who need to use multiple Node.js versions across different projects simultaneously, nvm (Node Version Manager) is the best choice. It allows you to install and switch between multiple versions on your system at any time.
1.  **Install nvm**: Install via a terminal script. Be sure to visit the [nvm official GitHub repository](https://github.com/nvm-sh/nvm) to view and copy the latest installation command. Typically, the command is as follows:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```
    After installation, close and reopen the terminal, or run `source ~/.zshrc` (if you are using the Zsh shell, which is the default shell for macOS Catalina and later versions) to make the configuration take effect.
2.  **Install Node.js Using nvm**:
    ```bash
    nvm install --lts # Install the latest LTS version
    # Or install a specific version
    # nvm install 16.14.0
    ```
3.  **Switch and Use Versions**:
    ```bash
    nvm use --lts # Use the newly installed LTS version
    nvm alias default node # Set the default version (optional)
    ```

**Advantages**: Perfect multi-version management and switching, completely isolating environments for different projects.
**Disadvantages**: Slightly more configuration steps, requiring some command-line operation experience.

Regardless of the method chosen, once installed, you can begin your Node.js journey on macOS. For more in-depth configuration and optimization, you can refer to our other detailed guide on [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation).

## Common Issues

### I have installed Node.js via the installer. How do I upgrade to a new version?
If you used the official installer, the most direct method is to go to the official website, download the new version's `.pkg` file, and reinstall. The installer will automatically overwrite the old version. If you prefer a more elegant way to manage versions, it is recommended to uninstall the current version and then use **Homebrew** (`brew upgrade node`) or **nvm** (`nvm install new-version`) for installation and upgrades. The latter is more convenient for long-term development.

### What should I do if I encounter "Permission denied" or "Command not found" during installation?
These errors are usually related to environment variables or permissions.
1.  **For "Command not found"**: After installation, ensure you restart the terminal or manually refresh the shell configuration (e.g., run `source ~/.zshrc`). If you installed using nvm or Homebrew, check if their installation scripts have correctly configured the path.
2.  **For "Permission denied (EACCES)"**: This often occurs when installing npm packages globally. **It is not recommended to use `sudo` to resolve this**, as it may lead to security issues. The correct approach is to reconfigure npm's default directory permissions. You can follow the official guide and use the `npm config set prefix` command to change the global installation path to a directory where you have write permissions.

### How do I completely uninstall Node.js from macOS?
A complete uninstall depends on your installation method:
*   **Installed via the installer**: In addition to deleting the Node.js program itself, you need to manually clean up `node` and `node_modules` related files in directories such as `/usr/local/lib` and `/usr/local/include`, as well as related links in `/usr/local/bin`. Using a dedicated uninstall script or finding a detailed tutorial is safer.
*   **Installed via Homebrew**: Run `brew uninstall node` and follow the prompts to clean up.
*   **Installed via nvm**: First, delete the version you want to uninstall with `nvm uninstall <version>`. If you want to remove nvm itself, delete its installation directory (usually `~/.nvm`) and remove the relevant lines from the shell configuration file (e.g., `~/.zshrc`). In comparison, using a version manager for uninstallation is the cleanest and simplest.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
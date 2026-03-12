---
title: "Steps to Install Node.js on macOS"
description: "Installing Node.js on macOS is the first step for web development, building toolchains, or running JavaScript server-sid"
lastUpdated: 1773326803578
---

# Steps to Install NodeJS on MAC

## Methods for Installing Node.js on macOS

Installing Node.js on macOS is the first step for web development, building toolchains, or running JavaScript server-side applications. The macOS system offers several clear and reliable installation methods. Users can choose the most suitable one based on their technical background and needs. Mainstream methods include using the official installer, installing via the Homebrew package manager, and using the version management tool nvm. Each method has its own characteristics and applicable scenarios.

For most beginners and users seeking simplicity and speed, downloading the installer directly from the Node.js official website is the most intuitive choice. For developers who frequently need to manage multiple projects or different Node.js versions, using nvm is a more professional and flexible solution.

### Method 1: Using the Official Installer (Recommended for Beginners)
This is the most straightforward method, suitable for users unfamiliar with the command line.
1.  **Visit the Official Website**: Open your browser and go to the [Node.js official website](https://nodejs.org/zh-cn/).
2.  **Choose a Version**: The website will recommend the latest Long-Term Support (LTS) version. For most users, choosing the LTS version offers better stability. Click the green "macOS Installer" button to download.
3.  **Run the Installer**: After downloading, open the `.pkg` file. Simply follow the prompts of the graphical installation wizard, clicking "Continue," "Agree," and "Install." The installation process will install both the Node.js runtime and the npm package manager.
4.  **Verify Installation**: After installation, open the "Terminal" application, enter the following commands, and press Enter:
    ```bash
    node -v
    npm -v
    ```
    If the terminal displays the version numbers of Node.js and npm respectively (e.g., `v18.17.0` and `9.6.7`), the installation was successful.

### Method 2: Installing via Homebrew
Homebrew is a powerful package manager for macOS, suitable for users who already use or are willing to use command-line tools.
1.  **Install Homebrew**: If you haven't installed Homebrew yet, run the installation script provided on its official website in the terminal.
2.  **Install Node.js**: Execute the following command in the terminal:
    ```bash
    brew install node
    ```
    This command will automatically download and install the latest stable version of Node.js and npm.
3.  **Verify Installation**: Again, use the `node -v` and `npm -v` commands to confirm if the installation was successful. Another advantage of installing via Homebrew is that you can easily upgrade in the future using the `brew upgrade node` command.

### Method 3: Installing via nvm (Node Version Manager)
This is the preferred choice for developers because it allows you to install and switch between multiple Node.js versions on the same machine, perfectly solving the problem of different projects requiring different Node.js versions.
1.  **Install nvm**: Install nvm via a terminal script. Please note that before installation, ensure you haven't installed Node.js through other methods to avoid conflicts.
2.  **Install Node.js Using nvm**: After installing nvm, you can install a specific version of Node.js, for example, the latest LTS version:
    ```bash
    nvm install --lts
    ```
    Or install a specific version: `nvm install 16.20.0`.
3.  **Switch and Use Versions**: You can list all installed versions (`nvm ls`) and switch to one of them (`nvm use 16.20.0`). You can also set a default version (`nvm alias default 18`).

Regardless of the method chosen, after successful installation, you can start your Node.js projects on macOS. Just like mastering [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation), choosing the right tool for you is the beginning of efficient work.

## Common Questions

### Which Node.js version should I choose?
For learning and production environments, **it is strongly recommended to choose the version marked as LTS**. LTS stands for "Long-Term Support," meaning this version will receive security updates and bug fixes for a longer period, offering higher stability. Odd-numbered versions (e.g., 19.x, 21.x) are current releases containing the latest features but may be less stable, making them more suitable for experimentation.

### What should I do if I get a "Permission denied" error during installation?
If you encounter a `Permission denied` error when executing commands in the terminal, it is usually because the current user does not have write permissions to the installation directory.
*   If using **nvm** or **Homebrew**, ensure they themselves are correctly installed according to the official guides.
*   A common solution is to use the `sudo` command to temporarily obtain administrator privileges, for example, `sudo npm install -g some-package`. However, use `sudo` cautiously when installing global npm packages.
*   A more fundamental solution is to correct the ownership of the directory, for example: `sudo chown -R $(whoami) ~/.npm`.

### How do I completely uninstall Node.js from macOS?
The uninstallation method depends on how you originally installed it:
*   **Installed via the installer**: There is no one-click uninstaller. You need to manually delete the node, npm, and other executable files in `/usr/local/bin`, as well as the node_modules directory in `/usr/local/lib`.
*   **Installed via Homebrew**: Simply run `brew uninstall node`.
*   **Installed via nvm**: First, delete all Node.js versions managed by nvm: `nvm uninstall <version>`, then follow nvm's guide to uninstall nvm itself. This is the cleanest method.

Given that uninstalling the official installer is relatively cumbersome, this also highlights the advantage of using package management tools like **Homebrew** or **nvm** in managing software lifecycles.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
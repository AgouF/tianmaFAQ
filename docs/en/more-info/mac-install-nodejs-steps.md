---
title: "Steps to Install Node.js on macOS"
description: "Installing Node.js on macOS is the first step for modern web development, server-side programming, or building toolchain"
lastUpdated: 1773259114589
---

# Steps to Install NodeJS on MAC

## Node.js Installation Guide on macOS

Installing Node.js on macOS is the first step for modern web development, server-side programming, or building toolchains with JavaScript. Node.js is a JavaScript runtime environment based on the Chrome V8 engine, enabling developers to write backend services using JavaScript. On macOS, you have several reliable and convenient installation methods. This article details the most commonly used ones.

### Method 1: Using the Official Installer (Simplest)

This is the most suitable method for beginners.
1.  **Visit the Official Website**: Open your browser and go to the [Node.js official website](https://nodejs.org/zh-cn/).
2.  **Choose a Version**: You will see two main recommended versions: **LTS (Long-Term Support)** and **Current**. For most users, especially for production environments or learning, it is strongly recommended to choose the **LTS version** as it is more stable and has a longer support cycle.
3.  **Download and Install**: Click the corresponding macOS installer (.pkg file) to download. Once downloaded, double-click to open it and follow the prompts of the graphical installation wizard step by step. The process is similar to installing other regular software.
4.  **Verify Installation**: After installation, open the "Terminal" application (found in "Applications" -> "Utilities"). In the terminal, enter the following two commands one by one and press Enter:
    ```bash
    node -v
    npm -v
    ```
    If the installation is successful, the terminal will display your installed Node.js version number and npm (Node Package Manager) version number, respectively.

### Method 2: Using Homebrew Installation (Recommended for Developers)

Homebrew is a powerful package manager for macOS, making software management via the command line very convenient. If you frequently engage in development work, this is the best choice.
1.  **Install Homebrew**: If you haven't installed Homebrew yet, open the terminal, paste the following command, and press Enter:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Follow the prompts to complete the installation.
2.  **Install Node.js Using Homebrew**: In the terminal, enter the following command:
    ```bash
    brew install node
    ```
    Homebrew will automatically download and install Node.js and its dependencies, including npm.
3.  **Verify Installation**: Similarly, use `node -v` and `npm -v` to confirm successful installation. Another benefit of installing via Homebrew is that future upgrades to Node.js only require running `brew upgrade node`.

### Method 3: Using a Node Version Manager (nvm)

If you need to use different Node.js versions for different projects, nvm (Node Version Manager) is an essential tool. It allows you to install and switch between multiple Node.js versions on the same machine.
1.  **Install nvm**: Install via Homebrew (`brew install nvm`), or use the official installation script. It is recommended to install via the script. Run the following in the terminal:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```
    After installation, **close and reopen the terminal**, or run `source ~/.zshrc` (if you are using Zsh shell, which is the default shell for macOS Catalina and later) to make the configuration take effect.
2.  **Install Node.js Using nvm**: Install an LTS version:
    ```bash
    nvm install --lts
    ```
    Or install a specific version: `nvm install 18.17.0`.
3.  **Switch and Use Versions**: Use `nvm use 18.17.0` to switch versions. Use `nvm ls` to view all installed versions.

### Important Steps After Installation

Regardless of the installation method, it is recommended to do one thing after completion: **Configure npm's global installation path** to avoid permission errors when using `npm install -g` to install global packages in the future.
Execute in the terminal:
```bash
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
```
Then, you need to add `~/.npm-global/bin` to the system's PATH environment variable. The specific operation is related to configuring the shell environment. You can refer to our other detailed article on environment configuration **[MAC Installation Method](/catalog-2/directory-nesting-333/mac-installation)** for guidance.

## Common Issues

### What to do if "Permission Denied" error appears during installation?
This is usually due to using `sudo` or permission issues. Best practice is to **avoid using `sudo` to install Node.js or npm packages**. If you have already installed it in another way and encountered permission problems, you can try resetting the ownership of the npm default directory:
```bash
sudo chown -R $(whoami) ~/.npm
```
A more fundamental solution is to use the "Configure npm global installation path" method mentioned above, or directly use nvm to manage Node.js, which can completely avoid system-level permission conflicts.

### I have already installed Node.js. How do I upgrade to a new version?
This depends on your installation method:
*   **Via Official Installer**: Go to the official website to download the new version installer and reinstall to overwrite.
*   **Via Homebrew**: Run `brew update` and then `brew upgrade node`.
*   **Via nvm**: Run `nvm install node --reinstall-packages-from=node` (where `node` is your current version alias, or use a specific version number). This will install the latest version and migrate global packages, then use `nvm use node` to switch.

### What to do if `node` or `npm` command is not found after installation?
This indicates that the system's PATH environment variable does not include the Node.js installation path.
*   If you used the official installer, it is usually configured automatically. Try restarting the terminal or computer.
*   If you installed via Homebrew, ensure Homebrew itself is correctly configured in the PATH. Run `echo $PATH` to check if it includes `/usr/local/bin`.
*   If you used nvm, ensure you have correctly run the `source` command or restarted the terminal as per the installation instructions. Run `nvm --version` to check if nvm itself is available.

<RelatedCards :items='[{"title":"MAC Installation Method","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
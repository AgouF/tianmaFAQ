---
title: "Steps to Install Node.js on macOS"
description: "Installing Node.js on macOS is the first step for web development, running JavaScript server-side applications, or using"
lastUpdated: 1773263185984
---

# Steps to Install NodeJS on MAC

## Installation Steps for Node.js on macOS

Installing Node.js on macOS is the first step for web development, running JavaScript server-side applications, or using modern front-end build tools (such as Vue CLI, Create React App). The macOS system offers several clear and reliable installation methods, allowing users to choose based on their technical preferences and project requirements. Below are detailed steps for the most commonly used methods.

### Method 1: Using the Official Installer (Most Recommended for Beginners)

This is the most straightforward and error-free method, suitable for most users, especially beginners new to development.

1.  **Visit the Official Website to Download**: Open your browser and go to the [Node.js official website](https://nodejs.org/zh-cn/).
2.  **Choose a Version**: The website offers two main versions: **LTS (Long-Term Support)** and **Current (Latest Features)**. For learning and production environments, **it is strongly recommended to choose the LTS version** as it is more stable and receives long-term security updates.
3.  **Download and Install**: Click the corresponding macOS installer (`.pkg` file) to download. Once downloaded, double-click the `.pkg` file and follow the graphical installation wizard to complete the setup. The installer will automatically configure the environment variables.
4.  **Verify Installation**: After installation, open the "Terminal" application to verify.
    *   Type `node -v` and press Enter. It will display the installed Node.js version number (e.g., `v18.17.0`).
    *   Type `npm -v` and press Enter. It will display the version number of npm, the package manager installed with Node.js.
    If both commands show version information correctly, the installation is successful.

### Method 2: Installing via Homebrew (Recommended for Developers)

Homebrew is a powerful package manager for macOS, making it convenient to manage software via the command line and facilitating future updates and management.

1.  **Install Homebrew**: If you haven't installed Homebrew yet, open Terminal, paste the following command, and press Enter:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Follow the prompts to complete the installation.
2.  **Install Node.js via Homebrew**: In Terminal, enter the following command:
    ```bash
    brew install node
    ```
    Homebrew will automatically download and install Node.js and npm.
3.  **Verify Installation**: Use the `node -v` and `npm -v` commands to verify.

**Advantages**: Using Homebrew allows easy updates (`brew upgrade node`) or uninstallation (`brew uninstall node`) of Node.js, and it can manage multiple versions (with the help of tools like `n` or `nvm`).

### Method 3: Using the Version Manager nvm (Recommended for Advanced Users/Multiple Projects)

If your work requires maintaining multiple projects that need different Node.js versions, nvm (Node Version Manager) is the best choice. It allows you to install and switch between multiple Node.js versions on the same machine.

1.  **Install nvm**: Install via Homebrew (`brew install nvm`), or use the official installation script. A common command for script installation is as follows (always check the [nvm GitHub homepage](https://github.com/nvm-sh/nvm) for the latest command before installing):
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```
    After installation, you may need to restart Terminal or execute `source ~/.zshrc` (if you use Zsh shell, which is the default for macOS Catalina and later) as prompted.
2.  **Install Node.js Using nvm**:
    *   Install the latest LTS version: `nvm install --lts`
    *   Install a specific version: `nvm install 16.20.0`
    *   View installed versions: `nvm ls`
    *   Switch to a version: `nvm use 18.17.0`
    *   Set a default version: `nvm alias default 18.17.0`
3.  **Verification**: After switching versions, use `node -v` to verify the currently active version.

### Basic Configuration After Installation

After successful installation, it is recommended to perform a basic configuration: change npm's global package installation path to avoid using `sudo` privileges.
Execute the following in Terminal:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
```
Then, add `~/.npm-global/bin` to your environment variable `PATH`. Typically, you need to edit the `~/.zshrc` file, add the line `export PATH=~/.npm-global/bin:$PATH`, and then execute `source ~/.zshrc` to apply the changes.

## Common Issues

### What to Do If "Permission Denied" Appears During Installation?
This usually occurs when using `npm install -g` to install packages globally. The fundamental solution is to change npm's global path as described in the "Basic Configuration After Installation" section above. A temporary workaround is to add `sudo` before the command, but this is not best practice. Also, ensure you downloaded the installer from official sources and that "Security & Privacy" in System Preferences allows apps from "App Store and identified developers."

### How to Upgrade to a New Version If Node.js Is Already Installed?
This depends on your installation method:
*   **Installed via official `.pkg`**: Download the new version installer and run it again; it will overwrite the old version.
*   **Installed via Homebrew**: Run `brew update && brew upgrade node` in Terminal.
*   **Installed via nvm**: Simply run `nvm install <new version number>`, then use `nvm use` or `nvm alias default` to switch to the new version. The old version remains on the system for switching if needed.

### How Does the Installation Process Compare to General [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation)?
Node.js installation follows the general logic of macOS software installation: providing an intuitive graphical installer (`.pkg`) and flexible command-line methods (Homebrew). Its uniqueness lies in being a core tool for development environments, often installed via professional package managers (Homebrew) or version managers (nvm) to meet developers' needs for multi-version management and convenient updates. Compared to installing a regular desktop application (like a browser or office software), which only requires downloading a `.dmg` file and dragging it to the "Applications" folder, Node.js installation involves more steps but offers greater control.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
---
title: "Steps to Install Node.js on macOS"
description: "Node.js is the core runtime environment for modern web development and JavaScript server-side programming. There are sev"
lastUpdated: 1773240191825
---

# Steps to Install NodeJS on MAC

## Node.js Installation Guide on macOS

Node.js is the core runtime environment for modern web development and JavaScript server-side programming. There are several reliable methods to install Node.js on macOS, each with its own advantages and disadvantages, suitable for different usage scenarios. Choosing the correct installation method can help you better manage versions and dependencies.

### Recommended Installation Method: Using a Version Management Tool

For most developers, especially professionals who need to handle multiple projects simultaneously, we strongly recommend using a version management tool for installation. This allows you to easily switch between different versions of Node.js to meet the requirements of various projects.

Currently, the most popular version management tool is **nvm**. Here are the detailed steps to install Node.js using nvm:

1.  **Install nvm**: First, you need to install Node Version Manager. Open your terminal and execute the following command. It is recommended to use the official installation script:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```
    After installation is complete, close and reopen the terminal, or run `source ~/.zshrc` (if you use Zsh) or `source ~/.bash_profile` (if you use Bash) to apply the configuration.

2.  **Install Node.js using nvm**: After installing nvm, you can easily install any version of Node.js.
    *   Install the latest Long-Term Support version: `nvm install --lts`
    *   Install the latest current version: `nvm install node`
    *   Install a specific version: `nvm install 18.12.1`

3.  **Switch and use versions**: You can list all installed versions (`nvm ls`) and switch the version used in the current terminal session via `nvm use <version>`. You can also set a default version via `nvm alias default <version>`.

### Other Installation Methods

Besides nvm, you have other options:

*   **Official Installer**: The most direct way is to download the macOS installer from the [Node.js official website](https://nodejs.org). Double-click the `.pkg` file and follow the graphical wizard to complete the installation. This method is simple and fast, suitable for beginners or users who only need a single stable version. The downside is that managing multiple versions is difficult.
*   **Using Homebrew**: If you are already a Homebrew user, you can install it via the package manager. Run `brew install node` in the terminal. Homebrew is also convenient for installation and updates, but compared to nvm, version switching is less flexible.

Regardless of the method chosen, after installation is complete, please run `node -v` and `npm -v` in the terminal to verify that Node.js and its package manager npm have been successfully installed and display version numbers.

### Post-Installation Configuration Recommendations

After successfully installing Node.js, it is recommended to perform the following configurations to optimize the development experience:

1.  **Configure npm registry**: To improve package download speeds within mainland China, you can set npm's registry address to a domestic mirror source.
    ```bash
    npm config set registry https://registry.npmmirror.com/
    ```
2.  **Globally install commonly used tools**: Some development tools like `nodemon` (auto-restarting applications), `yarn`, or `pnpm` (alternative package managers to npm) are very useful and can be considered for global installation.
    ```bash
    npm install -g nodemon pnpm
    ```

## Common Issues

### I already installed Node.js via the installer. How do I switch to using nvm?
First, it is recommended that you manually uninstall the previously installed Node.js via the installer from "System Preferences" -> "Users & Groups" on macOS. Then, follow the nvm installation steps above to start over. nvm will install all files in your user directory, avoiding conflicts with system-wide installations and making management clearer.

### What should I do if I encounter permission errors when installing with nvm?
Most permission errors are due to leftover files from previous installations or directory ownership issues. Ensure you own the `~/.nvm` directory. You can try running `sudo chown -R $(whoami) ~/.nvm` to fix permissions. Also, make sure your shell configuration file (e.g., `.zshrc`) correctly configures nvm's environment variables.

### How do I completely uninstall Node.js on macOS?
The uninstallation method depends on how you installed it. If installed via nvm, simply delete the `~/.nvm` directory and remove the relevant lines from your shell configuration file. If installed via the official installer, besides removing it from the Applications, you may need to manually delete related node files in `/usr/local/lib` and `/usr/local/include`. For installations via Homebrew, run `brew uninstall node`. For more detailed system-level cleanup steps, you can refer to our general guide on [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation).

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
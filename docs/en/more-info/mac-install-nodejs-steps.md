---
title: "Steps to Install Node.js on macOS"
description: "Node.js is an indispensable JavaScript runtime environment in modern web development, essential for front-end engineerin"
lastUpdated: 1773230713636
---

# Steps to Install NodeJS on MAC

## Node.js Installation Guide on macOS

Node.js is an indispensable JavaScript runtime environment in modern web development, essential for front-end engineering, back-end API development, and build toolchains. There are several reliable methods to install Node.js on macOS, each suitable for different scenarios.

### Recommended Installation Method: Using a Node Version Manager

For most developers, we strongly recommend using a Node version manager for installation. This method allows you to easily switch between different Node.js versions, making it ideal for development environments that require maintaining multiple projects simultaneously.

**nvm (Node Version Manager) is currently the most popular choice**:

1. **Install Homebrew** (if not already installed):
   Execute the following command in the terminal:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install nvm via Homebrew**:
   ```bash
   brew install nvm
   ```

3. **Configure the nvm environment**:
   After installation, add the nvm initialization script to your shell configuration file (e.g., `~/.zshrc` or `~/.bash_profile`) as prompted by the terminal.

4. **Install Node.js using nvm**:
   ```bash
   nvm install --lts  # Install the latest LTS (Long-Term Support) version
   nvm use --lts      # Use the LTS version
   ```

### Direct Download of Installer Package

If you prefer a graphical interface, you can directly download the installer package from the Node.js official website:

1. Visit the [Node.js official website](https://nodejs.org/)
2. Click the green "LTS" download button (recommended for most users)
3. After downloading, double-click the `.pkg` file and follow the installation wizard to complete the installation
4. After installation, open the terminal to verify:
   ```bash
   node --version
   npm --version
   ```

### Installation via Package Manager

If you are already familiar with macOS package managers, you can also choose the following method:

**Install Node.js directly using Homebrew**:
```bash
brew install node
```

This method is straightforward but less flexible than nvm, as it does not allow easy switching between multiple Node.js versions.

### Post-Installation Configuration and Verification

Regardless of the installation method chosen, the following verification and configuration should be performed after installation:

1. **Verify the installation**:
   ```bash
   node -v  # Display Node.js version
   npm -v   # Display npm version
   ```

2. **Configure the npm global installation path** (to avoid using sudo):
   ```bash
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   ```

3. **Add the npm global path to the environment variables**:
   Add the following to `~/.zshrc` or `~/.bash_profile`:
   ```bash
   export PATH=~/.npm-global/bin:$PATH
   ```

4. **Update npm to the latest version**:
   ```bash
   npm install -g npm@latest
   ```

### Choosing the Right Node.js Version

- **LTS Version**: Suitable for production environments and most projects, released every 12 months with 18 months of support
- **Current Version**: Includes the latest features, suitable for experimentation and testing, released every 6 months

For new projects, it is recommended to start with the latest LTS version. If you need to learn about other software installation methods on macOS, you can refer to our previously introduced article on [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation), which includes more tips for macOS environment configuration.

## Common Issues

### What to Do If Commands Are Not Recognized After Installing Node.js?
This is usually due to incorrect environment variable configuration. First, confirm whether Node.js was successfully installed, then check if your shell configuration file (e.g., `~/.zshrc` or `~/.bash_profile`) has correctly set the PATH. If you are using nvm, ensure that the initialization script has been added to the configuration file as prompted. Restart the terminal or execute `source ~/.zshrc` (or the corresponding configuration file) to apply the changes.

### How to Completely Uninstall Node.js and Reinstall?
If you installed using nvm, simply run `nvm uninstall <version>` to remove a specific version. If you installed using the .pkg installer, you need to manually delete related files: 1) Delete the node_modules directory in `/usr/local/lib`; 2) Delete the node and node directories in `/usr/local/lib`; 3) Delete executables like node, npm, and npx in `/usr/local/bin`; 4) Delete man pages in `/usr/local/share`. It is recommended to use nvm for management to avoid complex uninstallation processes.

### Which Node.js Version Manager Should I Choose?
nvm is currently the most popular and actively maintained Node version manager, especially suitable for developers who need to handle multiple projects simultaneously. If you only need a single Node.js version and prefer simplicity, you can install it directly using Homebrew. For enterprise environments or scenarios requiring finer control, consider alternatives like nvs or fnm, but nvm has the most comprehensive community support and documentation.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
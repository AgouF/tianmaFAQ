---
title: "Steps to Install Node.js on macOS"
description: "Installing Node.js on macOS is the first step for web development, server-side programming, or using modern JavaScript t"
lastUpdated: 1773310610590
---

# Steps to Install NodeJS on MAC

## Node.js Installation Guide on macOS

Installing Node.js on macOS is the first step for web development, server-side programming, or using modern JavaScript toolchains. Node.js is a JavaScript runtime built on Chrome's V8 engine, allowing developers to write backend code with JavaScript. macOS users have multiple installation methods, each with its own characteristics and suitable scenarios.

### Recommended Installation Method: Using Node Version Manager (nvm)

For most developers, we recommend using **nvm** (Node Version Manager) to install and manage Node.js. The main advantage of this method is the ability to easily switch between multiple Node.js versions, which is crucial for developers maintaining different projects that may depend on different Node.js versions.

**Steps to install nvm:**
1. Open the Terminal application.
2. Use the following command to install nvm:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```
3. After installation, close and reopen the terminal, or run:
   ```bash
   source ~/.zshrc  # If you use zsh (default shell for macOS Catalina and later)
   # Or
   source ~/.bash_profile  # If you use bash
   ```
4. Verify that nvm is installed successfully:
   ```bash
   nvm --version
   ```

**Using nvm to install Node.js:**
1. Install the latest Long-Term Support (LTS) version:
   ```bash
   nvm install --lts
   ```
2. Or install a specific version:
   ```bash
   nvm install 18.0.0  # Install version 18.0.0
   ```
3. Set the default version:
   ```bash
   nvm alias default 18.0.0
   ```

### Other Installation Methods

**1. Official Installer**
Downloading the macOS installer from the official Node.js website is the most straightforward method:
- Visit [nodejs.org](https://nodejs.org/)
- Download the macOS installer (.pkg file)
- Double-click the installer and follow the wizard to complete the installation

This method is simple and quick, suitable for users unfamiliar with the command line, but lacks multi-version management capabilities.

**2. Using the Homebrew Package Manager**
If you already have Homebrew (a popular package manager for macOS) installed, you can install Node.js with the following command:
```bash
brew install node
```

Homebrew automatically handles dependencies and keeps Node.js updated but also does not support version switching.

### Post-Installation Verification

Regardless of the installation method chosen, verify the installation after completion:

1. Check the Node.js version:
   ```bash
   node --version
   ```
   This will display the installed Node.js version number.

2. Check the npm (Node.js package manager) version:
   ```bash
   npm --version
   ```
   npm is typically installed along with Node.js.

3. Run a simple test:
   ```bash
   node -e "console.log('Node.js installation successful!')"
   ```
   If you see the output "Node.js installation successful!", everything is working correctly.

### Environment Configuration Recommendations

After installing Node.js, it is recommended to perform the following configurations:

1. **Set npm registry mirror** (for users in China):
   ```bash
   npm config set registry https://registry.npmmirror.com
   ```
   This can significantly improve package download speeds.

2. **Update npm to the latest version**:
   ```bash
   npm install -g npm@latest
   ```

3. **Install commonly used global tools**:
   ```bash
   npm install -g yarn  # Alternative package manager to npm
   npm install -g nodemon  # Automatically restart Node.js applications during development
   ```

For more detailed basics on macOS software installation, you can refer to our previous article: [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation), which introduces general installation methods for various software on macOS.

## Common Issues

### I have installed Node.js, but the terminal says "command not found." What should I do?
This is usually because the system PATH environment variable is not configured correctly. Solutions:
1. Confirm that Node.js is indeed installed successfully.
2. Check if Node.js's installation path has been added to PATH.
3. If installed via nvm, ensure you have restarted the terminal or run the corresponding source command.
4. Try running `which node` to locate Node.js's installation path.

### How do I uninstall Node.js on macOS?
The uninstallation method depends on how it was installed:
- If installed via nvm: `nvm uninstall <version number>`
- If installed via the official installer: manually delete related files.
- If installed via Homebrew: `brew uninstall node`

It is recommended to first determine the installation method and then choose the corresponding uninstallation method.

### Which Node.js version should I install?
For most users, we recommend:
1. **Production environment**: Choose the latest Long-Term Support (LTS) version, as it is more stable and has long-term maintenance.
2. **Learning/experimentation**: You can choose the latest version to experience the newest features.
3. **Enterprise projects**: Choose a specific version based on project requirements.

Using nvm allows you to easily switch between different versions to meet the needs of various projects.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
---
title: "Steps to Install Node.js on macOS"
description: "Installing Node.js on macOS is the first step for web development, server-side programming, or using modern JavaScript t"
lastUpdated: 1773302713441
---

# Steps to Install NodeJS on MAC

## Node.js Installation Guide on macOS

Installing Node.js on macOS is the first step for web development, server-side programming, or using modern JavaScript toolchains. Node.js is a JavaScript runtime environment built on Chrome's V8 engine, allowing developers to run JavaScript code outside the browser. This article details several reliable methods to install Node.js on macOS, helping you choose the one that best suits your needs.

### Method 1: Using the Official Installer (Simplest)

This is the most suitable installation method for beginners, downloading the macOS installer directly from the Node.js official website.

1.  Visit the [Node.js official website](https://nodejs.org/)
2.  You will see two version options:
    *   **LTS Version** (Long-Term Support): Recommended for most users, high stability, suitable for production environments.
    *   **Current Version** (Latest Features): Includes the newest features, suitable for developers wanting to experiment.
3.  Click the macOS installer (.pkg file) to download.
4.  After downloading, double-click the installer file and follow the installation wizard prompts to complete the setup.
5.  After installation, open Terminal to verify if the installation was successful:
    ```bash
    node --version
    npm --version
    ```
    If the version numbers are displayed correctly, the installation was successful.

### Method 2: Using Homebrew Installation (Recommended for Developers)

Homebrew is a popular package manager for macOS, used to install and manage software via the command line.

1.  First, ensure Homebrew is installed. If not, run this in Terminal:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

2.  Use Homebrew to install Node.js:
    ```bash
    brew install node
    ```

3.  After installation, similarly use `node --version` and `npm --version` to verify.

Advantages of using Homebrew:
*   Easy subsequent updates: `brew upgrade node`
*   Easy management of multiple versions
*   Better integration with the macOS system

### Method 3: Using nvm (Node Version Manager)

If you need to use different versions of Node.js for different projects, nvm is the best choice.

1.  Install nvm by running in Terminal:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```
    Or use Homebrew: `brew install nvm`

2.  Close and reopen Terminal, or run `source ~/.zshrc` (or `~/.bash_profile`)

3.  Install a specific version of Node.js:
    ```bash
    nvm install 18  # Install the latest version of Node.js 18
    nvm install 16  # Install the latest version of Node.js 16
    ```

4.  Switch the Node.js version in use:
    ```bash
    nvm use 18
    ```

5.  Set the default version:
    ```bash
    nvm alias default 18
    ```

### Post-Installation Configuration Suggestions

1.  **Configure npm global installation path** (avoid using sudo):
    ```bash
    mkdir ~/.npm-global
    npm config set prefix '~/.npm-global'
    ```
    Then add `~/.npm-global/bin` to your PATH environment variable.

2.  **Update npm to the latest version**:
    ```bash
    npm install -g npm@latest
    ```

3.  **Install commonly used global tools**:
    ```bash
    npm install -g yarn nodemon typescript
    ```

### Verifying Installation and Basic Usage

After installation, you can create a simple test file to verify if Node.js is working correctly:

1.  Create a `test.js` file:
    ```javascript
    console.log('Node.js installation successful!');
    console.log('Current Node.js version:', process.version);
    ```

2.  Run in Terminal:
    ```bash
    node test.js
    ```

3.  You should see output information confirming Node.js is running normally.

## Common Issues

### What to do if Terminal shows "command not found: node" after installation?
This is usually because the terminal session hasn't updated the PATH environment variable. Solutions:
1.  Close the current terminal window and open a new one.
2.  If installed using nvm, ensure you have run `nvm use [version]`.
3.  Check if Node.js was indeed installed successfully; you can try reinstalling.

### How to completely uninstall Node.js and reinstall?
Steps to completely uninstall Node.js:
1.  If installed using the installer, you can download the official uninstall script.
2.  If installed using Homebrew: `brew uninstall node`
3.  If installed using nvm: `nvm uninstall [version]`
4.  Manually delete related files and directories:
    ```bash
    sudo rm -rf /usr/local/lib/node_modules
    sudo rm -rf /usr/local/include/node
    sudo rm -rf ~/.npm
    sudo rm -rf ~/.nvm
    ```

### Which Node.js version should I choose?
For most users:
*   **Production Environment**: Choose the latest LTS version (even version numbers, e.g., 18.x, 20.x)
*   **Learning or Experimentation**: You can choose the Current version to experience the latest features.
*   **Enterprise Projects**: Choose a specific version based on project requirements.

If you need more detailed basics on macOS software installation, you can refer to our previous article: [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation), which introduces various software installation methods and best practices on the macOS system.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
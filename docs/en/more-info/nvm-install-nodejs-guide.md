---
title: "Guide to Installing NodeJS with nvm"
description: "nvm (Node Version Manager) is a tool for managing multiple Node.js versions. For developers, projects may depend on diff"
lastUpdated: 1773273547543
---

# nvm Installation Guide for NodeJS

## What is nvm?

nvm (Node Version Manager) is a tool for managing multiple Node.js versions. For developers, projects may depend on different versions of Node.js. Manually installing and switching versions is not only cumbersome but also prone to errors. nvm perfectly solves this problem by allowing you to install, switch, and uninstall different Node.js versions on the same machine, with simple and efficient operations.

The advantages of using nvm are very clear: you can easily specify the required Node.js version for different projects, ensuring consistency between the development and production environments, and avoiding compatibility issues caused by version differences. Whether you're learning new features or maintaining legacy projects, nvm is an essential tool for Node.js developers.

## How to Install nvm?

Before installing nvm, ensure your system has the necessary build tools (such as Git and a C++ compiler) installed. Below are the installation methods for different operating systems.

**For macOS and Linux users:**
It is recommended to use the official installation script. Open the terminal and execute the following command:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
Or use wget:
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
After installation, restart the terminal or run `source ~/.bashrc` (or `~/.zshrc`, `~/.profile`, depending on your shell) to activate nvm.

**For Windows users:**
Since the original nvm does not support Windows, you can use its derivative version, `nvm-windows`. Visit its GitHub releases page, download the latest installer (.exe file), and follow the wizard steps to complete the installation. After installation, you can use nvm commands in Command Prompt (CMD) or PowerShell.

After installation, you can verify if it was successful by running `nvm --version`.

## Using nvm to Manage Node.js Versions

Once nvm is installed, you can start managing Node.js. Below are some of the most commonly used commands.

**1. Install Node.js Versions**
To install the latest Long-Term Support (LTS) version, run:
```bash
nvm install --lts
```
To install a specific version (e.g., 18.20.3):
```bash
nvm install 18.20.3
```
To install the latest release version:
```bash
nvm install node
```

**2. Switch and Use Node.js Versions**
List all installed versions:
```bash
nvm ls
```
Switch to an installed version (e.g., 18.20.3):
```bash
nvm use 18.20.3
```
Set a version (e.g., 18.20.3) as the system default:
```bash
nvm alias default 18.20.3
```
This ensures that every new terminal session automatically uses this version.

**3. Other Useful Commands**
Check the currently used Node.js and npm versions:
```bash
node -v
npm -v
```
Uninstall a Node.js version that is no longer needed:
```bash
nvm uninstall 16.14.0
```

## Best Practices and Troubleshooting

For a smoother experience with nvm, here are some suggestions:
*   **Project-Level Version Control**: Create an `.nvmrc` file in the project root directory, containing only the version number (e.g., `18.20.3`). When entering the directory, simply run `nvm use`, and nvm will automatically read the file and switch to the specified version.
*   **Mirror Acceleration**: If you are in mainland China, installing Node.js may be slow. You can set up the Taobao mirror to speed up downloads:
    ```bash
    export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
    ```
    Add this command to your shell configuration file (e.g., `~/.zshrc`).
*   **Common Issues**: If you encounter the `nvm: command not found` error, it is usually because the shell configuration file was not loaded correctly. Check if you have correctly added nvm's initialization script to the `~/.bashrc`, `~/.zshrc`, or `~/.profile` file, and execute the `source` command to reload it.

For macOS users, if you are more interested in installing Node.js via a package manager (such as Homebrew), you can refer to this detailed [MAC Installation Guide](/catalog-2/directory-nesting-333/mac-installation) article, which compares the pros and cons of different methods.

## Frequently Asked Questions

### I already installed Node.js using another method. Can I still install nvm?
Absolutely. It is recommended that you first uninstall the globally installed Node.js from other sources (such as the official installer or system package manager) to avoid path conflicts. Then, follow the steps above to install nvm and use it to install the Node.js versions you need. This ensures all versions are managed uniformly by nvm.

### Why do npm packages need to be reinstalled after installing Node.js with nvm?
nvm isolates each Node.js version and its globally installed packages in separate directories. When you switch Node.js versions, globally installed packages from the previous version (installed via `npm install -g`) are not visible in the new version's environment. This is by design to ensure a clean environment. You will need to reinstall the required global tools in the new version. Local project dependencies (`node_modules`) are not affected.

### Are the commands for nvm-windows and the macOS/Linux version of nvm exactly the same?
The core functions (such as `install`, `use`, `ls`, `uninstall`) are largely consistent. However, due to system differences, `nvm-windows` may have slight variations in implementation and some commands. For example, on Windows, the command to set the default version is `nvm use 18.20.3` followed by `nvm on`, while on Unix-like systems, it is `nvm alias default 18.20.3`. It is recommended to refer to the respective official documentation for the most accurate information.

<RelatedCards :items='[{"title":"MAC Installation Guide","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
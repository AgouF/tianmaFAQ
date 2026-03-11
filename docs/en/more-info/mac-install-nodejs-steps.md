---
title: "Steps to Install Node.js on macOS"
description: "Node.js, as a modern JavaScript runtime environment, has become a core component of front-end development, back-end serv"
lastUpdated: 1773216146442
---

# Steps to Install NodeJS on MAC

## Node.js Installation Guide on macOS

Node.js, as a modern JavaScript runtime environment, has become a core component of front-end development, back-end services, and toolchain construction. There are multiple methods to install Node.js on macOS, each with its own characteristics and suitable scenarios.

### Preparations Before Installation

Before starting the installation, it is recommended to check whether your macOS system already has Node.js installed. Open the Terminal application (found in "Applications" > "Utilities") and enter the following command:

```bash
node --version
```

If the system returns a version number (e.g., v18.16.0), it means Node.js is already installed. If you need to update or install a different version, you can proceed with the following steps.

Also, ensure your macOS system is updated to a relatively recent version, which helps avoid compatibility issues. You can check for system updates in "System Preferences" > "Software Update."

### Recommended Installation Methods

**Installation via Official Installer**
This is the simplest and most direct method, suitable for most users:
1. Visit the official Node.js website (nodejs.org)
2. Download the macOS installer (it is recommended to choose the LTS version for long-term support)
3. Double-click the downloaded .pkg file and follow the installation wizard to complete the installation
4. After installation, reopen the Terminal to verify the installation: `node --version` and `npm --version`

**Installation Using Homebrew**
Homebrew is a popular package manager on macOS, suitable for developers:
1. If you haven't installed Homebrew yet, run the following in the Terminal: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
2. Install Node.js: `brew install node`
3. Verify the installation: `node --version`

**Using Node Version Manager (nvm)**
If you need to use different Node.js versions for different projects, nvm is the best choice:
1. Install nvm: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`
2. Restart the Terminal or run: `source ~/.zshrc` (or `~/.bash_profile`, depending on your shell)
3. Install a specific Node version: `nvm install 18` (installs the latest version of v18)
4. Use a specific version: `nvm use 18`

### Post-Installation Configuration and Verification

After installation, it is recommended to perform the following configurations:

1. **Configure npm Mirror Source** (recommended for users in China):
   ```bash
   npm config set registry https://registry.npmmirror.com
   ```

2. **Update npm to the Latest Version**:
   ```bash
   npm install -g npm@latest
   ```

3. **Create a Test Project to Verify Installation**:
   ```bash
   mkdir test-app && cd test-app
   npm init -y
   echo "console.log('Node.js installation successful!')" > index.js
   node index.js
   ```

4. **Install Commonly Used Global Tools**:
   ```bash
   npm install -g yarn nodemon typescript
   ```

### Troubleshooting

If you encounter installation issues, you can try the following solutions:

- **Permission Issues**: Add `sudo` before the command, or use `npm config set prefix ~/.npm-global` to change the npm global installation path
- **Command Not Found**: Ensure the Node.js installation path has been added to the PATH environment variable
- **Version Conflicts**: If Node.js was previously installed via other methods, it is recommended to completely uninstall the old version first

For more detailed macOS software installation tips, you can refer to our [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation) guide, which includes more information on system configuration and environment management.

## Frequently Asked Questions

### Which Node.js version should I choose?
For most users, it is recommended to install the LTS (Long-Term Support) version, as it is more stable and receives long-term maintenance. For developers who need the latest features, the Current version can be chosen. Using nvm allows easy switching between different versions.

### What should I do if the npm command is not available after installation?
This is usually due to environment variable configuration issues. First, check if Node.js installation was successful: `node --version`. If Node.js works but npm does not, try reinstalling Node.js or manually add the npm path to the environment variables.

### How do I completely uninstall Node.js and reinstall it?
Completely uninstalling Node.js requires deleting files from multiple locations:
1. Delete the Node.js program: `sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}`
2. Delete related files in the user directory: `rm -rf ~/.npm ~/.node-gyp ~/.nvm` (if using nvm)
3. Restart the Terminal and reinstall

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
---
title: "Steps to Install Node.js on macOS"
description: "Node.js is a JavaScript runtime environment built on Chrome's V8 engine, enabling developers to use JavaScript for serve"
lastUpdated: 1773222980970
---

# Steps to Install NodeJS on MAC

## How to Install Node.js on Your Mac

Node.js is a JavaScript runtime environment built on Chrome's V8 engine, enabling developers to use JavaScript for server-side and command-line tools. Installing Node.js on a Mac is an essential first step for front-end development, full-stack engineering, or building automation scripts. The installation process itself is not complicated, but choosing the right method can make subsequent version management and project dependency handling much smoother.

### Recommended Installation Method: Using a Version Manager

While you can download the installer directly from the Node.js official website, for developers, we strongly recommend using a **Node version manager**. This is because different projects may require different versions of Node.js, and manually switching versions is cumbersome and error-prone.

The two most popular tools currently are **nvm** and **fnm**. We will use `nvm` as an example due to its large community and extensive documentation.

**Installation via Homebrew and nvm (Recommended Steps):**

1.  **Install Homebrew**: If you haven't installed this powerful package manager for macOS yet, open the Terminal and paste the following command:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Follow the prompts to complete the installation.

2.  **Install nvm using Homebrew**:
    ```bash
    brew install nvm
    ```
    After installation, follow the prompts shown in the terminal to add nvm's initialization script to your shell configuration file (e.g., `~/.zshrc` or `~/.bash_profile`). Typically, you need to add lines similar to these:
    ```bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
    ```
    After adding them, execute `source ~/.zshrc` to apply the configuration.

3.  **Install Node.js using nvm**:
    ```bash
    nvm install --lts
    ```
    This command installs the latest Long-Term Support (LTS) version, which is the most stable and recommended for production use. After installation, use `node -v` and `npm -v` to verify the installation was successful.

### Verifying Installation and Basic Usage

Once installed successfully, you can perform some simple operations in the terminal to ensure everything is ready:
- `node -v`: Check the installed Node.js version.
- `npm -v`: Check the version of the npm package manager that comes with Node.js.
- Running the `node` command enters the Node.js interactive environment (REPL), allowing you to directly input and execute JavaScript code.

### Managing Multiple Node.js Versions

This is the biggest advantage of using nvm. You can easily install, switch, and remove different versions.
- `nvm install 18`: Install the latest version of Node.js 18.
- `nvm ls`: List all locally installed versions.
- `nvm use 16`: Switch the Node.js version for the current terminal session to version 16.
- `nvm alias default 18`: Set Node.js 18 as the system default version.

### Configuring npm and Starting a Project

Node.js comes bundled with npm. To improve dependency installation speed and avoid permission issues, it's recommended to perform some initial configuration:
- **Set up Taobao Mirror**: Users in China can set the npm registry to a domestic mirror to speed up downloads.
  ```bash
  npm config set registry https://registry.npmmirror.com/
  ```
- **Initialize a New Project**: Navigate to your project directory and run `npm init -y` to quickly create a `package.json` file for managing project dependencies.

## Common Issues

### After installing nvm, entering the `nvm` command in the terminal shows "command not found"?
This is usually because the shell configuration is not loaded correctly. Make sure you have added nvm's initialization script lines to the correct configuration file as prompted after installation (for newer macOS versions, this is usually `~/.zshrc`). After adding them, be sure to execute `source ~/.zshrc` or reopen the terminal window.

### Which version of Node.js should I install?
For most new users and projects, it is recommended to install the **LTS version**. LTS stands for "Long-Term Support"; it is more stable, has a longer maintenance cycle, and is suitable for production environments. You can use `nvm install --lts` to install it. For users who want to try the latest features, you can install the "Current" version, but note that it may be less stable.

### Are there other installation methods besides nvm?
Yes. Besides using a version manager, you can also:
1.  **Download the installer from the official website**: Visit the Node.js official website, download the `.pkg` file, and install it graphically. This method is the simplest but not conducive to multi-version management.
2.  **Install directly using Homebrew**: Run `brew install node`. This method is also simple, but Homebrew typically maintains only one major version, making version switching less flexible than nvm.
You can refer to our more comprehensive guide on [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation) to understand general installation approaches for other software on Mac.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
---
title: "MAC Installation Python Tutorial"
description: "For Mac users, installing Python is the first step to start programming, data analysis, or automation tasks. The good ne"
lastUpdated: 1773216122881
---

# MAC Python Installation Tutorial

## Complete Guide to Installing Python on Mac

For Mac users, installing Python is the first step to start programming, data analysis, or automation tasks. The good news is that macOS comes with Python pre-installed, but it's usually an older version (like Python 2.7 or an older Python 3 version). To use the latest features and libraries, we typically need to install a newer version ourselves. This tutorial will detail several mainstream and reliable installation methods.

### Method 1: Using the Official Installer (Most Direct)

This is the most suitable installation method for beginners.

1.  **Visit the Official Website**: Open your browser and go to the [Python official website](https://www.python.org).
2.  **Download the Installer**: Click the "Downloads" menu on the homepage. The system usually automatically recommends the macOS version installer. Alternatively, go to the "Downloads" page, manually select "macOS", and download the latest stable version (e.g., Python 3.12.x) "macOS 64-bit universal2 installer" package.
3.  **Run the Installer**: After downloading, double-click the `.pkg` file and follow the graphical installation wizard step by step. During installation, be sure to check the option "Add Python 3.x to PATH" or a similar option. This allows you to use the `python3` command directly in the terminal.
4.  **Verify Installation**: After installation, open the "Terminal" application, type `python3 --version`, and press Enter. If it displays a version number like "Python 3.12.1", the installation was successful.

### Method 2: Using Homebrew (Recommended for Developers)

Homebrew is a powerful package manager for macOS. Installing and managing Python through it is very convenient and facilitates future upgrades.

1.  **Install Homebrew**: If you haven't installed Homebrew yet, open the terminal, paste, and run the following command:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Follow the on-screen prompts to complete the installation.
2.  **Install Python via Homebrew**: In the terminal, run the following command:
    ```bash
    brew install python
    ```
    This command will install the latest Python 3 version.
3.  **Verify Installation**: Similarly, type `python3 --version` in the terminal to verify. Python installed via Homebrew typically has its executable located in the `/usr/local/bin` directory, and the environment variables are already configured.

**Advantage**: Using Homebrew makes it easy to manage multiple Python versions (requires `pyenv`), and updating Python only requires running `brew upgrade python`.

### Important Post-Installation Configuration

1.  **Understanding the `python` vs. `python3` Commands**: In the terminal, the system's built-in older Python is usually invoked by the `python` command. Our newly installed Python 3 version needs to be invoked using the `python3` command. This is to avoid conflicts with the system's built-in Python.
2.  **Using pip for Package Management**: Python's package management tool `pip` is installed along with the installer or Homebrew. When installing third-party libraries for Python 3, use the `pip3` command, e.g., `pip3 install requests`.
3.  **Setting Up a Virtual Environment**: It is highly recommended to create an independent virtual environment for each project to isolate project dependencies. You can use the built-in `venv` module:
    ```bash
    python3 -m venv my_project_env  # Create a virtual environment named my_project_env
    source my_project_env/bin/activate # Activate the virtual environment (the terminal prompt will change after activation)
    ```

### Managing Multiple Python Versions

If you need to use multiple Python versions simultaneously (e.g., to test compatibility for different projects), it is not recommended to install multiple installers directly, as this can easily cause confusion. The best practice is to use the version management tool **`pyenv`**. It allows you to easily install, switch, and globally set multiple Python versions on your system. You can install it via Homebrew: `brew install pyenv`, and then install specific versions with commands like `pyenv install 3.10.0`.

## Common Issues

### ### After installation, typing `python` in the terminal still shows the old version. What should I do?
This is normal. To protect its internal functionality, macOS retains the old Python 2.7, and the `python` command points to it by default. Your newly installed Python 3 should be invoked using the `python3` command. Always use `python3` and `pip3`. Do not attempt to delete the system's built-in Python, as it may affect system stability.

### ### How to uninstall Python installed via the official installer?
Python installed via the official `.pkg` installer has its files scattered across system directories, making manual deletion troublesome. A relatively clean method is:
1.  Find the "Python 3.x" directory created during installation (usually in the "Applications" folder) and drag it to the Trash.
2.  Delete related environment variables (if you manually modified the `~/.zshrc` or `~/.bash_profile` files).
For a more thorough uninstallation, refer to the official documentation. In contrast, if you installed via Homebrew, uninstalling is very simple: `brew uninstall python`.

### ### What to do if encountering permission errors or "command not found" during installation?
This is usually because the environment variable (PATH) is not configured correctly.
*   For the official installer: Ensure you checked the "Add to PATH" option during installation. If not, you can manually add a line to the end of the `~/.zshrc` file (if using newer macOS) or `~/.bash_profile` file in your user home directory: `export PATH="/Library/Frameworks/Python.framework/Versions/3.x/bin:$PATH"` (replace `3.x` with your specific version number), then restart the terminal or run `source ~/.zshrc`.
*   For Homebrew: After installation, follow the configuration command prompted by Homebrew at the end (usually about adding the brew path to PATH), or manually add `eval "$(/opt/homebrew/bin/brew shellenv)"` to the `~/.zshrc` file.

If you are also interested in installing other development tools on Mac, you can refer to our topic article on **[MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation)** for more systematic software installation guides.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
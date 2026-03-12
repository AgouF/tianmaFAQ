---
title: "MAC Installation Python Tutorial"
description: "Installing Python on a Mac is the first step to start programming, data analysis, automation scripting, or web developme"
lastUpdated: 1773316928119
---

# MAC Python Installation Tutorial

## Why Install Python on Mac?

Installing Python on a Mac is the first step to start programming, data analysis, automation scripting, or web development. Although macOS comes with a pre-installed Python 2.7 version (which may have been removed in newer macOS versions), this version is outdated and no longer officially maintained. To use the latest language features, security patches, and a rich ecosystem of third-party libraries (such as NumPy, Pandas, Django, etc.), installing an independent and updated Python version is necessary and recommended. This tutorial will guide you through several mainstream and reliable installation methods.

## Recommended Installation Methods

For most users, we recommend using **Homebrew** or installing from the **official Python website**. Both methods provide clear management.

### Method 1: Install Using Homebrew (Recommended)

Homebrew is a powerful package manager for macOS, allowing you to easily install, update, and manage software.

1.  **Install Homebrew (if not already installed)**:
    Open the "Terminal" application, paste the following command, and press Enter:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Follow the on-screen prompts to complete the installation.

2.  **Install Python via Homebrew**:
    In the terminal, run the following command:
    ```bash
    brew install python
    ```
    This command will install the latest stable version of Python 3 (along with the `pip` package manager).

3.  **Verify Installation**:
    After installation, restart the terminal or open a new terminal window and run:
    ```bash
    python3 --version
    ```
    or
    ```bash
    pip3 --version
    ```
    If the corresponding version number is displayed (e.g., `Python 3.11.2`), the installation was successful.

**Advantages**: Homebrew manages dependencies well and facilitates future upgrades (using `brew upgrade python`).

### Method 2: Download the Installer from the Python Official Website

This is the most straightforward method, suitable for all users.

1.  **Visit the Download Page**:
    Open your browser and go to the [Python Official Website](https://www.python.org/downloads/).

2.  **Download the Installer**:
    The website usually automatically detects your operating system and recommends the macOS installer. Click to download the "macOS 64-bit installer" (the filename is typically something like `python-3.x.x-macosx10.9.pkg`).

3.  **Run the Installation Wizard**:
    After downloading, double-click the `.pkg` file and follow the steps in the graphical installation wizard. **Important Note**: During installation, be sure to check the "`Install Certificates`" and "`Add Python to PATH`" options. This will save you the trouble of manually configuring environment variables later.

4.  **Verify Installation**:
    After installation, open the terminal and enter:
    ```bash
    python3 --version
    ```
    Check the version number.

### Method 3: Using Pyenv (For Advanced Users/Multi-Version Management)

If you need to manage multiple Python versions on the same computer (e.g., using Python 3.8, 3.10, 3.11 for different projects), Pyenv is the perfect tool. You can refer to our detailed guide on installation methods for different systems, which includes general logic for installation using package managers. For example, the approach mentioned in **[MAC Installation Method](/catalog-2/directory-nesting-333/mac-installation)** also applies to installing Pyenv via Homebrew: `brew install pyenv`, and then installing specific Python versions through Pyenv.

## Important Steps After Installation

1.  **Upgrade pip**: After installation, it's recommended to immediately upgrade pip to the latest version.
    ```bash
    pip3 install --upgrade pip
    ```
2.  **Configure a Virtual Environment**: It is highly recommended to create an independent virtual environment for each project to avoid package dependency conflicts. You can use the built-in `venv` module:
    ```bash
    python3 -m venv my_project_env
    source my_project_env/bin/activate
    ```

## Common Issues

### Does the terminal still open the old version when entering the `python` command?
This is because the system's built-in Python 2 might still be in the path. Entering `python` in the terminal may still default to Python 2. Our installed Python 3 needs to be invoked using the `python3` command. You can change this behavior by creating an alias or adjusting environment variables, but for clarity and compatibility, consistently using `python3` and `pip3` in tutorials and commands is better practice.

### "Permission denied" or "command not found" error during installation?
This is usually due to not using administrator privileges or environment variables not being set correctly.
-   For Homebrew, ensure you follow the prompts after successful installation to add the required paths (e.g., `/opt/homebrew/bin`) to your shell configuration file (e.g., `~/.zshrc`).
-   For the official installer, make sure you checked the "Add Python to PATH" option. If the issue persists, you may need to manually add the installation path (typically `/usr/local/bin/` or `/Library/Frameworks/Python.framework/Versions/3.x/bin`) to your `~/.zshrc` file.

### How to uninstall Python installed via Homebrew?
If you need to uninstall, you can use Homebrew's command:
```bash
brew uninstall python
brew cleanup
```
This will remove Python and related dependencies. For Python installed via the official installer, go to the "Applications" folder, find the "Python 3.x" directory, and run the "Install Certificates" program inside, which usually contains an uninstall option.

<RelatedCards :items='[{"title":"MAC Installation Method","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
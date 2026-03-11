---
title: "MAC Installation Python Tutorial"
description: "Installing Python on a Mac is the first step for many developers and data analysts. Although macOS comes with Python 2.7"
lastUpdated: 1773250970686
---

# Python Installation Guide for Mac

## Why Install Python on Mac?

Installing Python on a Mac is the first step for many developers and data analysts. Although macOS comes with Python 2.7 pre-installed, this version reached its end of life in 2020. To access the latest language features, libraries, and security updates, installing the latest version of Python 3 is essential. Whether for web development, machine learning, automation scripts, or academic research, an independent and manageable Python environment is fundamental for productive work.

## How to Choose a Python Version?

Currently, Python 3 is the absolute mainstream, with all new projects and libraries developed for it. It's recommended to directly install the latest stable version of Python 3 (e.g., 3.11 or 3.12). You can visit the [official Python website](https://www.python.org/downloads/) to check the latest version. For beginners, the latest stable version is sufficient; if working on a specific project, choose the version required by that project.

## Detailed Installation Steps

### Method 1: Using the Official Installer (Recommended for Beginners)
This is the most straightforward method.
1.  Visit the [Python download page for macOS](https://www.python.org/downloads/macos/).
2.  Download the .pkg file labeled "macOS 64-bit universal2 installer" (compatible with both Apple Silicon and Intel chips).
3.  Double-click the downloaded .pkg file and follow the graphical installation wizard. **Crucial step**: During installation, make sure to check the "**Add Python to PATH**" option. This ensures you can use the `python3` command directly in the terminal.
4.  After installation, open the "Terminal" application, type `python3 --version`, and press Enter. If a version number is displayed (e.g., `Python 3.11.4`), the installation was successful.

### Method 2: Using the Homebrew Package Manager (Recommended for Developers)
Homebrew is a powerful package manager for macOS, making it easier to manage and update Python.
1.  **First, install Homebrew**: If you haven't installed it yet, run the following command in the terminal:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
2.  **Install Python using Homebrew**: In the terminal, enter the following command:
    ```bash
    brew install python
    ```
    This command installs the latest Python 3 version along with `pip` (the Python package manager).
3.  After installation, verify it using `python3 --version` and `pip3 --version`.

## Important Post-Installation Configuration

### 1. Setting the Correct Aliases
The system's default Python 2 command is `python`, while your newly installed Python 3 command is `python3`. To avoid confusion, you can add aliases to your Shell configuration file in your user home directory (e.g., `~/.zshrc` if you're using macOS Catalina or later):
```bash
alias python=python3
alias pip=pip3
```
After saving the file, execute `source ~/.zshrc` in the terminal. From then on, you can use the `python` and `pip` commands directly.

### 2. Using Virtual Environments
It's highly recommended to create an independent virtual environment for each project to isolate dependencies. Python 3 includes the `venv` module.
```bash
# Navigate to your project directory
cd my_project
# Create a virtual environment
python -m venv venv
# Activate the virtual environment
source venv/bin/activate
# After activation, (venv) will appear before the terminal prompt.
```

## Common Issues

### The "python" command still opens the old version after installation?
This is because the system's default `python` command still points to the pre-installed Python 2.7. Please follow the steps in the "Setting the Correct Aliases" section above, or always use the `python3` command to call the newly installed version.

### How to uninstall Python installed via Homebrew?
If you installed Python using Homebrew, uninstalling is very simple. Run the following command in the terminal:
```bash
brew uninstall python
```
For Python installed via the official .pkg installer, you can go to "System Settings" > "General" > "Storage" > "Applications" to find and delete it. A more thorough cleanup might involve deleting related frameworks and paths, which is a relatively complex operation.

### How to install third-party libraries after installing Python?
Use the `pip` tool. In the terminal, you can use `pip install library_name` to install. For example, to install the famous data analysis library pandas: `pip install pandas`. Ensure you are executing this command in the correct Python environment (or an activated virtual environment).

After completing the Python installation and basic configuration, your Mac becomes a powerful development workstation. It's like equipping your computer with core tools, allowing you to freely explore various development fields. If you encounter other system-level configuration issues during installation, you can also refer to our general guide on **[MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation)** for more help.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
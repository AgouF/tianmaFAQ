---
title: "MAC Installation Python Tutorial"
description: "Installing Python on a Mac is the first step for many developers and data analysts to begin their work. Although macOS c"
lastUpdated: 1773310556021
---

# Tutorial for Installing Python on Mac

## Why Install Python on Mac?

Installing Python on a Mac is the first step for many developers and data analysts to begin their work. Although macOS comes with Python pre-installed, it is usually an older version (like Python 2.7) and is deeply integrated with the system. It is not recommended for direct development use to avoid affecting system stability. Installing an independent, manageable new version of Python allows you to freely use the latest language features, libraries, and tools, such as `pandas` and `numpy` for machine learning, or `Django` and `Flask` for web development.

## Recommended Main Installation Methods

For most users, we recommend installing via **Homebrew** or the official **Python.org installer**. Both methods provide a clean, easily manageable Python environment.

### Method 1: Install Using Homebrew (Recommended)

Homebrew is the most popular package manager on macOS, handling dependencies elegantly.

1.  **Install Homebrew** (if not already installed):
    Open the "Terminal" application and paste the following command:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Follow the prompts to complete the installation.

2.  **Install Python via Homebrew**:
    In the terminal, run:
    ```bash
    brew install python
    ```
    This command installs the latest stable version of Python 3 and automatically configures `pip` (the Python package management tool).

3.  **Verify the Installation**:
    After installation, restart the terminal and run:
    ```bash
    python3 --version
    pip3 --version
    ```
    These two commands should display the version numbers of Python 3 and pip, respectively.

### Method 2: Use the Official Installer

If you prefer a graphical interface installation, this is the most straightforward method.

1.  **Download the Installer**:
    Visit the [Python official website](https://www.python.org/downloads/) and download the latest version installer for macOS (.pkg file).

2.  **Run the Installer**:
    Double-click the downloaded .pkg file and follow the graphical wizard step by step to complete the installation. **A crucial step**: During installation, be sure to check the option "**Add Python 3.x to PATH**". This ensures you can directly call the `python3` command in the terminal.

3.  **Verify the Installation**:
    Open the terminal and enter `python3 --version` to check the version.

## Important Configuration After Installation

Installing the main program is just the first step; proper configuration makes subsequent development smoother.

*   **Distinguish Commands**: In the terminal, the system's built-in old version is called via the `python` command, while the newly installed version must be called using the `python3` command. The same applies to `pip`; the new version's package management tool should use `pip3`.
*   **Use Virtual Environments**: It is highly recommended to create an independent virtual environment for each project to isolate project dependencies. You can use the built-in `venv` module:
    ```bash
    # Navigate to the project directory
    cd your_project_folder
    # Create a virtual environment
    python3 -m venv venv
    # Activate the virtual environment
    source venv/bin/activate
    # After activation, (venv) will appear before the terminal prompt. All packages installed via pip will only take effect within this environment.
    ```

## Common Issues

### After installation, typing `python` still shows the old version. What should I do?
This is normal. The macOS system's built-in Python 2.7 is retained and has higher priority. Your installed Python 3 must be called using the `python3` and `pip3` commands. It is not recommended to forcibly replace the system's default `python` command to avoid issues with the system toolchain. You can simplify operations by setting an alias in the `~/.zshrc` file (if using Zsh shell) or `~/.bash_profile` (if using Bash), for example, by adding a line: `alias python=python3`.

### How to completely uninstall Python installed via Homebrew?
If you need to uninstall, you can use Homebrew's command-line operations, which are cleaner than manual deletion. In the terminal, run:
```bash
brew uninstall python
brew cleanup
```
This will uninstall Python and clean up related files. For Python installed via the official .pkg installer, you can uninstall it like any other Mac application: in "Finder," go to the "Applications" folder, find the "Python 3.x" directory, and drag it to the Trash. For more detailed guidance on Mac software management, you can refer to this article about [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation).

### Encountered a "Permission denied" error during installation?
This is usually because the command requires administrator privileges. Add `sudo` before the command and enter your computer password, for example, `sudo brew install python`. However, use `sudo` with caution, especially when installing packages globally with `pip`, as it may cause permission confusion. The best practice is always to install project-specific packages within a virtual environment.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
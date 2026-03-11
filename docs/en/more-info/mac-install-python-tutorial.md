---
title: "MAC Installation Python Tutorial"
description: "For Mac users, installing Python is a fundamental and important task. Whether for data analysis, web development, automa"
lastUpdated: 1773230680548
---

# MAC Python Installation Tutorial

## Complete Guide to Installing Python on Mac

For Mac users, installing Python is a fundamental and important task. Whether for data analysis, web development, automation scripting, or learning programming, Python is an excellent choice. The good news is that macOS comes with Python pre-installed, but it's usually an older version (like Python 2.7 or an older Python 3 version). To use the latest features and libraries, we typically need to install a newer version ourselves. This tutorial will guide you through several mainstream and recommended methods to safely and efficiently install and manage Python on your Mac.

### Why Install Python Yourself?

The Python that comes with macOS is usually a system component relied upon by some system tools. Directly modifying or upgrading this system version may cause unforeseen issues. Therefore, the best practice is to install a user-level Python environment independent of the system version. This allows you to freely install packages and switch versions without affecting macOS stability.

### Recommended Installation Method: Using Homebrew

Homebrew is the most popular package manager on macOS, greatly simplifying software installation and management. Installing Python via Homebrew is currently the most recommended method.

1.  **Install Homebrew** (if you haven't already):
    Open the "Terminal" application, paste the following command, and press Enter:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Follow the on-screen prompts to complete the installation.

2.  **Install Python via Homebrew**:
    In the terminal, run the following command to install the latest Python 3 version:
    ```bash
    brew install python
    ```
    After installation, Homebrew will usually prompt you to add the Python path to your system's `PATH` environment variable. Be sure to follow the prompts (typically running one or two commands like `echo 'export PATH...' >> ~/.zshrc`, then executing `source ~/.zshrc`).

3.  **Verify Installation**:
    Close and reopen the terminal, or after executing `source ~/.zshrc`, type:
    ```bash
    python3 --version
    ```
    You should see a version number like `Python 3.x.x`, indicating successful installation. Now, you can use the `python3` command to start the Python interpreter and the `pip3` command to install third-party libraries.

### Alternative: Using the Official Installer

If you prefer a graphical interface, you can download the installer directly from the Python official website.

1.  Visit the [Python Official Website](https://www.python.org/downloads/macos/).
2.  Download the latest "macOS 64-bit installer" package.
3.  Open the downloaded `.pkg` file and follow the steps in the graphical installation wizard.
4.  The installer will automatically add Python to your path. After installation, you can also use the `python3` and `pip3` commands in the terminal.

**Note**: When using the official installer, be sure to check the option "Add Python 3.x to PATH" during installation (if provided).

### Managing Multiple Python Versions: Using pyenv

If you need to use different Python versions for different projects, `pyenv` is a perfect tool. It allows you to easily switch between multiple Python versions.

1.  Install `pyenv` using Homebrew:
    ```bash
    brew install pyenv
    ```
2.  Follow the prompts after Homebrew installation to add the `pyenv` initialization script to your shell configuration file (e.g., `~/.zshrc`).
3.  Install the Python versions you need, for example:
    ```bash
    pyenv install 3.9.13
    pyenv install 3.11.4
    ```
4.  Set the global or local default version:
    ```bash
    pyenv global 3.11.4  # Set the global default version
    cd your-project-directory
    pyenv local 3.9.13   # Use a specific version in the current directory
    ```

### Next Steps: Configuring Virtual Environments

After installing Python, it is highly recommended to create independent virtual environments for each project (using the `venv` module or `virtualenv` tool). This isolates project dependencies and avoids package version conflicts. A basic virtual environment workflow is as follows:
```bash
cd my_project
python3 -m venv venv          # Create a virtual environment named 'venv'
source venv/bin/activate      # Activate the virtual environment (Mac/Linux)
# After activation, the terminal prompt usually changes
pip install requests          # Installed packages will only exist in this environment
deactivate                    # Deactivate the virtual environment after work
```

## Common Questions

### I've installed Python, but the `python` command still opens the old version?
This is normal. On Mac, the `python` command usually points to the old version of Python that came with the system (likely 2.7). The new Python 3 version we installed needs to be called using the `python3` command. You can confirm the new version is installed successfully with `python3 --version`. To avoid confusion, always use `python3` and `pip3` in the terminal and scripts.

### After installing Python, how do I install third-party libraries (like numpy, pandas)?
Use the `pip3` command. For example, to install the `numpy` library, simply type in the terminal:
```bash
pip3 install numpy
```
If you want to install a library into a project's virtual environment, activate that virtual environment first, then use the `pip install` command (within the virtual environment, you can omit the `3`).

### Are there other ways to manage software besides Homebrew?
Yes, there are other package management tools on Mac. For example, if you are interested in the Anaconda distribution (focused on data science), you can download its graphical installer. For more general software installation, you can also refer to our featured article on [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation), which introduces various methods and tools for installing and managing applications on macOS.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
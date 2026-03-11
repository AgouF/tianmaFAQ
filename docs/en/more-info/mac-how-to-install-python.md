---
title: "How to Install Python on Mac"
description: "Installing Python on a Mac is the first step to start programming or working on projects like data analysis or web devel"
lastUpdated: 1773269823432
---

# How to Install Python on Mac

## Several Methods to Install Python on Mac

Installing Python on a Mac is the first step to start programming or working on projects like data analysis or web development. Although macOS usually comes with Python pre-installed, the version might be outdated (e.g., Python 2.7), and it's not recommended to directly modify the system's built-in Python to avoid affecting system stability. Therefore, it's recommended to use the following safe and efficient methods to install and manage Python versions.

### Recommended Method: Install via Homebrew

Homebrew is the most popular package manager on macOS, which can easily install, update, and manage software packages, including Python.

1.  **First, install Homebrew (if not already installed)**:
    Open the "Terminal" application, paste the following command, and press Enter:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Follow the on-screen instructions to complete the installation.

2.  **Install Python via Homebrew**:
    Run the following command in the terminal to install the latest stable version of Python 3:
    ```bash
    brew install python
    ```
    After installation, you can verify it by running `python3 --version`. Homebrew will automatically handle path settings, which is usually very convenient.

**Advantages**: Easy to manage, update, and uninstall, and completely isolated from the system Python.

### Official Installer: Download from the Python Website

This is the most straightforward method, suitable for all users, especially beginners.

1.  Visit the [Python official website](https://www.python.org/downloads/).
2.  Download the latest installer for macOS (.pkg file).
3.  Double-click the downloaded .pkg file and follow the steps in the graphical installation wizard.
4.  The installer will usually prompt you to install the "Shell Profile Updater," which helps configure the PATH environment variable. It is recommended to check this option.

**Verify Installation**: After installation, open the terminal and enter `python3 --version` to check the version number. Note that in the terminal, you may need to use the `python3` command to call the newly installed Python 3, while the `python` command may still point to the older system version.

### Advanced Choice: Use Pyenv to Manage Multiple Versions

If you need to use different Python versions for different projects (e.g., one project uses Python 3.8, another uses Python 3.11), then Pyenv is the perfect tool.

1.  **Install Pyenv**:
    The easiest way is to install it via Homebrew:
    ```bash
    brew install pyenv
    ```
2.  **Configure the Shell Environment**:
    Depending on the Shell you use (usually zsh, the default Shell for macOS Catalina and later), add the following configuration to the `~/.zshrc` file:
    ```bash
    export PYENV_ROOT="$HOME/.pyenv"
    [[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
    eval "$(pyenv init -)"
    ```
    Then run `source ~/.zshrc` to apply the configuration.
3.  **Use Pyenv**:
    - View all installable versions: `pyenv install --list`
    - Install a specific version: `pyenv install 3.11.4`
    - Set the global default version: `pyenv global 3.11.4`
    - Use a specific version in a specific directory: `pyenv local 3.8.16`

**Advantages**: Flexible version switching and good project environment isolation.

### Important Steps After Installation

Regardless of the installation method, it is highly recommended to also install and learn to use `pip` (Python's package management tool) and `venv` (the module for creating virtual environments).
- Use `pip3 install <package_name>` to install third-party libraries.
- Use `python3 -m venv my_project_env` to create an independent virtual environment for each project to avoid package version conflicts. Activate the environment using `source my_project_env/bin/activate`.

If you encounter environment variable or path issues during installation, you can refer to our featured article on [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation), which provides more detailed system configuration and troubleshooting guidance.

## Common Questions

### I've installed Python, why does entering `python` in the terminal still show the old version?
This is because the system retains the old Python 2 command for compatibility. On macOS, newly installed Python 3 usually needs to be called via the `python3` command. You can set an alias in your current terminal session with the command `alias python=python3`, or add it to your Shell configuration file (e.g., `~/.zshrc`) to make it permanent. It's more recommended to use `python3` and `pip3` to explicitly specify the version and avoid confusion.

### After installing Python via Homebrew, why doesn't `pip` work?
After installing Python via Homebrew, `pip` is usually installed along with it. Make sure you are using the `pip3` command. If the command is not found, try relinking: `brew link python`. Sometimes, you may need to manually add Python's Scripts directory to the PATH, but Homebrew usually handles this automatically. You can check its location with `which pip3`.

### Which Python version should I install?
For beginners and most new projects, it is recommended to install the **latest stable version** (clearly marked on the Python website download page). It has the latest features and security updates. For projects requiring specific environments (e.g., certain frameworks or libraries only support specific versions), choose according to the project requirements. Using Pyenv allows you to easily switch between different versions to meet such needs.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
---
title: "MAC Installation Python Tutorial"
description: "For Mac users, installing Python is the first step to start a programming journey or engage in tasks like data analysis "
lastUpdated: 1773263156365
---

# MAC Python Installation Tutorial

## Complete Guide to Installing Python on Mac

For Mac users, installing Python is the first step to start a programming journey or engage in tasks like data analysis and web development. The macOS system comes pre-installed with Python 2.7, but that version reached end-of-life in 2020. Therefore, installing the latest version of Python 3 is a safer and more modern choice. This tutorial details several mainstream and reliable installation methods.

### Method 1: Using the Official Installer (Simplest)

This is the most suitable method for beginners.

1.  **Visit the Official Website**: Open your browser and go to the [Python official website](https://www.python.org/downloads/). The site will automatically detect your system and recommend the latest macOS installer.
2.  **Download the Installer**: Click the yellow "Download Python" button to download the `.pkg` installer.
3.  **Run the Installer**: Double-click the downloaded `.pkg` file and follow the prompts in the graphical installation wizard. The installer will automatically add Python to your system path.
4.  **Verify Installation**: After installation, open the "Terminal" application, type the following command, and press Enter:
    ```bash
    python3 --version
    ```
    If a version number like `Python 3.x.x` is displayed, the installation was successful.

**Advantages**: Simple operation, no command-line knowledge required.
**Note**: Python installed this way is located in the `/Library/Frameworks/Python.framework/` directory and does not interfere with the system's built-in Python 2.7.

### Method 2: Installing via Homebrew (Recommended for Developers)

Homebrew is a powerful package manager for macOS, making it easy to manage software versions and dependencies.

1.  **Install Homebrew**: If you don't have Homebrew installed yet, run the following command in the terminal:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
2.  **Install Python via Homebrew**: In the terminal, type:
    ```bash
    brew install python
    ```
    This command installs the latest Python 3 version.
3.  **Verify Installation**: Again, use the `python3 --version` command to check. Python installed via Homebrew is located in the `/usr/local/bin/` directory.

**Advantages**: Facilitates subsequent upgrades and management of multiple Python versions; integrates well with other tools in the Homebrew ecosystem.

### Method 3: Using Pyenv to Manage Multiple Versions (Advanced)

If you need to use different Python versions for different projects (e.g., maintaining an old project using Python 3.8 and a new project using Python 3.11 simultaneously), Pyenv is the perfect tool.

1.  **Install Pyenv**: Using Homebrew is the simplest way:
    ```bash
    brew install pyenv
    ```
2.  **Configure Shell Environment**: Depending on your Shell (usually zsh), add the following configuration to the `~/.zshrc` file:
    ```bash
    export PYENV_ROOT="$HOME/.pyenv"
    [[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
    eval "$(pyenv init -)"
    ```
    Then run `source ~/.zshrc` to apply the configuration.
3.  **Install Specific Python Versions**:
    ```bash
    pyenv install 3.11.4  # Install Python 3.11.4
    pyenv install 3.8.16  # Install Python 3.8.16
    ```
4.  **Switch Global or Local Versions**:
    - Set the global default version: `pyenv global 3.11.4`
    - Set the version for the current directory: `pyenv local 3.8.16`

**Advantages**: Thorough version isolation; considered the industry standard for multi-project development.

### Important Steps After Installation

Regardless of the installation method, it's recommended to also install `pip` (the Python package manager). Usually, `pip3` is automatically installed with Python 3. You can confirm this with `pip3 --version`. When using pip to install packages for the first time, it's advisable to use a virtual environment to isolate project dependencies. You can use Python's built-in `venv` module:
```bash
python3 -m venv my_project_env
source my_project_env/bin/activate
```

## Common Questions

### Why does entering the `python` command in the terminal open Python 2.7?
This is because the system retains the `python` command pointing to the old version for compatibility. The newly installed Python 3 must be invoked using the `python3` command. This is an intentional design to avoid breaking system scripts that depend on Python 2. You can change this behavior by creating an alias, but it's generally recommended to explicitly use `python3` and `pip3` for clarity.

### What to do if "Permission denied" or "Cannot write" appears during installation?
This is usually due to insufficient administrator privileges. When installing via Homebrew or terminal commands, ensure you have adequate permissions. You can try prefixing the command with `sudo` (e.g., `sudo pip3 install`), but a better practice is to use a virtual environment (`venv`) to install project-specific packages. This avoids modifying the system-level Python environment and is safer.

### How to completely uninstall Python from a Mac?
The uninstallation method depends on how you installed it:
- **Official Installer**: You can uninstall it like a regular application, or move the `/Library/Frameworks/Python.framework/` directory and the `/Applications/Python 3.x` folder to the Trash. Also, check for and delete any related symbolic links in `/usr/local/bin/`.
- **Homebrew Installation**: Simply run `brew uninstall python` in the terminal.
Please note: **Do not attempt to delete the system's built-in Python 2.7**, as some system tools depend on it. Just ensure your development environment correctly points to the newly installed Python 3.

After completing the Python installation, you might also need to set up your development environment. For detailed guidance on installing other development tools and configuring workflows on Mac, you can refer to this detailed [MAC Installation Guide](/catalog-2/directory-nesting-333/mac-installation).

<RelatedCards :items='[{"title":"MAC Installation Guide","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
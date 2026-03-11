---
title: "MAC Installation Python Tutorial"
description: "Installing Python on a Mac is the first step to start programming, data analysis, automation scripting, or web developme"
lastUpdated: 1773240167517
---

# MAC Python Installation Tutorial

## Why Install Python on Mac?

Installing Python on a Mac is the first step to start programming, data analysis, automation scripting, or web development. Although macOS comes with Python pre-installed, it's usually an older version (like Python 2.7) and is deeply integrated with the system. It's not recommended for direct development use to avoid affecting system stability. Therefore, installing a newer, independent Python version separately is the standard practice. Whether you're learning the basics of the programming language or running popular machine learning frameworks like PyTorch, a clean, manageable Python environment is crucial.

## Recommended Installation Method: Using Homebrew

For most Mac users, we strongly recommend using **Homebrew**, a powerful package manager for macOS, to install Python. It simplifies the process of installing, updating, and managing software.

### Step 1: Install Homebrew
If you haven't installed Homebrew yet, open the "Terminal" application (found in "Applications" -> "Utilities") and paste the following command:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Follow the on-screen prompts to complete the installation. After installation, you can run `brew --version` to verify.

### Step 2: Install Python via Homebrew
In the terminal, enter the following command to install the latest Python 3 version:
```bash
brew install python
```
This command will automatically download and install the latest stable version of Python 3 and its package management tool `pip`.

### Step 3: Verify Installation
After installation, close the current terminal window and open a new one (to ensure environment variables are updated). Then enter:
```bash
python3 --version
```
or
```bash
pip3 --version
```
If the version number is displayed correctly (e.g., `Python 3.11.4`), the installation was successful. Note that in the terminal, you should always use the `python3` and `pip3` commands to explicitly call the newly installed version to avoid confusion with the system's older version.

## Managing Python Versions and Virtual Environments

After installing the base Python, there are two important things to consider:

1.  **Managing Multiple Versions**: If you need to use multiple Python versions simultaneously (e.g., for testing compatibility across different projects), you can use the `pyenv` tool. It can be installed via Homebrew: `brew install pyenv`, and then you can easily switch between global or project-local versions.

2.  **Using Virtual Environments**: This is a best practice in Python development. Virtual environments create isolated dependency spaces for each project, preventing conflicts between packages. After installing Python, you can use the built-in `venv` module to create a virtual environment:
    ```bash
    # Navigate to your project directory
    cd path/to/your_project
    # Create a virtual environment
    python3 -m venv venv
    # Activate the virtual environment
    source venv/bin/activate
    ```
    Once activated, you'll see `(venv)` before your terminal prompt. All packages installed via `pip install` afterward will exist only within that environment.

## Setting Up a Development Environment

After installing Python, you can choose a code editor or Integrated Development Environment (IDE), such as the powerful **Visual Studio Code** (VS Code). After installing the official Python extension in VS Code, you'll gain powerful features like code completion, debugging, linting, and the ability to easily select installed Python interpreters or virtual environments.

## Common Issues

### When I run the `python` command, it shows version 2.7. What should I do?
This is normal. macOS retains the `python` command pointing to Python 2.7 for compatibility. Your newly installed Python 3 should be invoked using the `python3` command. To avoid confusion, always get into the habit of using `python3` and `pip3` in the terminal and in scripts. It is not recommended to modify the system's default `python` link.

### Encountering permission errors when installing Homebrew or Python?
This is usually because the command requires `sudo` permissions, but Homebrew is designed not to use `sudo`. Ensure you are operating as a regular user (non-root) and check the ownership of the `/usr/local` directory (for Intel Macs) or the `/opt/homebrew` directory (for Apple Silicon Macs). You can try running `sudo chown -R $(whoami) /opt/homebrew` (adjust based on your Homebrew path) to fix permissions.

### Are there other installation methods besides Homebrew?
Yes, you can also download the installer package (.pkg file) directly from the [Python official website](https://www.python.org/downloads/macos/) for a graphical installation, which is equally straightforward. Additionally, for more complex scientific computing environments, consider installing the Anaconda distribution. If you're interested in detailed steps for installing other software (like MongoDB) via .pkg files, you can refer to this guide on [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation), which includes general approaches and considerations.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
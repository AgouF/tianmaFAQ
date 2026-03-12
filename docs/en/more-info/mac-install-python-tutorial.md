---
title: "MAC Installation Python Tutorial"
description: "For Mac users, Python is an essential language whether for data analysis, web development, automation scripting, or lear"
lastUpdated: 1773292301153
---

# MAC Python Installation Tutorial

## Why Install Python on Mac?

For Mac users, Python is an essential language whether for data analysis, web development, automation scripting, or learning to program. Although macOS comes pre-installed with Python 2.7, its official support ended in 2020. Today, Python 3 is the absolute mainstream. Therefore, to utilize the latest language features, libraries, and security updates, manually installing an independent and manageable Python 3 environment is standard practice for developers. Through this tutorial, you will learn how to safely and efficiently install and manage Python on your Mac.

## Recommended Installation Method: Using Homebrew

For most developers, we strongly recommend using **Homebrew**, the powerful package manager for macOS, to install Python. It helps you easily manage Python versions and keeps them completely isolated from the system's default Python, avoiding potential conflicts.

### Step 1: Install Homebrew
If you haven't installed Homebrew yet, open the "Terminal" application (found in "Applications" -> "Utilities") and paste the following command:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Follow the on-screen prompts to complete the installation. After installation, you can run `brew --version` to verify.

### Step 2: Install Python via Homebrew
Execute the following command in the terminal to install the latest stable version of Python 3:
```bash
brew install python
```
After installation, Homebrew will typically prompt you to add the Python path to your environment variables. Be sure to follow the instructions (usually running one or two commands like `echo 'export PATH=...' >> ~/.zshrc`), then restart the terminal or run `source ~/.zshrc` to apply the changes.

### Step 3: Verify Installation
After installation, enter in the terminal:
```bash
python3 --version
```
or
```bash
pip3 --version
```
If the version number is displayed correctly (e.g., `Python 3.11.2`), the installation was successful. Note that after installing via Homebrew, the commands are `python3` and `pip3`, which helps distinguish them from the system's default `python` (Python 2).

## Alternative: Using the Official Installer

If you are not comfortable with the command line, you can also download the graphical installer directly from the Python official website.
1.  Visit the [Python official website](https://www.python.org/downloads/macos/).
2.  Download the latest "macOS 64-bit installer" package.
3.  Double-click the downloaded `.pkg` file and follow the graphical wizard steps to complete the installation.
4.  During installation, **be sure to check the "Add Python to PATH" option** so you can use it directly in the terminal.

After installation, you can verify by opening a new terminal window and entering `python3 --version`.

## Best Practice: Using Virtual Environments

Regardless of the installation method, it is highly recommended to create independent virtual environments for each project. This isolates the dependency libraries required by different projects, preventing version conflicts.

Creating a virtual environment using Python's built-in `venv` module is very simple:
```bash
# Navigate to your project directory
cd my_project
# Create a virtual environment named 'venv'
python3 -m venv venv
# Activate the virtual environment
source venv/bin/activate
```
After activation, the terminal prompt will show `(venv)`. All packages installed via `pip install` afterward will only exist in this isolated environment. To exit the virtual environment, simply enter `deactivate`.

## Common Issues

### The "python" command still shows the old version after installation?
This is normal. The system's default Python 2 is retained, and its `python` command points to it. Our installed Python 3 needs to be called via the `python3` command. To avoid confusion and ensure the use of the new version, it is recommended to always explicitly use the `python3` and `pip3` commands in your projects. You can also configure a Shell alias to make `python` point to `python3`, but this should be done with caution.

### How to install and manage multiple Python versions?
Using Homebrew, you can easily install specific versions, e.g., `brew install python@3.9`. However, a more professional and powerful tool for multi-version management is `pyenv`. It allows you to seamlessly switch Python versions globally or per project directory. You can also install `pyenv` via Homebrew: `brew install pyenv`. Afterward, you can use `pyenv install 3.9.13` to install a specific version and `pyenv global 3.9.13` to set the global version.

### What to do if encountering permission errors during installation?
Most permission issues stem from incorrect PATH configuration or improper use of `sudo`. Remember:
1.  When installing via Homebrew, carefully read the post-installation messages and add the specified path to your Shell configuration file (e.g., `~/.zshrc`) as instructed.
2.  Avoid using `sudo pip install` to install global packages, as this may compromise system integrity. The correct approach is to always use `pip install` within an activated virtual environment.
3.  If you need more basic guidance on software installation, you can refer to our general guide on [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation).

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
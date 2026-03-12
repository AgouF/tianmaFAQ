---
title: "MAC Installation Python Tutorial"
description: "Python is an extremely important programming language for developers, data analysts, or any Mac user looking to automate"
lastUpdated: 1773302678769
---

# MAC Python Installation Tutorial

## Why Install Python on Mac?

Python is an extremely important programming language for developers, data analysts, or any Mac user looking to automate tasks. While macOS comes with Python pre-installed, it's usually an older version (like Python 2.7 or an older Python 3 version) that is deeply integrated with the system. It's not recommended for direct development use to avoid affecting system stability. Therefore, installing a separate, latest, and clean managed version is the best practice to start your Python journey. This tutorial will guide you through the most recommended and safest way to install Python on your Mac.

## Recommended Installation Method: Using Homebrew

The most powerful and convenient way to install software on Mac, especially development tools, is by using the **package manager Homebrew**. It can easily manage multiple Python versions and resolve dependency issues.

### Step 1: Install Homebrew
If you haven't installed Homebrew yet, open the "Terminal" application (found in "Applications" -> "Utilities") and paste the following command:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Follow the on-screen prompts to complete the installation. After installation, you can run `brew --version` to verify.

### Step 2: Install Python via Homebrew
In the terminal, you can install the latest stable version of Python with just one command:
```bash
brew install python
```
This command will install the latest version of Python 3 and its package manager `pip`. After installation, close and reopen the terminal for the path to take effect.

### Step 3: Verify Installation
Enter the following commands to check if the installation was successful and to see the version numbers:
```bash
python3 --version
pip3 --version
```
You should see output similar to `Python 3.x.x` and `pip 21.x.x`. Note that in the terminal, the newly installed Python 3 must be invoked using the `python3` command, while the system's built-in older Python corresponds to the `python` command.

## Alternative Option: Using the Official Installer

If you are not comfortable using the command line, you can also download the graphical installer directly from the Python official website.
1.  Visit the [Python official website](https://www.python.org/downloads/macos/).
2.  Download the latest stable version labeled "macOS 64-bit installer."
3.  Open the downloaded `.pkg` file and follow the graphical wizard prompts to complete the installation.
4.  During installation, be sure to check the option "Add Python 3.x to PATH" so you can use the `python3` command directly in the terminal.

**Note**: Python installed via this method may not allow for easy management of multiple versions like Homebrew does.

## Important Steps After Installation

### 1. Set Up a Virtual Environment
It is highly recommended to create an independent virtual environment for each project to isolate project dependencies. This is a best practice in Python development.
```bash
# Install the virtual environment tool (if not already installed)
pip3 install virtualenv
# Create a new environment for your project
python3 -m venv my_project_env
# Activate the environment
source my_project_env/bin/activate
# After activation, the environment name will appear before the terminal prompt, and all packages installed via pip will be confined to this environment.
```

### 2. Upgrade the Package Manager pip
Ensure your pip is up to date:
```bash
pip3 install --upgrade pip
```

## Common Issues

### Why does the `python` command still run the old version?
This is because the system's default `python` command points to the older Python version that comes with macOS. The newly installed Python 3 must be invoked using the `python3` command. To avoid confusion, you can use virtual environments in your projects or set an alias for `python` in your Shell configuration file (like `.zshrc`), but this is usually not necessary.

### What to do if encountering permission errors during installation?
If you encounter a permission denied error when using `pip3 install`, **do not use `sudo`**. This could compromise system integrity. The correct approach is:
1.  Use the `--user` option to install locally for the user: `pip3 install --user package_name`
2.  Or, better yet, install all packages within a virtual environment as mentioned earlier.

### How to manage multiple Python versions?
Using Homebrew, you can easily install multiple versions, for example, `brew install python@3.9`. Then, you can switch between them by specifying the full path or using a professional version management tool like `pyenv`. This approach is similar to installing other development tools on Mac. If you are interested in installing other software, you can refer to this comprehensive guide on [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation).

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
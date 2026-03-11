---
title: "MAC Installation Python Tutorial"
description: "Python is an essential programming language for developers, data analysts, students, or any Mac user looking to automate"
lastUpdated: 1773222933262
---

# MAC Python Installation Tutorial

## Why Install Python on Mac?

Python is an essential programming language for developers, data analysts, students, or any Mac user looking to automate tasks. While macOS comes pre-installed with Python 2.7 or some version of Python 3, these system-provided versions are often outdated and deeply integrated with system components. Using or modifying them directly can cause system issues. Therefore, installing Python independently, cleanly, and in a flexibly manageable way is the best practice for starting to learn and use Python. It allows you to freely install libraries and switch versions without worrying about affecting macOS's own stability.

## Recommended Installation Method: Using Homebrew

For installing Python on Mac, we strongly recommend using **Homebrew**, a powerful package manager. Known as "the missing package manager for macOS," it allows you to easily install, update, and manage software just like on Linux.

### Step 1: Install Homebrew

If you haven't installed Homebrew yet, open the "Terminal" application (found in "Applications" -> "Utilities") and paste the following command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the on-screen prompts to complete the installation. After installation, you can run `brew --version` to verify success.

### Step 2: Install Python Using Homebrew

Once Homebrew is installed, installing the latest version of Python is very simple. Enter the following command in the terminal:

```bash
brew install python
```

This command will download and install the latest stable version of Python 3, along with the accompanying package management tool `pip`.

### Step 3: Verify Installation

After installation, close the current terminal window and open a new one (this is important to reload environment variables). Then enter the following commands to check if the installation was successful:

```bash
python3 --version
pip3 --version
```

These two commands should display your installed Python 3 version number and pip version number, respectively. Note that after installing via Homebrew, you should use `python3` and `pip3` in the command line to explicitly specify Python 3, avoiding confusion with the system's older version of Python.

## Setting Up the Development Environment

After installing Python, we usually need an independent virtual environment for project development. This ensures that dependencies for each project do not interfere with each other.

1.  **Install the virtual environment tool**: `pip3 install virtualenv`
2.  **Create and activate a virtual environment for your project**:
    ```bash
    cd your_project_directory
    python3 -m venv venv  # Create a virtual environment directory named 'venv'
    source venv/bin/activate # Activate the virtual environment
    ```
    After activation, you will see `(venv)` before your command prompt, indicating you are working within the virtual environment. All packages installed via `pip install` afterward will exist only in this environment.

## Common Issues

### After installation, the `python` command still points to the old version?
This is because the system's default `python` command still points to the old version that comes with macOS. Python 3 installed via Homebrew is typically invoked with the `python3` command. You can set an alias like `alias python='python3'` in your shell configuration file, but it's better to get used to using `python3` and `pip3` for clarity. If you need to completely replace the `python` command's reference, you can refer to our more in-depth environment configuration guide in [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation).

### How to install a specific version of Python?
You can install non-latest specific versions using Homebrew. First, you can use `brew search python@` to see which versions are available. For example, to install Python 3.9, use the command:
```bash
brew install python@3.9
```
After installation, its command might be `python3.9`.

### What to do if encountering permission errors during installation?
Most permission issues can be resolved by adding `sudo` before the command, but Homebrew itself does not recommend using `sudo`. A more common issue is directory permissions. Ensure the `/usr/local` directory (Homebrew's default installation prefix) is owned by your user. You can run the following command to fix it:
```bash
sudo chown -R $(whoami) /usr/local/*
```
If the problem persists, visit the Homebrew official website for detailed troubleshooting documentation.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
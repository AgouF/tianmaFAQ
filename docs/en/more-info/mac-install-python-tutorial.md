---
title: "MAC Installation Python Tutorial"
description: "For Mac users, Python is an excellent choice for learning programming, performing data analysis, automating scripts, or "
lastUpdated: 1773273403285
---

# MAC Python Installation Tutorial

## Why Install Python on Mac?

For Mac users, Python is an excellent choice for learning programming, performing data analysis, automating scripts, or developing web applications. While macOS comes with Python pre-installed, it is usually an older version (like Python 2.7) and deeply integrated with the system. It is not recommended for direct development use to avoid affecting system stability. Therefore, installing a separate, latest, and clean managed version is the standard practice for developers. Through this tutorial, you will learn how to safely and efficiently install and manage a Python environment on your Mac.

## Recommended Installation Method: Using Homebrew

The most recommended way to install software on a Mac is to use the **package manager Homebrew**. It automatically handles dependencies and facilitates future updates and management, making it an essential tool for Mac developers.

### Step 1: Install Homebrew (If Not Already Installed)

Open the "Terminal" application on your Mac (found in "Applications" -> "Utilities"), paste, and run the following command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Follow the on-screen prompts to complete the installation. After installation, you can run `brew --version` to verify.

### Step 2: Install Python Using Homebrew

In the terminal, you can install the latest stable version of Python with just one command:

```bash
brew install python
```
This command installs Python 3 (referred to as `python3`) along with the package management tool `pip3`.

### Step 3: Verify Installation

After installation, close the current terminal window and open a new one. Then run the following commands to check the versions:

```bash
python3 --version
pip3 --version
```
If the version numbers are displayed correctly (e.g., `Python 3.11.4`), the installation was successful.

## Environment Configuration and Best Practices

After installation, for a better development experience, it is recommended to configure the following:

1.  **Set Up a Virtual Environment**: It is highly recommended to create an independent virtual environment for each project to isolate dependencies. You can use Python's built-in `venv` module:
    ```bash
    # Navigate to your project directory
    cd your_project_folder
    # Create a virtual environment
    python3 -m venv venv
    # Activate the virtual environment
    source venv/bin/activate
    ```
    Once activated, you will see `(venv)` before the terminal prompt.

2.  **Use pip to Install Packages**: In the activated virtual environment, use `pip install package_name` to install required third-party libraries (e.g., `numpy`, `requests`).

3.  **Choose an Integrated Development Environment (IDE)**: It is recommended to use **PyCharm** (feature-rich) or **Visual Studio Code** (lightweight and flexible) for Python development, as both can effectively recognize and manage virtual environments.

## Common Issues

### After installation, the `python` command in the terminal still opens the old version?
This is because the system's default `python` command still points to the old Python 2. The Python 3 installed via Homebrew is invoked using the `python3` command. To avoid confusion, you can add aliases in your shell configuration file (e.g., `~/.zshrc` if you are using macOS Catalina or later):
```bash
echo 'alias python="python3"' >> ~/.zshrc
echo 'alias pip="pip3"' >> ~/.zshrc
```
Then execute `source ~/.zshrc` to apply the changes. After this, typing `python` in the terminal will point to Python 3.

### How to manage multiple Python versions?
If you need to use multiple versions of Python on the same machine (e.g., 3.9 and 3.11), it is recommended to use the **`pyenv`** tool. It makes installing, switching, and globally setting Python versions very convenient. You can install it via Homebrew: `brew install pyenv`, and then configure it according to its documentation.

### Are there other installation methods besides Homebrew?
Yes, you can also download the installer directly from the [Python official website](https://www.python.org/downloads/macos/) or use the Anaconda distribution (especially suitable for data science). Each method has its own use cases, and you can choose based on your needs. For more detailed software package installation and management, you can refer to our other guide: [MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation), which introduces general installation logic for various software on Mac.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
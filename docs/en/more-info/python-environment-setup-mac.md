---
title: "Python Environment Setup on MAC"
description: "Configuring a Python environment on a Mac is the first step for software development, data analysis, machine learning, o"
lastUpdated: 1773326945134
---

# Python Environment Setup on MAC

## Why Configure a Python Environment on Mac?

Configuring a Python environment on a Mac is the first step for software development, data analysis, machine learning, or automation scripting. Although macOS comes with a pre-installed Python version, it's usually an older Python 2.x or a specific 3.x version, deeply integrated with the system. Using or modifying it directly can affect system stability. Therefore, creating an independent, clean, and customizable Python environment for each project is considered a best practice in the industry. This ensures project dependencies don't conflict and facilitates reproducibility and sharing.

## Recommended Core Tools: Homebrew and Pyenv

For Mac users, the most recommended combination for managing Python is **Homebrew** and **Pyenv**.

1.  **Homebrew**: A powerful package manager for macOS. It allows you to easily install, update, and manage thousands of software packages, forming the foundation for configuring a development environment.
2.  **Pyenv**: An excellent Python version management tool. It lets you install multiple Python versions (e.g., 3.8, 3.9, 3.10, 3.11) on the same machine and easily switch between them, specifying different Python versions for different projects.

### Basic Installation Steps

**Step 1: Install Homebrew**
Open the "Terminal" application, paste the following command, and press Enter:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Follow the prompts to complete the installation. After installation, you can run `brew --version` to verify.

**Step 2: Install Pyenv using Homebrew**
Run in the terminal:
```bash
brew install pyenv
```
After installation, you need to add the Pyenv initialization script to your shell configuration file (usually `~/.zshrc` if you are using a newer macOS).
```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```
Then, apply the configuration:
```bash
source ~/.zshrc
```

**Step 3: Install Python using Pyenv**
Now, you can view all installable Python versions:
```bash
pyenv install --list
```
Choose a stable version to install, for example, Python 3.9.13:
```bash
pyenv install 3.9.13
```
This process may take some time. After installation, you can set it as the global default version:
```bash
pyenv global 3.9.13
```
Verify the installation: Close and reopen the terminal, run `python --version`. It should display the version you just set.

## Creating an Independent Project Environment: Virtual Environment

Even with a specific Python version, it's highly recommended to create a virtual environment for each project. This isolates the project's dependency packages.

In your project directory, use the following command to create a virtual environment:
```bash
python -m venv venv
```
This creates a folder named `venv`. Activate it:
```bash
source venv/bin/activate
```
After activation, the terminal prompt will usually show `(venv)` at the beginning. All packages installed via `pip install` afterward will only exist in this environment and won't affect the system or other projects. Use the `deactivate` command to exit the virtual environment.

## Common Issues

### What to do if a build failure error occurs during Python installation?
This is usually due to missing compilation dependencies. First, install the necessary toolchain via Homebrew:
```bash
brew install openssl readline sqlite3 xz zlib
```
During installation, you can try to let Pyenv know the location of these libraries (using openssl as an example; the specific path may vary by version):
```bash
CFLAGS="-I$(brew --prefix openssl)/include" LDFLAGS="-L$(brew --prefix openssl)/lib" pyenv install 3.9.13
```

### After switching versions with Pyenv, the `python` command version hasn't changed?
First, confirm you have correctly run `source ~/.zshrc`. Then, check the version set in the current shell session:
```bash
pyenv version
pyenv versions
```
`pyenv global` sets the global default version, but `pyenv local` can set a local version in a specific directory, which has higher priority. Ensure you haven't set a conflicting local version in your project directory.

### Is there a more graphical management method besides the command line?
For pure Python environment management, Pyenv + virtual environments is the most efficient command-line solution. If you need a powerful IDE that integrates Python environment management, package installation, and project creation features, consider using PyCharm. It has built-in virtual environment management and interpreter configuration interfaces, which are very intuitive. Additionally, for installing other development software on Mac, you can also refer to our detailed [MAC Installation Guide](/catalog-2/directory-nesting-333/mac-installation).

<RelatedCards :items='[{"title":"MAC Installation Guide","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
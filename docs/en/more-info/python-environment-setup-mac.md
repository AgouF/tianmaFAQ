---
title: "Python Environment Setup on MAC"
description: "Configuring a Python environment on a Mac is the first step for software development, data analysis, machine learning, o"
lastUpdated: 1773216226777
---

# Python Environment Setup on Mac

## Why Configure a Python Environment on Mac?

Configuring a Python environment on a Mac is the first step for software development, data analysis, machine learning, or automation scripting. Although macOS comes with a pre-installed Python version, it's usually an older Python 2.x or a specific Python 3.x version, and modifying the system Python directly can affect system stability. Therefore, using professional tools to manage multiple independent Python versions and creating project-specific virtual environments is considered modern best practice. This ensures project dependencies don't interfere with each other and allows you to freely choose or switch between required Python versions.

## Recommended Tools: Using Pyenv and Pyenv-virtualenv

For Mac users, the most recommended approach is to use `Pyenv` along with the `Pyenv-virtualenv` plugin to manage Python environments. This is a powerful and popular tool combination.

**Pyenv** is used to install and manage multiple Python versions. You can easily install any version like Python 3.8, 3.9, 3.10, 3.11, and freely switch between them.

**Pyenv-virtualenv** is a plugin for Pyenv used to create virtual environments based on specific Python versions. A virtual environment is an independent directory containing all the Python packages required for a specific project, completely isolated from the global environment and other projects.

## Detailed Installation and Configuration Steps

### Step 1: Install Homebrew
Homebrew is an essential package manager for macOS, allowing us to easily install various development tools. If you haven't installed it yet, open Terminal and run the following command:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
After installation, follow the prompts in the terminal to run one or two commands to add Homebrew to your PATH environment variable.

### Step 2: Install Pyenv and Pyenv-virtualenv via Homebrew
Execute the following commands in the terminal:
```bash
brew update
brew install pyenv
brew install pyenv-virtualenv
```

### Step 3: Configure the Shell Environment
For Pyenv to work correctly, you need to add initialization commands to your shell configuration file (e.g., `~/.zshrc`, if you are using macOS Catalina or later, the default shell is zsh).

Open the configuration file using a text editor (like `nano` or `vscode`):
```bash
nano ~/.zshrc
```
Add the following lines at the end of the file:
```bash
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```
Save and exit the editor (in nano, press `Ctrl+X`, then `Y`, and finally Enter). Then apply the configuration:
```bash
source ~/.zshrc
```

### Step 4: Install a Python Version and Create a Virtual Environment
1.  **View installable versions**: `pyenv install --list`
2.  **Install a specific version**: For example, to install Python 3.9.13
    ```bash
    pyenv install 3.9.13
    ```
3.  **Create a virtual environment**: Create a virtual environment for your project named `my_project`, based on Python 3.9.13.
    ```bash
    pyenv virtualenv 3.9.13 my_project_env
    ```
4.  **Activate the virtual environment**: Navigate to your project directory and then activate the environment.
    ```bash
    cd ~/path/to/my_project
    pyenv local my_project_env
    ```
    Once activated, the environment name `(my_project_env)` will typically appear before the terminal prompt. Now, all packages installed via `pip install` will only be installed within this isolated environment.

### Step 5: Daily Use and Deactivation
*   **Installing packages**: Within the activated environment, use `pip install package_name`.
*   **Deactivating the virtual environment**: Simply switch to another directory, or run `pyenv deactivate`.
*   **Deleting a virtual environment**: `pyenv uninstall my_project_env`

## Common Issues

### What if the download speed is very slow when installing a Python version?
This is due to slow download speeds from the official source. You can set up a domestic mirror to accelerate the download. Before installing, execute the following command (using the Tsinghua mirror as an example):
```bash
export PYTHON_BUILD_MIRROR_URL="https://mirrors.tuna.tsinghua.edu.cn/python/"
```
Then execute the `pyenv install` command. This can significantly improve download speed.

### How to specify different Python versions for different projects?
This is precisely the advantage of Pyenv. You can use the `pyenv local version_number_or_environment_name` command in the root directory of each project. This creates a `.python-version` file in the current directory. Every time you enter this directory in the future, Pyenv will automatically switch to the version or environment specified in the file. The global version is set via `pyenv global version_number`.

### Are there alternatives to Pyenv?
Yes, another very popular choice is **Anaconda**, which is particularly suitable for data science and machine learning fields because it comes pre-installed with a large number of scientific computing libraries. You can choose the tool based on your primary area of work. If you are interested in how to install Anaconda on Mac, you can refer to our other detailed guide: [MAC Installation Method](/catalog-2/directory-nesting-333/mac-installation).

<RelatedCards :items='[{"title":"MAC Installation Method","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
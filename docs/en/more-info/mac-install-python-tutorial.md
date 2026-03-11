---
title: "MAC Installation Python Tutorial"
description: "Installing Python on a Mac is the first step for many developers and data analysts to start their work. Although macOS c"
lastUpdated: 1773259084174
---

# MAC Python Installation Tutorial

## Why Install Python on Mac?

Installing Python on a Mac is the first step for many developers and data analysts to start their work. Although macOS comes with Python pre-installed, it is usually an older version (like Python 2.7) and deeply integrated with the system. It is not recommended to use this version directly for development to avoid affecting system stability. Installing an independent, manageable new version of Python (such as Python 3.11 or 3.12) allows you to freely use the latest language features, libraries, and tools, laying a solid foundation for learning, web development, automation scripts, or machine learning projects.

## Detailed Main Installation Methods

There are three reliable main methods to install Python on a Mac, each with its own advantages and disadvantages.

### Method 1: Using the Official Installer (Simplest)
This is the most beginner-friendly way to get started.
1.  **Visit the Official Website**: Open the [Python official website](https://www.python.org/downloads/). The site usually automatically recommends the latest macOS installer.
2.  **Download and Install**: Click to download the `.pkg` file, double-click to open it, and follow the graphical wizard to complete the installation. The installer will install both the Python interpreter and the IDLE development environment.
3.  **Verify Installation**: After installation, open "Terminal", type `python3 --version` and press Enter. If a version number like `Python 3.12.1` is displayed, the installation was successful.
*   **Advantages**: The process is intuitive and requires no command-line operations.
*   **Note**: After installation, you need to use the `python3` and `pip3` commands in the terminal to invoke the newly installed Python 3 and its package manager.

### Method 2: Using Homebrew (Recommended for Developers)
Homebrew is a powerful package manager for macOS that allows you to easily install, update, and manage software.
1.  **Install Homebrew**: If you haven't installed Homebrew yet, you can run the following command in the terminal:
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
2.  **Install Python via Homebrew**: Run the command `brew install python` in the terminal.
3.  **Verify Installation**: Again, use `python3 --version` to verify. For Python installed via Homebrew, its `pip3` will also be automatically configured.
*   **Advantages**: Facilitates subsequent upgrades and management of multiple Python versions, seamlessly integrates with the Homebrew ecosystem.
*   **Tip**: After installation, you may need to add Homebrew's Python path to your environment variables. Refer to the prompts provided by Homebrew after installation completes.

### Method 3: Using Pyenv (Managing Multiple Versions)
If you need to use different Python versions for different projects, Pyenv is the best choice.
1.  **Install Pyenv**: Recommended installation via Homebrew: `brew install pyenv`.
2.  **Install a Specific Python Version**: For example, to install Python 3.11.5: `pyenv install 3.11.5`.
3.  **Set Global or Local Version**:
    *   Set as the global default version: `pyenv global 3.11.5`
    *   Use a specific version in the current directory: `pyenv local 3.11.5`
*   **Advantages**: Allows precise control over the Python version used for each project or directory, solving version conflict issues.
*   **Use Case**: Developers maintaining multiple legacy projects or needing to test compatibility across different versions.

## Key Configuration After Installation

1.  **Set Up a Virtual Environment (Highly Recommended)**: To avoid dependency conflicts between projects, use a virtual environment. Python 3 has a built-in `venv` module. Execute the following in your project directory:
    ```bash
    python3 -m venv my_project_env
    source my_project_env/bin/activate
    ```
    After activation, the environment name will appear before the terminal prompt, and all packages installed via `pip` will be isolated within this environment.
2.  **Upgrade the Package Manager pip**: Run `pip3 install --upgrade pip` in the terminal to ensure pip is the latest version.
3.  **Configure Code Editor/IDE**: For editors/IDEs like VSCode or PyCharm, point them to the path of your newly installed Python interpreter in their settings.

## Common Issues

### The `python` command in the terminal still shows the old version?
This is because the system's pre-installed Python 2.7 has higher priority. Typing `python` in the terminal by default calls Python 2, while typing `python3` calls your newly installed Python 3. This is normal; just use `python3` and `pip3`. You can also change this behavior by creating an alias or adjusting the `$PATH` environment variable, but proceed with caution.

### What to do if "Permission denied" appears during installation?
When executing installation commands in the terminal (e.g., using Homebrew or pip to install packages), if you encounter permission errors, **do not** use `sudo` to directly install with elevated privileges into system directories, as this can cause confusion. The correct approach is:
*   Use `pip install --user package_name` to install the package to your user directory.
*   Or, as mentioned earlier, prioritize performing all package installations within a virtual environment. This is the safest and most standard practice.

### How to completely uninstall an installed Python?
The uninstallation method depends on how it was installed:
*   **Official Installer**: You can uninstall it like a regular Mac application by finding the "Python 3.x" folder in the "Applications" directory in Finder and dragging it to the Trash. However, a more thorough cleanup requires manually deleting related configuration files.
*   **Homebrew Installation**: Use the command `brew uninstall python` to uninstall. For more complex multi-version management, you may need to refer to our other detailed guide on software management. For example, when uninstalling specific development environments, the principles mentioned in the article **[MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation)** also apply: prioritize using the package manager for uninstallation.
*   **Pyenv Installation**: Use `pyenv uninstall 3.11.5` to uninstall a specific version.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
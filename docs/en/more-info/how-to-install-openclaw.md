---
title: "How to install OpenClaw"
description: "OpenClaw is a powerful open-source software, commonly used for data scraping, automated testing, or web crawling tasks. "
lastUpdated: 1773216171684
---

# How to Install OpenClaw

## Overview of OpenClaw Installation Methods

OpenClaw is a powerful open-source software, commonly used for data scraping, automated testing, or web crawling tasks. Its installation process varies depending on your operating system and specific needs. This article provides a detailed guide for installation steps on mainstream operating systems, along with some practical configuration suggestions.

### Installation Steps for Windows

Installing OpenClaw on Windows is relatively straightforward. It is recommended to use Python's package manager, pip.

1.  **Environment Preparation**: First, ensure your system has Python installed (version 3.7 or higher is recommended). You can check by entering `python --version` in the Command Prompt (CMD) or PowerShell. If not installed, please download the installer from the Python official website.

2.  **Install OpenClaw**: Open Command Prompt or PowerShell and enter the following command:
    ```
    pip install openclaw
    ```
    If your system has multiple Python versions, you may need to use the `pip3` command.

3.  **Verify Installation**: After installation, you can verify by importing the module in the Python interactive environment:
    ```
    python -c "import openclaw; print(openclaw.__version__)"
    ```
    If the version number is successfully printed, the installation is successful.

### Installation Steps for Linux

The installation process on Linux systems is similar but may require installing some system dependencies first.

1.  **Update System Package Manager**: Taking Ubuntu/Debian as an example, first update the package list:
    ```
    sudo apt update
    ```

2.  **Install Python and pip** (if not already installed):
    ```
    sudo apt install python3 python3-pip
    ```

3.  **Install OpenClaw using pip**:
    ```
    pip3 install openclaw --user
    ```
    Using the `--user` flag avoids the need for sudo privileges and installs the package to the user directory.

4.  **Handling Possible Dependencies**: Some features may require additional system libraries (e.g., for web page rendering). If you encounter issues, you may need to install development packages like `libxml2` or `libxslt`.

### Installation from Source (Advanced Users)

If you need the latest development version or wish to contribute, you can install from source.

1.  Clone the repository:
    ```
    git clone https://github.com/openclaw/openclaw.git
    cd openclaw
    ```

2.  Install from the local directory using pip:
    ```
    pip install -e .
    ```
    This installs in "editable" mode, meaning your modifications to the source code take effect directly.

### Basic Configuration and Testing After Installation

After successful installation, it's recommended to run a simple test to ensure core functionality works.

1.  Create a simple Python script (e.g., `test_openclaw.py`):
    ```python
    import openclaw
    # Write a simple scraping test based on OpenClaw's actual API
    # For example: claw = openclaw.Claw()
    print("OpenClaw imported successfully, basic environment is normal!")
    ```

2.  Run the script and check for any error output.

**Important Note**: Always comply with the target website's terms of service and `robots.txt` rules, using crawling tools legally and compliantly. For installations requiring complex configurations or specific environments (like macOS), you can refer to our other detailed guide, which covers everything from environment variable setup to virtual environment configuration: [MAC Installation Method](/catalog-2/directory-nesting-333/mac-installation).

## Frequently Asked Questions

### What to do if encountering the error "'pip' is not recognized as an internal or external command" during installation?
This usually means Python or pip is not installed correctly, or its path is not added to the system's environment variables.
*   **Solution**: First, confirm Python is installed. When installing Python, be sure to check the "Add Python to PATH" option. If it's installed but not added, you can manually add the Python installation directory (e.g., `C:\Users\YourName\AppData\Local\Programs\Python\Python39`) and its `Scripts` subfolder path to the system's `Path` environment variable.

### What to do if an error occurs during installation, indicating missing C++ compilation tools?
On Windows, some Python packages require compilation, necessitating Microsoft Visual C++ build tools.
*   **Solution**: Visit the Microsoft official page to download and install "Microsoft C++ Build Tools". Alternatively, you can try to find pre-compiled wheel files for installation. For Linux users, you need to install development toolkits like `python3-dev` or `gcc`.

### How to upgrade or uninstall OpenClaw?
*   **Upgrade**: Use the command `pip install --upgrade openclaw`.
*   **Uninstall**: Use the command `pip uninstall openclaw`.
It is recommended to perform these operations within a virtual environment to avoid polluting the global Python environment. You can use `venv` or `conda` to create an independent project environment.

<RelatedCards :items='[{"title":"MAC安装方式","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
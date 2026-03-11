---
title: "How to install OpenClaw?"
description: "OpenClaw is a powerful open-source software, commonly used for data scraping, automated testing, or web crawling tasks. "
lastUpdated: 1773223028340
---

# How to Install OpenClaw

## OpenClaw Installation Guide

OpenClaw is a powerful open-source software, commonly used for data scraping, automated testing, or web crawling tasks. The installation process varies depending on your operating system, but generally follows similar steps. This article provides detailed methods for installing OpenClaw on different systems.

### Pre-installation Preparation

Before starting the installation of OpenClaw, please ensure your system meets the following basic requirements:
1.  **Python Environment**: OpenClaw is typically developed based on Python. Please ensure your system has Python installed (recommended version 3.7 or higher). You can check by entering `python --version` or `python3 --version` in the terminal or command prompt.
2.  **Package Management Tool**: Python packages are usually installed using `pip`. Please ensure `pip` is updated to the latest version. You can upgrade it using `pip install --upgrade pip`.
3.  **Network Connection**: The installation process requires downloading necessary dependency packages from the internet, so please ensure you have a stable network connection.

### General Installation Steps (Using pip)

For most users, especially those on Windows and Linux, installation via Python's package manager `pip` is the simplest and most direct method.

1.  **Open Terminal (Linux/macOS) or Command Prompt/PowerShell (Windows)**.
2.  **Install OpenClaw using pip**. Enter the following command in the command line:
    ```bash
    pip install openclaw
    ```
    If you are using Python 3 and have multiple Python versions on your system, you may need to use `pip3`:
    ```bash
    pip3 install openclaw
    ```
3.  **Wait for the installation to complete**. `pip` will automatically download OpenClaw and all its dependencies from the Python Package Index (PyPI).
4.  **Verify the installation**. After installation is complete, you can verify if it was successful by entering the following command in the command line:
    ```bash
    python -c "import openclaw; print(openclaw.__version__)"
    ```
    If the version number is successfully printed, the installation is complete.

### Other Installation Methods

If you encounter issues with `pip` installation, or if you wish to install a development version, you can try the following methods:

*   **Install from GitHub Source Code**:
    1.  Clone the OpenClaw GitHub repository: `git clone https://github.com/username/openclaw.git` (replace "username" with the actual repository owner).
    2.  Navigate into the project directory: `cd openclaw`.
    3.  Perform a local installation using `pip`: `pip install -e .`.

*   **Install using Conda** (if OpenClaw is available in Conda channels):
    ```bash
    conda install -c conda-forge openclaw
    ```

### Post-installation Configuration and Quick Start

After successful installation, it is recommended that you:
1.  Read the official documentation to understand basic configuration options and command-line parameters.
2.  Try running a simple example command to test if its basic functions are working correctly. For example, many crawler tools have a `--help` parameter to display help information: `openclaw --help`.
3.  Depending on your specific needs, you may also need to configure proxies, user-agent strings, request delays, etc., to comply with target website rules and ensure stable operation.

For macOS users, if you encounter specific issues when installing the Python environment or handling dependencies, you can refer to our other detailed guide on **[MAC Installation Method](/catalog-2/directory-nesting-333/mac-installation)**, which covers general tips for configuring a development environment on macOS and common troubleshooting methods.

## Frequently Asked Questions

### ### What to do if a "Permission Denied" error occurs during installation?
This is usually because there are insufficient permissions to write files to system directories. There are two solutions:
1.  **Use a Virtual Environment (Recommended)**: Create and activate a Python virtual environment (`python -m venv myenv`, then activate it), and install OpenClaw within that environment. All packages will be installed in the user directory without requiring administrator permissions.
2.  **Use the `--user` Flag**: Add `--user` to the pip command to install the package in the current user's directory: `pip install openclaw --user`.

### ### Installation succeeded, but running the command prompts "command not found: openclaw"?
This usually means the OpenClaw executable script has not been added to the system's PATH environment variable. You can try:
1.  Run it using the Python module method: `python -m openclaw [parameters]`.
2.  Check if Python's `Scripts` (Windows) or `bin` (Linux/macOS) directory is in the PATH. `pip` usually gives a warning during installation, prompting you to add the path. You can manually add this path to your system's environment variables.

<RelatedCards :items='[{"title":"MAC Installation Method","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
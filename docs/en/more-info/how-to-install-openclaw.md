---
title: "How to install OpenClaw"
description: "OpenClaw is a powerful open-source software commonly used for data scraping, automated testing, or web crawling tasks. T"
lastUpdated: 1773302748996
---

# How to Install OpenClaw

## OpenClaw Installation Guide

OpenClaw is a powerful open-source software commonly used for data scraping, automated testing, or web crawling tasks. The installation process varies depending on your operating system and specific needs. Below are detailed installation steps and considerations for different platforms.

### Pre-installation Preparation

Before starting the installation of OpenClaw, ensure your system meets the following basic requirements:
- **Python Environment**: OpenClaw is typically developed based on Python, so Python 3.7 or higher is required. You can check your current version by entering `python --version` or `python3 --version` in the command line.
- **Package Management Tool**: It is recommended to use `pip` (Python's package installation tool) for installation. Ensure `pip` is updated to the latest version by running `pip install --upgrade pip`.
- **System Dependencies**: In some cases, additional system libraries (such as development tools or SSL libraries) may be required, especially on Linux systems.

### Installing OpenClaw via Pip

This is the most common installation method, suitable for most users:
1. Open a terminal (Windows users can use Command Prompt or PowerShell; macOS/Linux users can use the system terminal).
2. Enter the following command to install OpenClaw:
   ```bash
   pip install openclaw
   ```
   If you are using Python 3 and have multiple Python versions on your system, you may need to use `pip3`:
   ```bash
   pip3 install openclaw
   ```
3. Wait for the installation to complete. During installation, `pip` will automatically handle dependencies.
4. After installation, verify the installation by running `openclaw --version` or `python -m openclaw --version`.

### Installing from Source Code

If you want to use the latest development version or make custom modifications, you can install from source code:
1. Visit OpenClaw's official GitHub repository or code hosting page, download the source code archive, or clone the repository using `git`:
   ```bash
   git clone https://github.com/username/openclaw.git
   cd openclaw
   ```
2. In the source code directory, run the installation command:
   ```bash
   pip install -e .
   ```
   This will install it in "editable" mode, making future updates easier.

### Using a Virtual Environment (Recommended)

To avoid conflicts with other Python packages on your system, it is recommended to use a virtual environment:
1. Install the `virtualenv` tool (if not already installed):
   ```bash
   pip install virtualenv
   ```
2. Create a new virtual environment:
   ```bash
   virtualenv openclaw_env
   ```
3. Activate the virtual environment:
   - On Windows: `openclaw_env\Scripts\activate`
   - On macOS/Linux: `source openclaw_env/bin/activate`
4. In the activated virtual environment, install OpenClaw using `pip install openclaw`.

### Platform-Specific Instructions

- **Windows**: Ensure Python is installed and added to the system PATH environment variable. If you encounter permission errors, try running the terminal as an administrator or add the `--user` option to the command (e.g., `pip install --user openclaw`).
- **macOS**: Generally similar to the Linux steps. If you use Homebrew for software management, you can first install Python via `brew install python`, then install OpenClaw using `pip`. For detailed installation methods on Mac computers, refer to this guide: [MAC Installation Method](/catalog-2/directory-nesting-333/mac-installation).
- **Linux**: You may need to install Python development packages. For example, on Ubuntu/Debian, you can use `sudo apt install python3-dev` to ensure compilation dependencies.

### Post-Installation Configuration

After installation, it is recommended to perform basic configuration:
1. Check OpenClaw's help documentation to understand basic commands and options:
   ```bash
   openclaw --help
   ```
2. Depending on your use case, you may need to set up configuration files (e.g., API keys, proxy settings). Configuration files are typically located in the `.openclaw` folder in the user's home directory.
3. Run a simple test to ensure functionality. For example, try scraping a public webpage to verify the installation.

## Common Issues

### What to Do If You Encounter a "Permission Denied" Error During Installation?
This is usually due to insufficient permissions to write files to system directories. Solutions include:
- Using a virtual environment (as described above) to install packages in the user directory.
- Adding the `--user` flag to the `pip install` command to install the package in the current user's directory.
- On Linux/macOS, you can use `sudo pip install openclaw`, but this is not best practice as it may affect system stability.

### Unable to Run the `openclaw` Command After Installation?
This may be because the executable file is not added to the system PATH. Try:
- Checking if Python's Scripts directory (e.g., `~/.local/bin` or `C:\Users\Username\AppData\Roaming\Python\PythonXX\Scripts`) is in the PATH.
- Running directly using the module method: `python -m openclaw [parameters]`.
- Ensuring the virtual environment is activated if using one.

### How to Update or Uninstall OpenClaw?
- Update: Use `pip install --upgrade openclaw`.
- Uninstall: Use `pip uninstall openclaw` and select "Yes" when prompted for confirmation.

<RelatedCards :items='[{"title":"MAC Installation Method","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
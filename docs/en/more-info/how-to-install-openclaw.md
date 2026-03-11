---
title: "How to install OpenClaw"
description: "OpenClaw is a powerful open-source software, commonly used for data scraping, automated testing, or web crawling tasks. "
lastUpdated: 1773230742873
---

# How to Install OpenClaw

## OpenClaw Installation Guide

OpenClaw is a powerful open-source software, commonly used for data scraping, automated testing, or web crawling tasks. The installation process varies depending on your operating system, but overall, it's a relatively straightforward process. Below is a detailed guide on installation methods for different systems.

### Installing on Windows

For Windows users, there are typically two main ways to install OpenClaw.

1.  **Using the Executable Installer (Recommended)**:
    Visit the official OpenClaw website or its GitHub releases page to download the latest `.exe` or `.msi` installer file. Double-click to run the file and follow the prompts in the installation wizard. This is usually the simplest and most error-free method, suitable for most general users.

2.  **Using a Package Manager**:
    If you are comfortable with the command line, you can use Windows package managers like `Chocolatey` or `Scoop`. For example, in a terminal with Chocolatey installed, simply run the command `choco install openclaw` to automatically download and install it.

### Installing on Linux

Linux users primarily install via package managers or by compiling from source code.

1.  **Using the System Package Manager**:
    This is the most convenient method. Use the corresponding command based on your distribution.
    *   **Debian/Ubuntu**: `sudo apt update && sudo apt install openclaw`
    *   **Fedora/RHEL/CentOS**: `sudo dnf install openclaw` or `sudo yum install openclaw`
    *   **Arch Linux**: `sudo pacman -S openclaw`

2.  **Compiling from Source Code**:
    If pre-compiled packages are not available in the official repositories, or if you need the latest development version, you can clone the source code from GitHub and compile it yourself. This usually requires having `git`, `gcc`, `make`, and related development libraries installed. Please refer to the project's `README.md` file for specific compilation instructions.

### Installing on macOS

macOS users also have convenient installation options. Similar to installing other development tools on a Mac, you can easily do it via Homebrew. If you are not yet familiar with using Homebrew, you can refer to this detailed [MAC Installation Guide](/catalog-2/directory-nesting-333/mac-installation).

1.  **Using Homebrew (Recommended)**:
    First, ensure you have Homebrew installed. Then, execute the following commands in the terminal:
    ```bash
    brew update
    brew install openclaw
    ```
    Homebrew will automatically handle all dependencies and install the software to the correct location.

2.  **Downloading the macOS Application Bundle**:
    Some projects also provide `.dmg` disk image files. After downloading, simply drag and drop the application into the "Applications" folder.

### Post-Installation Verification and Configuration

After installation, it's recommended to verify that the installation was successful.
*   Open a terminal (or Command Prompt/PowerShell).
*   Enter the command `openclaw --version` or `openclaw -v`.
*   If the version number is displayed correctly, the installation was successful.

During the first run, OpenClaw might create a configuration file (e.g., `~/.openclaw/config.yaml`) in the user directory. You can edit this file according to your specific task requirements to set default parameters like request headers, proxies, delay times, etc.

## Common Issues

### What to do if "Missing Dependencies" or "Command Not Found" appears during installation?
This usually happens because the environment or libraries required to run OpenClaw are not fully installed.
*   **Windows/Linux**: Please carefully read the official installation documentation to ensure all prerequisites (like a specific version of Python, Node.js, or system development toolkits) are installed.
*   **macOS**: If installed via Homebrew, it usually resolves dependencies automatically. If problems persist, try running `brew doctor` to check Homebrew's status, or re-run the `brew install` command.

### How to upgrade to the latest version of OpenClaw?
Keeping the software up-to-date provides access to new features and bug fixes.
*   **Windows**: Re-download the latest installer for an overwrite installation, or use the package manager command (e.g., `choco upgrade openclaw`).
*   **Linux**: Use your system package manager's update command (e.g., `sudo apt update && sudo apt upgrade openclaw`).
*   **macOS**: Use the Homebrew command `brew upgrade openclaw` for an easy upgrade.

<RelatedCards :items='[{"title":"MAC Installation Guide","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
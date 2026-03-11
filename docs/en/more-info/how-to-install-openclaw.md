---
title: "How to install OpenClaw"
description: "OpenClaw is a powerful open-source software primarily used for data scraping and automation tasks. It is developed based"
lastUpdated: 1773259134168
---

# How to Install OpenClaw

## OpenClaw Installation Guide

OpenClaw is a powerful open-source software primarily used for data scraping and automation tasks. It is developed based on Python and supports multiple operating systems, including Windows, macOS, and Linux. The following details the steps to install OpenClaw on different systems.

### System Requirements and Preparations

Before starting the installation, please ensure your system meets the following basic requirements:
- Python 3.7 or higher
- pip (Python package manager)
- Stable internet connection

First, it is recommended to create a virtual environment to isolate OpenClaw's dependencies and avoid conflicts with other Python projects. You can use the following command to create a virtual environment:
```bash
python -m venv openclaw_env
```

The method to activate the virtual environment varies by operating system:
- **Windows**: `openclaw_env\Scripts\activate`
- **macOS/Linux**: `source openclaw_env/bin/activate`

### Detailed Installation Steps

**Install via pip (Recommended)**
This is the simplest and quickest installation method. After activating the virtual environment, run the following command:
```bash
pip install openclaw
```

If the installation is slow, consider using a domestic mirror source to speed up the download, for example:
```bash
pip install openclaw -i https://pypi.tuna.tsinghua.edu.cn/simple
```

**Install from Source Code**
If you need the latest development version or want to contribute, you can clone and install from the GitHub repository:
```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
pip install -e .
```

**Verify Installation**
After installation is complete, you can verify if it was successful with the following command:
```bash
python -c "import openclaw; print(openclaw.__version__)"
```
If a version number is output, the installation was successful.

### Configuration and Initial Use

After installation, basic configuration is recommended:
1. Create a configuration file: OpenClaw usually automatically generates a configuration file on first run, but you can also manually create `~/.openclaw/config.yaml`
2. Set up a proxy (if needed): Add proxy server information in the configuration file
3. Configure storage path: Specify the save location for scraped data

A simple usage example:
```python
from openclaw import Claw

claw = Claw()
result = claw.fetch('https://example.com')
print(result)
```

### Troubleshooting

**Common Issues and Solutions:**
1. **Dependency installation failure**: Try upgrading the pip version `pip install --upgrade pip`
2. **Permission issues**: Use sudo on Linux/macOS or run commands as administrator on Windows
3. **Network issues**: Check firewall settings or use a mirror source
4. **Python version incompatibility**: Confirm the Python version meets requirements

If encountering SSL certificate issues, try:
```bash
pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org openclaw
```

For macOS users experiencing system permission issues, refer to our detailed [MAC Installation Guide](/catalog-2/directory-nesting-333/mac-installation), which includes solutions for macOS-specific problems.

## Frequently Asked Questions

### Which operating systems does OpenClaw support?
OpenClaw supports all major operating systems, including Windows 10/11, macOS 10.14 and above, and most Linux distributions (such as Ubuntu, CentOS, Fedora, etc.). The installation process varies slightly between systems but generally follows the same pip installation flow.

### How to update OpenClaw after installation?
To update OpenClaw to the latest version, simply run:
```bash
pip install --upgrade openclaw
```
It is recommended to update regularly to get the latest features and security fixes. Back up your configuration files before updating.

### What are the dependencies of OpenClaw?
OpenClaw's main dependencies include requests, beautifulsoup4, lxml, and other network request and parsing libraries. These dependencies are handled automatically during installation. If you need specific features (such as database support, JavaScript rendering, etc.), you may need to install additional extension packages. The complete dependency list can be found in the project's requirements.txt file.

<RelatedCards :items='[{"title":"MAC Installation Guide","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
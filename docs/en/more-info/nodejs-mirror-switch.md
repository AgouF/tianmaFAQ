---
title: "NodeJS Mirror Source Switching"
description: "The mirror source for Node.js typically refers to the server address that package managers like Node Package Manager (np"
lastUpdated: 1773216255941
---

# NodeJS Mirror Source Switching

## Node.js Mirror Source Switching Guide

The mirror source for Node.js typically refers to the server address that package managers like Node Package Manager (npm) or Yarn connect to when downloading and installing packages. By default, these package managers connect to the official source located abroad (registry.npmjs.org), which may lead to slow speeds, unstable connections, or even timeout failures when accessed from within China. Switching to a domestic mirror source can significantly improve the download speed of dependency packages and enhance the development experience.

Commonly used domestic mirror sources are mainly maintained by universities and enterprises, offering good reliability and stability, such as:
*   **Taobao NPM Mirror**: `https://registry.npmmirror.com/`
*   **Huawei Cloud Mirror**: `https://repo.huaweicloud.com/repository/npm/`
*   **Tencent Cloud Mirror**: `https://mirrors.cloud.tencent.com/npm/`

## How to Switch npm Mirror Source

npm is the default package manager for Node.js, and there are several methods to switch its mirror source.

### Method 1: Using the `npm config` Command (Recommended)

This is the most direct and commonly used method. Open your terminal (command-line tool) and execute the following command to set the source to the Taobao mirror:

```bash
npm config set registry https://registry.npmmirror.com/
```

After execution, you can run the following command to verify if the setting was successful:

```bash
npm config get registry
```

If the terminal displays `https://registry.npmmirror.com/`, it indicates a successful switch.

**Revert to Official Source**: If you need to switch back to the official source, simply execute:
```bash
npm config set registry https://registry.npmjs.org/
```

### Method 2: Using the `nrm` Tool to Manage Multiple Sources

If you need to frequently switch between multiple mirror sources (e.g., to test the speed of different sources), using the `nrm` (npm registry manager) tool is more convenient.

1.  **Install nrm globally**:
    ```bash
    npm install -g nrm
    ```

2.  **List all available mirror sources**:
    ```bash
    nrm ls
    ```
    You will see a list, with the currently active source marked with `*`.

3.  **Switch mirror source** (e.g., switch to Taobao source):
    ```bash
    nrm use taobao
    ```

4.  **Test the response speed of each source**:
    ```bash
    nrm test
    ```

### Method 3: Temporarily Using a Mirror Source to Install a Single Package

If you only need a temporary speed boost for a specific installation, you can directly specify the `--registry` parameter in the `npm install` command without modifying the global configuration.

```bash
npm install [package-name] --registry=https://registry.npmmirror.com
```

## How to Switch Yarn Mirror Source

If you use Yarn as your package manager, you can also switch its mirror source.

### Set Yarn Mirror Source

```bash
yarn config set registry https://registry.npmmirror.com/
```

### Verify Yarn Mirror Source

```bash
yarn config get registry
```

## Notes on Mirror Source Switching

1.  **Synchronization Delay**: Domestic mirror sources are replicas of the official source and have a certain synchronization delay (usually very short, within minutes). For very few newly released packages, if installation fails, you can try temporarily switching back to the official source.
2.  **Project-Level Configuration**: In addition to global configuration, you can also create an `.npmrc` file in the project root directory and write `registry=https://registry.npmmirror.com`. This will apply the mirror source setting only to the current project, which is suitable for unifying the environment during team collaboration.
3.  **Other Configurations**: Besides `registry`, you might sometimes need to set `disturl` (used for downloading Node.js native module compilation tools), etc. The Taobao mirror also provides corresponding addresses. However, for most daily development, setting only `registry` is sufficient.

After successfully configuring the mirror source, whether you are installing project `node_modules` dependencies or globally installing scaffolding tools like `vue-cli` or `create-react-app`, the speed will see a significant improvement. This, like configuring other development environments (such as [MAC Installation Method](/catalog-2/directory-nesting-333/mac-installation)), is an important step in enhancing work efficiency.

## Frequently Asked Questions

### What to do if package installation is still slow or reports errors after switching the mirror source?
First, use `npm config get registry` or `yarn config get registry` to confirm that the current source has been correctly switched. If confirmed correct, it might be a temporary network issue or a failure of the mirror site. You can try:
1.  Use `nrm test` to test and switch to another faster domestic source (e.g., Huawei Cloud).
2.  Clear the npm cache: `npm cache clean --force`, then retry.
3.  Check your network proxy settings to ensure there are no conflicts.

### When using `nrm`, it prompts "command not found"?
This usually happens because `nrm` was not correctly installed to the global executable path. Ensure you install it using `npm install -g nrm` and that your Node.js environment is configured correctly. Sometimes, `sudo` permissions might be required on macOS or Linux. After installation, reopen the terminal.

### How to switch if the company has a private npm repository?
If your company uses a private repository (such as Verdaccio or Nexus), the switching method is the same. Simply set the registry address to the internal address provided by your company, for example:
```bash
npm config set registry http://your-private-registry.company.com/
```
Additionally, you may need to configure authentication information (such as a token) as required by your company, which is usually explained in the private repository's documentation.

<RelatedCards :items='[{"title":"MAC Installation Method","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
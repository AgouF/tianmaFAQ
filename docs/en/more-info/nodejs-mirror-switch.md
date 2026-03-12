---
title: "NodeJS Mirror Source Switching"
description: "In domestic network environments, downloading packages from the Node.js official source (registry.npmjs.org) can be very"
lastUpdated: 1773292445629
---

# NodeJS Mirror Source Switching

## Node.js Mirror Source Switching Guide

In domestic network environments, downloading packages from the Node.js official source (registry.npmjs.org) can be very slow or even time out, severely impacting development efficiency. By switching the mirror source to a domestic mirror server, the download and installation speed of dependency packages can be greatly improved. This guide details several mainstream and reliable switching methods.

## Why Switch the Mirror Source?

Node.js package managers (npm, yarn, pnpm) by default fetch packages from the official repository located abroad. The main benefits of switching to a domestic mirror source are:
1.  **Extremely Fast Downloads**: Domestic servers typically offer faster network connections, potentially increasing download speeds by several to dozens of times.
2.  **Improved Stability**: Avoid installation failures or timeouts caused by international network fluctuations.
3.  **Ensured Development**: For team collaboration or CI/CD pipelines, stable package downloads are fundamental for smooth project progress.

Commonly used domestic mirror source providers include:
*   **Taobao NPM Mirror**: `https://registry.npmmirror.com/` (formerly `https://registry.npm.taobao.org`)
*   **Tencent Cloud NPM Mirror**: `https://mirrors.cloud.tencent.com/npm/`
*   **Huawei Cloud NPM Mirror**: `https://mirrors.huaweicloud.com/repository/npm/`

## How to Switch the Mirror Source

You can choose any of the following methods based on the package manager you use and your needs.

### Method 1: Using the Command Line (Temporary or Permanent)

This is the most common and direct method.

**1. Check the Current Source**
```bash
npm config get registry
# or
yarn config get registry
```

**2. Switch to the Taobao Mirror Source**
*   **Permanent Switch**:
    ```bash
    npm config set registry https://registry.npmmirror.com/
    # or
    yarn config set registry https://registry.npmmirror.com/
    ```

*   **Use Only for the Current Install Command** (Temporary):
    ```bash
    npm install --registry=https://registry.npmmirror.com
    ```

**3. Revert to the Official Source if Needed**
```bash
npm config set registry https://registry.npmjs.org/
```

### Method 2: Using the `nrm` Registry Management Tool (Recommended)

`nrm` (npm registry manager) is a tool specifically designed for quickly switching NPM sources, and it's very convenient.

1.  **Install nrm globally**:
    ```bash
    npm install -g nrm
    ```

2.  **List all available mirror sources**:
    ```bash
    nrm ls
    ```
    You will see a list similar to the following, where the source marked with `*` is the one currently in use.
    ```
    * npm ---------- https://registry.npmjs.org/
      yarn --------- https://registry.yarnpkg.com/
      tencent ------ https://mirrors.cloud.tencent.com/npm/
      cnpm --------- https://r.cnpmjs.org/
      taobao ------- https://registry.npmmirror.com/
      npmMirror ---- https://skimdb.npmjs.com/registry/
    ```

3.  **Switch the mirror source** (e.g., to the Taobao source):
    ```bash
    nrm use taobao
    ```

4.  **Test the speed of sources** (Optional):
    ```bash
    nrm test
    ```

### Method 3: Project-Specific Configuration (Using the `.npmrc` File)

Create or edit the `.npmrc` file in the project root directory and add the following content. Package downloads for this project will then prioritize using this source.
```
registry=https://registry.npmmirror.com/
```
This method takes precedence over global configuration and is ideal for specifying different sources for different projects.

## Configuration for Other Package Managers

*   **Yarn**: Besides using the `yarn config set registry` command, you can also add `registry "https://registry.npmmirror.com/"` to the `.yarnrc` file in the project root directory.
*   **pnpm**: Use the command `pnpm config set registry https://registry.npmmirror.com/`, or edit the configuration file.

**Note**: After switching the mirror source, if you encounter issues finding certain packages (especially newly published or private ones), try switching back to the official source or use `nrm test` to select another fast domestic mirror.

## Frequently Asked Questions

### After switching the mirror source, package installation is still slow or reports errors. What should I do?
First, use `npm config get registry` to confirm if the current source has been successfully switched. If it has, there might be synchronization delays or temporary issues with that mirror source. It is recommended to:
1.  Try clearing the npm cache: `npm cache clean --force`
2.  Use `nrm test` to test and switch to another faster domestic mirror source (e.g., Tencent Cloud).
3.  Check your network connection or try again later.

### When using `nrm`, it says "command not found"?
This indicates `nrm` was not installed successfully. Ensure Node.js and npm are correctly installed and re-run the installation command `npm install -g nrm` with administrator privileges (add `sudo` on macOS/Linux). For installing the Node.js environment, you can refer to our other guide: [MAC Installation Method](/catalog-2/directory-nesting-333/mac-installation), which also covers basic environment setup.

### My company has an internal private registry. How do I configure it?
If you need to use both a private registry and a public mirror, you can configure scoped registries. For example, to use the private source for all packages starting with `@mycompany` and the Taobao source for the rest:
```bash
npm config set registry https://registry.npmmirror.com/
npm config set @mycompany:registry http://internal-registry.mycompany.com/
```
This allows flexible mixing of different package sources.

<RelatedCards :items='[{"title":"MAC Installation Method","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />
---
title: "How to use Shadowrocket?"
description: "Shadowrocket is a widely popular proxy client application on the iOS platform. It supports various proxy protocols such "
lastUpdated: 1773258862730
---

# How to Use Shadowrocket

## What is Shadowrocket?

Shadowrocket is a widely popular proxy client application on the iOS platform. It supports various proxy protocols such as Shadowsocks, V2Ray, Trojan, HTTP/HTTPS/SOCKS5, allowing users to securely and conveniently access the international internet or protect local network privacy by configuring server information. With its clean interface and powerful features, it is the preferred tool for many iPhone and iPad users to manage network connections.

## How to Obtain and Install Shadowrocket

Since Shadowrocket cannot be directly downloaded from the App Store in mainland China, users typically need to log into the App Store using an Apple ID from another region (such as the US or Hong Kong) to purchase and download it. After obtaining the account, search for "Shadowrocket" in the App Store to find and install it.

**Please note**: Be sure to obtain the application through official and legitimate channels to ensure account security and software stability. For more detailed download and installation steps, especially for new Mac and iOS users, you can refer to our dedicated guide: [MAC & IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage).

## Basic Usage Tutorial: Configuring Your First Proxy

After installation, follow these steps for basic configuration:

1.  **Obtain Server Information**: First, you need to have an available proxy server. This is usually provided by a service provider (VPN/proxy service), including information such as server address, port, password, encryption method, and protocol type (e.g., SS, V2Ray, etc.).
2.  **Add Server Configuration**:
    *   Open the Shadowrocket app and tap the "+" button in the top right corner.
    *   Based on the server information you obtained, select the corresponding protocol (e.g., Shadowsocks) under "Type".
    *   Fill in the "Server" (IP address or domain), "Port", "Password", and "Encryption Method" in order.
    *   You can name this configuration (e.g., "My Server"), then tap "Done" in the top right corner to save.
3.  **Connect and Disconnect**: On the server list page, find the configuration you just added and tap the switch button on the right to connect. Once connected successfully, a small VPN icon will appear at the top of the screen, indicating that traffic is being routed through the proxy server. Tap the switch again to disconnect.

## Advanced Features and Usage Tips

Shadowrocket offers many advanced features to optimize the user experience:

*   **Global Routing**: On the "Config" page, you can set the mode to "Proxy" (all traffic goes through the proxy), "Config" (traffic is split based on rules), or "Direct". It is recommended to use the "Config" mode with a rule list to achieve intelligent traffic splitting (direct connection for domestic sites, proxy for foreign sites), saving data and improving access speed.
*   **Rule Settings and Subscriptions**: This is one of Shadowrocket's core features. You can manually add rules (e.g., `DOMAIN-SUFFIX,google.com,Proxy`), but a more efficient way is to use a "Rule Subscription" URL. Many service providers offer rule subscription links; adding them can automatically update a large library of split rules.
*   **HTTPS Decryption**: This feature can be used for debugging network requests, but it is not recommended for ordinary users as it requires installing and trusting a certificate, posing certain security risks.
*   **Speed and Latency Testing**: Long-press a configuration in the server list and select "Test Real Latency" to help you choose the fastest server under your current network conditions.

## Frequently Asked Questions

### What should I do if I cannot access the internet after connecting with Shadowrocket?
Please troubleshoot in the following order:
1.  **Check Server Information**: Ensure the entered address, port, password, and encryption method are completely correct.
2.  **Check Network**: Make sure your device itself can access the internet normally (e.g., cellular data or Wi-Fi is enabled).
3.  **Switch Connection Mode**: Try temporarily switching the "Global Routing" to "Proxy" mode in "Config" to test if you can access the internet. If so, it might be a rule configuration issue.
4.  **Contact Service Provider**: The server might be temporarily down or expired; contact your proxy service provider to confirm the server status.

### How to achieve intelligent splitting for domestic and foreign websites?
The most convenient method is to use the rule subscription feature.
1.  On the Shadowrocket main interface, tap the "Config" tab at the bottom.
2.  Tap "Edit Config" under the "Rules" section.
3.  Find the "Rules" section, tap to enter, then tap the "+" in the top right corner and select "Add Rule Set".
4.  Paste the rule subscription link provided by your service provider (or a reliable GFWList split rule link from the internet) into the "URL" field, then tap "Download".
5.  After downloading, ensure "Config" mode is selected in "Global Routing". This way, accessing domestic websites will use a direct connection, while accessing blocked foreign websites will automatically go through the proxy.

<RelatedCards :items='[{"title":"MAC&IOS下载以及使用方式","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
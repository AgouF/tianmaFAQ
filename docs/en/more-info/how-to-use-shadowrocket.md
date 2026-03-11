---
title: "How to use Shadowrocket?"
description: "Shadowrocket is a widely popular proxy tool application on the iOS platform, primarily used for configuring and using VP"
lastUpdated: 1773203374036
---

# How to Use Shadowrocket

## Introduction and Core Features of Shadowrocket

Shadowrocket is a widely popular proxy tool application on the iOS platform, primarily used for configuring and using VPNs, proxy servers, and other network connections to achieve internet access, access international networks, or enhance online privacy. It supports various proxy protocols such as SS/SSR, V2Ray, Trojan, HTTP/Socks5, and is highly favored by users for its flexible configuration and intuitive interface. To use it, you first need to purchase and download the app from a non-China region App Store (e.g., US, Hong Kong accounts).

## How to Configure and Use Shadowrocket

After successfully installing the app, using Shadowrocket mainly involves the following steps:

### 1. Obtain Server Subscription Link or Manual Configuration
This is the most critical step. You need to obtain server configuration information from a reliable VPN service provider. There are typically two methods:
*   **Subscription Link (Recommended)**: Most providers offer a subscription URL. You just need to copy this link.
*   **Manual Configuration**: If the provider provides separate server details like address, port, password, and encryption method, you can enter them manually.

### 2. Add Configuration Within the App
*   Open the Shadowrocket app and tap the "+" icon in the top right corner.
*   **Using a Subscription Link**: Select the "Type" as `Subscribe`, then paste the copied subscription URL into the "URL" field, and tap "Done" in the top right corner to save.
*   **Manual Configuration**: Based on the server type (e.g., Shadowsocks), select the corresponding type, then fill in the server, port, password, encryption method, and other details one by one.

### 3. Connect and Disconnect
After adding the configuration, you will see the new node in the main server list. Tap the node you want to connect to, and the app will attempt to establish a connection. Once successfully connected, a VPN icon (shaped like a small rocket) will appear at the top of your screen, indicating your device's network traffic is being routed through that proxy server. Tap the large circular switch on the main interface to disconnect.

### 4. Advanced Settings and Mode Selection
Shadowrocket offers powerful rule configuration features. You can set the proxy mode according to your needs:
*   **Proxy Mode**: All traffic goes through the proxy.
*   **Configuration Mode (Recommended)**: The most commonly used mode. Only websites or IPs matched by the rule list go through the proxy; other traffic connects directly. This can save international bandwidth and speed up domestic access.
*   **Direct Mode**: No traffic goes through the proxy.
You can edit rules under "Config" -> "Proxy" or use rule set links provided by your service provider.

## Precautions and Tips for Using Shadowrocket

1.  **Ensure Subscription Information is Valid**: Subscription links or server information may expire or become invalid. If you cannot connect, first check the server status.
2.  **Understand Proxy Rules**: Properly configuring rules is key to a smooth experience. Beginners can start by testing connectivity in "Proxy Mode," then switch to "Configuration Mode" and import mature rule sets.
3.  **Pay Attention to System Notifications**: In iOS "Settings" > "Shadowrocket," ensure "Notifications" and "VPN" configuration permissions are enabled; otherwise, connections may not work properly.
4.  **Node Selection**: Typically, choosing a node with close physical proximity and low load results in lower latency and faster speeds.
5.  **Comparison with Tools like Clash**: Shadowrocket leans more towards being a simple, direct proxy client, while tools like Clash support more complex rules and load balancing. You can choose based on your needs. For download and usage guides for related Mac and iOS platform tools, you can refer to this guide: [MAC&IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage).

## Frequently Asked Questions

### Where can I download Shadowrocket?
Shadowrocket is not listed on the Chinese mainland App Store. You need to use a non-China region Apple ID (e.g., US, Hong Kong, Japan, etc.) to log into the App Store, then search for "Shadowrocket" to purchase and download it. Please note, this is a paid application.

### Why are there no server nodes after adding a subscription?
First, check if the subscription link was copied completely and is valid. Then, try enabling the "Update on Launch" option in Shadowrocket's "Settings" -> "Server Subscription" and manually pull down the main server list to refresh. If it still doesn't appear, the subscription link may be expired or in an unsupported format; contact your service provider.

### What should I do if the connection is successful but I can't access the internet?
Please troubleshoot in order:
1.  Check if your local network is working (e.g., Wi-Fi or cellular data).
2.  Try switching to different proxy server nodes.
3.  Check the rule settings in Shadowrocket's "Config" -> "Proxy." Try temporarily switching to "Proxy Mode" for testing. If you can access the internet in Proxy Mode, it indicates a rule issue; you need to adjust or update the rule set.
4.  Restart the Shadowrocket app or restart your phone.

<RelatedCards :items='[{"title":"MAC&IOS下载以及使用方式","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
---
title: "How to use Shadowrocket?"
description: "Shadowrocket is a widely popular proxy tool application on the iOS platform. It is primarily used to configure and utili"
lastUpdated: 1773239955882
---

# How to Use Shadowrocket

## Introduction to Shadowrocket

Shadowrocket is a widely popular proxy tool application on the iOS platform. It is primarily used to configure and utilize various proxy protocols such as Shadowsocks, V2Ray, and Trojan, helping users access the global internet and protect their online privacy. It is renowned for its clean interface, powerful features, and stable connections. It's important to note that Shadowrocket is only available for download on non-China region App Stores, requiring users to use a corresponding Apple ID to obtain it.

## How to Configure Shadowrocket

After successfully installing Shadowrocket, configuration is key to using it. Typically, you need to obtain server configuration information from a reliable proxy service provider. There are two main configuration methods:

1.  **Manual Configuration**:
    *   Open the Shadowrocket app and tap the "+" icon in the top right corner.
    *   Select the corresponding type based on your subscription service, such as "Shadowsocks," "V2Ray," or "Trojan."
    *   Manually fill in the server address (Host), port (Port), password (Password), encryption method (Encryption), and other details. This method is suitable for users with independent server information.

2.  **Subscription Link/QR Code Configuration (Recommended)**:
    *   This is the most common and convenient method. Your service provider will usually provide a subscription link (URL) or a configuration QR code.
    *   **Subscription Link**: On the Shadowrocket home screen, tap the "+" icon in the top right corner, select "Subscribe," then paste the link into the "URL" field and tap "Done" to automatically fetch and import all server nodes.
    *   **QR Code Configuration**: On the Shadowrocket home screen, tap the scan icon in the top right corner and directly scan the QR code provided by your service provider. The configuration will complete automatically.

Once configured, the server nodes will appear in the list on the home screen.

## Basic Usage and Advanced Features

After configuring the nodes, usage is very straightforward:
*   In the server list on the home screen, tap the node you want to connect to.
*   Then tap the large switch button at the top to enable the proxy connection. When the button turns green and shows "Connected," it indicates a successful connection.
*   You can quickly toggle the proxy on/off via the iPhone/iPad Notification Center Widget or a home screen widget, which is very convenient.

Shadowrocket also offers some practical advanced features:
*   **Proxy Rules**: On the "Config" page, you can set proxy rules. The default "Config" mode (i.e., rule mode) performs intelligent traffic routing based on your set rules (e.g., bypassing Chinese mainland IPs, direct LAN connections). Domestic websites connect directly, while foreign websites go through the proxy, saving data and offering fast speeds.
*   **Global Mode**: All network traffic is forwarded through the proxy server.
*   **Scenario Configuration**: You can set different proxy modes for different network environments (e.g., cellular data, specific Wi-Fi).
*   **HTTPS Decryption**: Used for debugging and analyzing network traffic (requires installing and trusting a certificate).

## Frequently Asked Questions

### Where can I download Shadowrocket?
Shadowrocket cannot be downloaded from the App Store in mainland China. You need to register a non-China region Apple ID (e.g., US, Hong Kong), log into the App Store, and then search for and download it. Please pay attention to account security and obtain the app through official channels. For more detailed download and installation steps, you can refer to this guide: [MAC&IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage).

### I'm connected but cannot access the internet. What should I do?
First, please check the following:
1.  **Node Status**: Confirm whether your proxy service subscription is valid and if the server is running normally.
2.  **Local Network**: Ensure your device is successfully connected to Wi-Fi or cellular data.
3.  **Configuration Information**: Verify that the server address, port, password, etc., are filled in correctly, especially when using manual configuration.
4.  **Rule Settings**: Try temporarily switching to "Global Proxy" mode on the "Config" page. If you can access the internet in global mode, the issue might be that the rule list (e.g., rules for bypassing mainland China IPs) needs updating or has a problem.
5.  **Restart the App**: Try completely closing Shadowrocket and reopening it.

### What's the difference between Shadowrocket and Clash?
Both are excellent proxy tools, but they have different design philosophies. Shadowrocket leans more towards being a simple, efficient client, with core functions focused on connecting to and managing proxy nodes, making it quick to get started. Clash (and its derivative clients like Stash, Clash for Windows) places more emphasis on complex rule configuration and policy groups, supporting advanced network strategies like rule scripts, automatic speed testing, and load balancing. It is suitable for users who prefer deep customization and complex traffic routing rules. For most ordinary users, Shadowrocket's ease of use is sufficient.

<RelatedCards :items='[{"title":"MAC&IOS下载以及使用方式","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
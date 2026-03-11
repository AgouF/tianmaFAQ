---
title: "How to use Shadowrocket?"
description: "Shadowrocket is a widely popular proxy tool application on the iOS platform. It is primarily used to configure and utili"
lastUpdated: 1773230409555
---

# How to Use Shadowrocket

## Introduction to Shadowrocket

Shadowrocket is a widely popular proxy tool application on the iOS platform. It is primarily used to configure and utilize various proxy protocols such as Shadowsocks, V2Ray, and Trojan, helping users to access the internet freely, protect their online privacy, or access specific network resources. It is highly favored by users for its clean interface, powerful features, and stable connections. It's important to note that this app is only available for download from App Stores outside of mainland China.

## Core Usage Steps

To use Shadowrocket, you need to complete the following core steps:

1.  **Obtain a Subscription Link or Node Information**: This is a prerequisite for using any proxy service. You need to purchase a service from a reliable proxy service provider and obtain the corresponding subscription link (URL) or individual server configuration information (including server address, port, password, and encryption method).
2.  **Add Proxy Configuration**:
    *   **Adding via Subscription Link (Recommended)**: This is the most convenient method. Open Shadowrocket, tap the "+" icon in the top right corner, and select "Type" as "Subscribe". Paste the subscription link provided by your service provider into the "URL" field, then tap "Done" in the top right corner. Shadowrocket will automatically fetch and update the node list from that link.
    *   **Manually Adding a Node**: If you don't have a subscription link, you can select "Type" as the corresponding protocol (e.g., Shadowsocks) and manually fill in all parameters such as server, port, password, and encryption method.
3.  **Connect and Disconnect**: After adding a configuration, you will see all available nodes in the "Server" list on the main interface. Tap the node you want to connect to, then tap the large circular switch button at the bottom of the interface to initiate the proxy connection. Once successfully connected, the button will turn green, and a Shadowrocket VPN icon will appear in the status bar. Tap the switch again to disconnect.
4.  **Select Proxy Mode**: Shadowrocket offers flexible proxy rules:
    *   **Configuration**: Usually, selecting "Proxy" is sufficient, meaning all traffic goes through your chosen node.
    *   **Proxy**: This is the global proxy mode.
    *   **Scene**: You can set different proxy modes or nodes based on different network environments (e.g., cellular data, Wi-Fi).
    *   **Rule**: This is the most commonly used mode. In this mode, only traffic matching the rule list (e.g., accessing foreign websites) will go through the proxy, while accessing domestic websites will be direct, resulting in faster speeds and saving data. You can import or customize rule lists.

## Advanced Features and Usage Tips

*   **Test Node Speed**: Long-press a node and select "Test" from the pop-up menu to ping for latency or perform a speed test, helping you choose the optimal node.
*   **Update Subscription**: Your service provider's node information may be updated. You can go to "Settings" -> "Server Subscription", enable "Update on Launch", or manually tap "Update" to fetch the latest nodes.
*   **Traffic Split Rules (Rule Configuration)**: Experienced users can import more powerful rule files (e.g., from `github.com` like `DivineEngine` rules) in "Configuration" -> "Rules" to achieve more precise and intelligent traffic splitting.
*   **View Logs**: If you encounter connection issues, you can check detailed connection information in the "Logs" tab, which helps with troubleshooting.
*   **Share Configuration**: You can generate a QR code of your configuration (not the subscription link) to share with other Shadowrocket users.

For information on how to use similar proxy tools on Mac computers, please refer to our other guide: [MAC&IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage), which introduces cross-platform usage concepts.

## Frequently Asked Questions

### Where can I download Shadowrocket?
Shadowrocket is currently only available on Apple App Stores outside of mainland China, such as the US store. You need an Apple ID for the corresponding region to search, purchase, and download it. Do not download installation packages from unknown third-party websites to avoid security risks.

### What should I do if I'm connected but cannot access the internet?
This is a common issue. Please troubleshoot in the following order:
1.  **Check Node Status**: Confirm whether your proxy service plan is still valid and if the node is available. Try switching to other nodes.
2.  **Check Proxy Mode**: If you are using "Rule" mode, the issue might be with the rule list not matching. You can temporarily switch to "Proxy" (global) mode to test. If you can access the internet, the problem lies with the rules.
3.  **Check Local Network**: Try switching between Wi-Fi and cellular data, or restart Airplane Mode.
4.  **Update Subscription**: Manually update the subscription in "Settings" -> "Server Subscription" to ensure the node information is up-to-date.

### What's the difference between Shadowrocket and Clash?
Both are excellent proxy tools, but they have different design philosophies. Shadowrocket leans more towards being a "client" with relatively intuitive configuration, focusing on connecting to and managing nodes. Clash (and its derivatives like Stash, ClashX) emphasizes being a "rule engine", featuring extremely powerful and complex rule groups and policy groups, making it suitable for advanced users with high demands for network traffic splitting. For most general users, Shadowrocket's ease of use is sufficient.

<RelatedCards :items='[{"title":"MAC&IOS下载以及使用方式","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
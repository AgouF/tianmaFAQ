---
title: "How to use Shadowrocket?"
description: "Shadowrocket is a popular proxy client on the iOS platform. It supports various proxy protocols such as SS/SSR, V2Ray, a"
lastUpdated: 1773302410285
---

# How to Use Shadowrocket

## Introduction to Shadowrocket

Shadowrocket is a popular proxy client on the iOS platform. It supports various proxy protocols such as SS/SSR, V2Ray, and Trojan, helping users access the internet freely, visit restricted websites, or protect their online privacy. It features a clean interface and powerful functionality but requires users to configure node information themselves. For first-time users, understanding its basic usage is essential.

## How to Obtain and Install Shadowrocket

Since Shadowrocket is not directly available on the App Store in mainland China, users typically need to log into the App Store with a non-mainland Apple ID (e.g., US or Hong Kong account) to purchase and download it. It is a one-time paid application. After downloading, you can find its icon on the home screen of your iPhone or iPad.

For more detailed acquisition methods, account registration, and installation steps, you can refer to our dedicated guide: [MAC & IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage), which includes general download and initial setup methods for Apple devices.

## Basic Configuration and Usage Steps

After installation, the core of using Shadowrocket is to add available proxy server (node) information.

1.  **Obtain Node Subscription Link or Configuration Information**: You need to get a subscription link (Subscription URL) or specific configuration parameters for individual servers (such as address, port, password, encryption method, etc.) from a reliable proxy service provider.

2.  **Add Node Configuration**:
    *   **Adding via Subscription Link (Recommended)**: This is the most convenient method. Open Shadowrocket, tap the "Settings" (gear icon) in the bottom navigation bar, and select "Server Subscriptions". Tap the "+" in the top right corner, paste the subscription link provided by your service provider into the "URL" field, then tap "Done" in the top right corner. Return to the main interface, tap the "Connections" tab at the bottom, and then tap the "Update" button in the top right corner to fetch and list all nodes.
    *   **Manually Adding a Single Node**: On the main interface, tap the "+" in the top right corner. Based on the protocol provided by your service provider (e.g., SS, V2Ray), manually fill in all the details like server, port, password, encryption method, etc., and then save.

3.  **Connect and Disconnect**: On the "Connections" page, select a node you want to use from the list. Then tap the large circular switch button at the top. Shadowrocket will attempt to connect. Once successfully connected, the switch will turn green, and a VPN icon will appear in the status bar. At this point, your device's network traffic is routed through that proxy server. To disconnect, tap the switch button again.

4.  **Mode Selection**: Shadowrocket offers flexible traffic routing rules.
    *   **Configuration Mode**: The default mode. It decides which traffic goes through the proxy based on user-set rules (e.g., bypassing IPs in mainland China).
    *   **Proxy Mode**: All traffic goes through the proxy.
    *   **Direct Mode**: No traffic goes through the proxy.
    You can switch between these modes above the node list on the connection page. Usually, "Configuration Mode" meets most needs.

## Tips and Precautions

*   **Rule Configuration**: On the "Configuration" page, you can manage routing rules. The default rule group (e.g., "GFW List") is usually sufficient. It automatically determines and proxies access to blocked websites while allowing direct connections to domestic sites for faster speeds.
*   **Test Connection**: After connecting, you can open a browser and visit `google.com` or `youtube.com` to test if it's successful.
*   **Background App Refresh**: To ensure subscription nodes update automatically, it's recommended to enable "Background App Refresh" for Shadowrocket in iOS Settings > General > Background App Refresh.
*   **Security**: Always obtain nodes from trustworthy service providers to avoid privacy leaks. Regularly update your subscription to get fresh, available nodes.
*   **Battery and Network**: Keeping the proxy on for extended periods may slightly increase battery consumption. If certain apps cannot connect to the internet, try switching to "Direct Mode" to check if it's a proxy rule issue.

## Frequently Asked Questions

### What to do if Shadowrocket connects successfully but cannot access the internet?
First, ensure your device's cellular data or Wi-Fi network is functioning. Second, the issue might be with the node: try switching to other nodes in the list. Finally, check the routing rules. You can temporarily switch to "Proxy Mode" for testing. If you can access the internet in this mode, it indicates a rule configuration problem, and you may need to update the rules or check their accuracy.

### How to update node subscriptions?
Go to Shadowrocket's "Settings" > "Server Subscriptions", find your added subscription entry, swipe left on it, and an "Update" option will appear. Tap it to update manually. You can also enable the "Auto Update" feature to let Shadowrocket fetch the latest nodes periodically.

### Is there a difference in using Shadowrocket on iPhone and iPad?
The basic operations and features are identical. Thanks to the unified iOS and iPadOS systems, one purchase allows use on all your iOS/iPadOS devices under the same Apple ID. Configuration information can be synced via iCloud or added separately on each device.

<RelatedCards :items='[{"title":"MAC&IOS下载以及使用方式","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
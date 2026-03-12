---
title: "How to use Shadowrocket?"
description: "Shadowrocket is a popular proxy tool on the iOS platform. It supports multiple proxy protocols, helping users access the"
lastUpdated: 1773316479787
---

# How to Use Shadowrocket

## Shadowrocket Beginner's Guide

Shadowrocket is a popular proxy tool on the iOS platform. It supports multiple proxy protocols, helping users access the global internet, visit worldwide network resources, and protect their privacy. With its clean interface and powerful features, it is the preferred tool for many Apple users. This article details its basic usage.

### Core Features and Configuration Principles
The core working principle of Shadowrocket is to establish an encrypted tunnel between your device (iPhone or iPad) and a proxy server. Your network traffic is transmitted through this tunnel, thereby bypassing network restrictions or hiding your real IP address. It supports various mainstream protocols such as SS/SSR, Vmess, Trojan, and HTTP/Socks5.

To use Shadowrocket, you first need information for a usable proxy server node. This information is typically provided by service providers in the form of a subscription link or manual configuration parameters. Shadowrocket itself does not provide servers; you need to obtain reliable node sources yourself.

### Detailed Usage Steps
1.  **Obtaining and Installing the App**: Since Shadowrocket has been removed from the China App Store, you need a non-China Apple ID (e.g., US, Hong Kong ID) to log into the App Store, search for "Shadowrocket," and purchase and download it. For specific acquisition methods, please refer to our other guide: [MAC&IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage).

2.  **Adding Server Nodes**:
    *   **Adding via Subscription Link (Recommended)**: This is the most convenient method. Open Shadowrocket, tap the "+" in the top right corner, and select "Subscribe" for the "Type." Paste the subscription link provided by your service provider into the "URL" field, then tap "Done" in the top right corner. Shadowrocket will automatically fetch and update the node list from this link.
    *   **Adding via Manual Configuration**: Tap the "+" in the top right corner. Based on the node information provided by your service provider, manually select the protocol type (e.g., SS, Vmess) and fill in parameters such as server address, port, password, and encryption method one by one.

3.  **Connecting and Using**:
    *   After adding nodes, you will see the server list on the home page. Tap the switch on the right side of the node you want to connect to in order to enable the proxy connection. The first time you connect, the app will request to add a VPN configuration. You need to tap "Allow" and verify with your fingerprint or password.
    *   Once successfully connected, a VPN icon (a small rocket symbol) will appear in the top status bar, and the home page will display the connection status and traffic information. At this point, your device's network traffic is transmitted through that proxy server.

4.  **Advanced Feature Settings**:
    *   **Global Routing**: On the "Config" page, you can set the routing mode. Typically, "Proxy" mode only routes blocked websites through the proxy, saving traffic; "Global" mode routes all traffic through the proxy.
    *   **Proxy Rules**: You can customize rules for more granular control, such as specifying certain websites or apps to connect directly and others to use the proxy.
    *   **HTTPS Decryption**: This feature can be used for debugging, but it is not recommended for ordinary users. It requires installing and trusting a certificate and carries security risks.

### Usage Notes and Recommendations
*   **Node Source**: Always choose reputable, stable, and reliable service providers. Avoid using unknown free nodes to prevent privacy leaks or network security risks.
*   **Timely Updates**: Pay attention to updates for the Shadowrocket app, as new versions typically fix vulnerabilities and improve stability. Also, subscription links should be updated regularly to obtain the latest node information.
*   **Saving Battery and Data**: Keeping the proxy enabled for long periods may increase battery consumption. Turn it off when not needed. Using the "Proxy" routing mode instead of "Global" mode can effectively save international data usage.
*   **Comply with Laws**: Ensure your usage complies with the laws and regulations of your location, using the tool for legitimate learning and information access purposes.

## Frequently Asked Questions

### What to do if Shadowrocket connects successfully but cannot access the internet?
Please troubleshoot in order: 1) Check if the node itself is available (try switching to other nodes); 2) Check if an HTTP proxy is configured for your current WiFi in "Settings" -> "Wi-Fi" (if so, please turn it off); 3) Try switching the "Routing" mode to "Global" in Shadowrocket's "Config" for testing; 4) Restart the Shadowrocket app or restart your phone.

### How to update nodes from a subscription link?
In Shadowrocket, find your subscription group (usually displayed with the note name of the subscription link) on the "Home" or "Config" page. Swipe left on that group and tap the "Update" button that appears to manually update. You can also enable "Auto Update Subscriptions" in "Settings" to set a periodic update frequency.

### How to solve frequent disconnections when Shadowrocket is in the background?
This is usually because the iOS system restricts background activity to save battery. You can try: Go to iPhone "Settings" -> "General" -> "Background App Refresh" and ensure Shadowrocket's switch is turned on. However, this does not completely guarantee stability, as iOS has strict management over VPN background operation. The most fundamental method is to choose nodes or protocols with more stable connections.

<RelatedCards :items='[{"title":"MAC&IOS Download and Usage Guide","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
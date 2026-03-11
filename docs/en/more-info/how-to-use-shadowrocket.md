---
title: "How to use Shadowrocket?"
description: "Shadowrocket is a widely popular proxy client tool on iOS and macOS platforms. It is not a VPN service itself, but a pow"
lastUpdated: 1773205354906
---

# How to Use Shadowrocket

## What is Shadowrocket?

Shadowrocket is a widely popular proxy client tool on iOS and macOS platforms. It is not a VPN service itself, but a powerful network debugging tool and proxy client that supports multiple proxy protocols. Users can configure and manage their own proxy servers through it to achieve purposes such as accessing the global internet, protecting privacy, or performing network debugging. Due to its flexible configuration and intuitive interface, it has become the tool of choice for many Apple device users.

## How to Obtain and Install Shadowrocket

Due to its functional characteristics, Shadowrocket cannot be directly downloaded from the App Store in mainland China. Typically, users need a non-mainland China Apple ID to access the App Store and download this application.

1.  **Obtain a Non-Mainland Apple ID**: You can register one yourself (e.g., US or Hong Kong account) or obtain one from a trusted source. Registration requires a corresponding payment method and address information.
2.  **Switch App Store Account**: In the iOS App Store or macOS App Store, log out of your current China region account and log in with your prepared non-mainland account.
3.  **Search and Download**: Search for "Shadowrocket" in the App Store, and click to purchase/download once found. This is a paid application, usually requiring a small fee.
4.  **Install and Trust**: After downloading, if a prompt like "Untrusted Enterprise Developer" appears upon first opening, you need to go to your device's "Settings" > "General" > "VPN & Device Management" (or "Profiles & Device Management"), find the corresponding developer certificate, and select "Trust".

For more detailed steps on downloading, installing, and initial setup, you can refer to our dedicated guide: [MAC&IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage).

## Basic Configuration and Usage

After successful installation, you need to obtain usable proxy server information (such as node subscription links or manual configuration parameters) to start using it.

**The core usage process is as follows:**

1.  **Add Proxy Server**:
    *   **Subscription Link (Recommended)**: This is the most common method. On the Shadowrocket main interface, tap the "+" in the top right corner and select "Subscribe". Paste the subscription link provided by your service provider into the "URL" field, then tap "Done" in the top right corner. Shadowrocket will automatically fetch the server list from that link.
    *   **Manual Configuration**: If you have detailed parameters for a single server (such as address, port, password, encryption method, etc.), you can choose "Add Manually" to fill them in one by one.

2.  **Connect and Disconnect**:
    *   After adding servers, you will see available nodes in the server list on the main interface. Tap the node you want to connect to, and a switch will appear on the right. Tap it to turn on and connect.
    *   After a successful connection, a "VPN" icon will appear at the top of the screen, indicating the proxy is active. Tap the switch again to disconnect.

3.  **Global Routing and Proxy Rules**:
    *   This is one of Shadowrocket's core features. Select the "Config" tab in the bottom menu to set traffic routing rules.
    *   **Proxy**: All traffic goes through the proxy server.
    *   **Config** (Rule Mode): This is the smartest mode. Shadowrocket decides which traffic goes through the proxy (e.g., foreign websites) and which traffic connects directly (e.g., domestic websites) based on built-in or your custom rule lists. This mode is recommended for first-time use.
    *   **Direct**: All traffic bypasses the proxy.
    *   **Scene**: Can automatically switch configuration modes based on different network environments (e.g., different Wi-Fi networks).

## Advanced Features and Setup Recommendations

*   **Latency Test**: Long-press a node in the server list to perform a "Connectivity Test" to check its current latency, helping you choose the fastest node.
*   **View Logs**: In the "Logs" tab, you can view detailed connection and request logs, which is very helpful for troubleshooting network issues.
*   **HTTPS Decryption**: Advanced users can use this to debug HTTPS traffic; ordinary users do not need to enable it.
*   **Battery Saving & Background App Refresh**: To ensure the app runs continuously in the background, it is recommended to enable "Wireless Data" and "Background App Refresh" for Shadowrocket in iOS "Settings".

**Usage Recommendation**: For most users, maintaining "Rule" mode and regularly updating the server list via subscription links will provide a stable and intelligent internet experience. Always obtain subscription links from trustworthy service providers to ensure network security and privacy.

## Frequently Asked Questions

### What should I do if I can't access the internet after connecting with Shadowrocket?
First, check if your proxy server subscription is valid and if the node information is correct. Try switching to "Direct" mode. If you can access the internet, then the issue is with the proxy server. If you still cannot access the internet in Direct mode, check your local network connection. Additionally, you can check Shadowrocket's "Logs" page, which usually provides specific error messages.

### What's the difference between Shadowrocket and a VPN?
Shadowrocket is a **proxy client tool** that requires you to configure usable proxy servers yourself (these servers may be provided by third-party VPN services or providers). What is commonly referred to as a VPN (like some well-known brand VPN apps) is a **service that integrates the client and its own server network**; you only need to log in to an account to use it. Shadowrocket offers more flexible protocol support and traffic routing capabilities.

### Why does Shadowrocket frequently disconnect in the background?
This is usually caused by the iOS system forcibly closing background apps to save battery. Please ensure that "Background App Refresh" permission is enabled for Shadowrocket in the iOS system settings. Also, within Shadowrocket's settings, you can try enabling options like "Compatibility Mode" or "Always Connected" to improve stability. Keeping the app running in the foreground is the most stable method.

<RelatedCards :items='[{"title":"MAC&IOS Download and Usage Guide","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
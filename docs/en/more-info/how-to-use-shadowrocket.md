---
title: "How to use Shadowrocket?"
description: "Shadowrocket is a widely popular proxy tool on the iOS platform. It is powerful and highly configurable, helping users a"
lastUpdated: 1773273205942
---

# How to Use Shadowrocket

## Shadowrocket Beginner's Guide

Shadowrocket is a widely popular proxy tool on the iOS platform. It is powerful and highly configurable, helping users access the global internet and protect their privacy. For first-time users, mastering its basic usage is essential.

### Download and Installation
First, you need a non-China region Apple ID (e.g., US, Hong Kong, etc.) to search for, purchase, and download "Shadowrocket" from the App Store. Please note, this is a paid application. After downloading, you can find its icon on your home screen.

### Basic Configuration and Usage
After successful installation, open the Shadowrocket app. Its core function is to add and enable proxy servers (nodes). This node information is typically provided by your subscribed VPN service provider.

1.  **Add a Node**: Click the "+" icon in the top right corner of the app. You can add nodes in several ways:
    *   **Scan QR Code**: This is the most convenient method. If your service provider offers a node QR code, simply click "Scan QR Code" to import it automatically.
    *   **Manual Input**: Select the "Type" corresponding to your node protocol (e.g., SS, SSR, V2Ray, Trojan, etc.), then fill in the server, port, password, encryption method, and other details one by one.
    *   **Subscription Link**: Many providers offer subscription links. Click "Subscribe", then add the subscription link URL. Shadowrocket will automatically fetch and update the node list.

2.  **Connect and Disconnect**: After adding a node, it will appear in the list on the main screen. Tap the node you want to connect to, then tap the large switch button at the top to establish a connection. Once connected, the switch will turn green, and a VPN icon will appear in the status bar. Tap the switch again to disconnect.

3.  **Global Routing & Proxy Rules**: This is where Shadowrocket shines with its intelligence. At the bottom of the home screen, you can set the "Proxy" rules under "Configuration".
    *   **Proxy**: All traffic goes through the proxy server.
    *   **Configuration** (Recommended): This is the default and most commonly used mode. It decides which websites use the proxy and which connect directly (e.g., domestic websites) based on your configured rule file (like `default.conf`). This effectively saves data and improves speed for accessing local websites.
    *   **Direct**: All traffic bypasses the proxy.

### Advanced Features and Optimization
*   **Rule Configuration**: Click the "Configuration" tab at the bottom. You can import or edit rule files for more granular traffic routing (e.g., routing Netflix through a US node and other traffic through a Japan node).
*   **Latency Test**: Long-press a node in the list and select "Test Real Latency". This provides a more accurate reflection of actual proxy speed than a standard ICMP ping.
*   **HTTPS Decryption** (Use with Caution): This feature can be used for debugging or ad filtering but requires installing and trusting a certificate, which carries some security risks. It is not recommended for average users.

### Usage Notes
*   Ensure your node information is accurate and valid.
*   In "Configuration" mode, the first use may require downloading a rule file from the network. Please ensure you have a stable connection.
*   Be mindful of battery consumption; keeping the proxy enabled long-term may slightly increase power usage.
*   Comply with local laws and regulations and use the tool responsibly.

## Frequently Asked Questions

### What should I do if I can't access the internet after connecting with Shadowrocket?
First, check if the node information is correct and if the node itself is available. Next, check the "Global Routing" setting at the top. If you have it set to "Configuration" mode but the rule file is problematic or missing, it could also cause connectivity issues. Try switching to "Proxy" mode to test. If the problem persists, try restarting the Shadowrocket app or your phone.

### What's the difference between Shadowrocket and Clash? Which one should I use?
Both are excellent proxy tools. Shadowrocket leans more towards being a feature-rich client with intuitive configuration, suitable for manually managing nodes and simple rules. Clash (and its derivatives like Stash) is corely a rule engine based on YAML configuration files, offering more powerful and flexible routing rules. It's ideal for advanced users who prefer a "set once, auto-route" approach but has a slightly steeper learning curve. For iOS beginners, starting with Shadowrocket is easier. If you need more complex multi-node load balancing and granular rules, you can explore Clash later.

### How can I use a similar tool on a Mac computer?
If you need similar functionality on a Mac computer, you can refer to our other detailed guide: [MAC&IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage), which introduces various proxy clients available on macOS systems and their configuration methods.

<RelatedCards :items='[{"title":"MAC&IOS Download and Usage Guide","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
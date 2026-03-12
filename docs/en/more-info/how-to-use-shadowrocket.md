---
title: "How to use Shadowrocket?"
description: "Shadowrocket is a popular proxy tool on the iOS platform. It supports multiple proxy protocols, helping users access the"
lastUpdated: 1773292084644
---

# How to Use Shadowrocket

## Shadowrocket Beginner's Guide

Shadowrocket is a popular proxy tool on the iOS platform. It supports multiple proxy protocols, helping users access the global internet and protect their privacy. For first-time users, mastering its basic usage is essential.

### Core Features and Configuration Principles
The core function of Shadowrocket is to securely forward your network traffic to a target server by configuring a proxy server. It supports mainstream protocols like SS/SSR, Vmess (V2Ray), and Trojan. Before use, you need to obtain a usable server subscription link or manual configuration information, typically provided by your VPN service provider.

The configuration process mainly involves two steps: first, obtaining and importing the server configuration; second, enabling the connection in global or rule mode. Shadowrocket's "Rule" feature is very intelligent, automatically determining which websites go through the proxy and which connect directly, enabling an efficient and data-saving internet experience.

## Detailed Usage Steps

### 1. Acquisition and Installation
First, you need a non-China region Apple ID. Search for "Shadowrocket" in the App Store to purchase and download it. After installation, open the app.

### 2. Adding Server Configuration
This is the most crucial step. You typically have two ways to add a server:
*   **Adding via Subscription Link (Recommended)**: Tap the "+" in the top right corner of the app's home page, select "Type" as "Subscribe". Paste the subscription link provided by your service provider into the "URL" field, then tap "Done" in the top right corner. Shadowrocket will automatically fetch and update the server list from this link.
*   **Manual Configuration**: Similarly, tap the "+" and manually fill in the server address, port, password, encryption method, etc., based on the single-node information provided by your service provider. This method is suitable for users with only a single server node.

### 3. Connection and Usage
After adding a server, you will see the server list on the home page. Tap the server you want to connect to, then tap the large switch button at the top to enable the proxy connection. Once successfully connected, the switch will turn green, and a Shadowrocket VPN icon will appear in the status bar.

*   **Mode Selection**:
    *   **Configuration Mode**: The default and most commonly used mode. It intelligently routes traffic based on the rules you set (e.g., bypassing Mainland China addresses, ad blocking, etc.).
    *   **Proxy Mode**: All traffic goes through the proxy server.
    *   **Direct Mode**: Proxy is off; all traffic connects directly.
    You can switch between these modes in the "Global Routing" section on the home page.

### 4. Advanced Features and Optimization
*   **Rule Settings**: In the "Config" tab, you can manage rule lists. Tapping "Download Configuration from URL" allows you to import more powerful rule sets (like ConnersHua's rules) for more precise traffic routing and ad blocking.
*   **Testing and Switching**: Long-press a server node to select "Test URL" to check the latency and speed of that node, helping you choose the optimal route.
*   **Viewing Logs**: If you encounter connection issues, you can view detailed connection information in the "Logs" tab to help troubleshoot.

## Frequently Asked Questions

### What to do if Shadowrocket fails to connect?
First, check if your network is working normally. Second, confirm that the server configuration information (such as address, port, password) is accurate, correct, and not expired. If using a subscription link, try "Update Subscription". If the problem persists, you can try switching to a different proxy protocol (e.g., from V2Ray to Trojan) or contact your service provider to confirm the server status.

### What's the difference between Shadowrocket and Clash? Which one should I use?
Shadowrocket and Clash are both excellent proxy tools, but they have different architectures. Shadowrocket leans more towards being a powerful, intuitively configured client suitable for most users, especially on iOS. Clash (and its derivatives like ClashX for Mac) focuses on its powerful rule engine and "configuration" files, offering more geek-oriented features and supporting more complex proxy strategies. For Mac and iOS users, you can choose based on your needs. If you want more comprehensive platform usage guidance, you can refer to this article about [Mac & iOS Download and Usage Methods](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage), which covers the selection and basic configuration of different tools.

### Does Shadowrocket affect phone battery life?
Enabling a proxy connection continuously uses network and some computational resources, so it will slightly increase battery consumption compared to having it off, but this is within a normal, acceptable range. To save battery, it's recommended to turn off the top proxy switch when not needed. Using "Configuration Mode" with good rules, allowing domestic apps to connect directly, can also effectively reduce unnecessary proxy traffic and battery consumption.

<RelatedCards :items='[{"title":"MAC&IOS Download and Usage Methods","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
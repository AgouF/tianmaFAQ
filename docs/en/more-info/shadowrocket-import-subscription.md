---
title: "shadowrocket import subscription"
description: "Shadowrocket is a popular proxy tool on the iOS platform, supporting various proxy protocols such as SS, SSR, V2Ray, and"
lastUpdated: 1773203451935
---

# Importing Subscriptions into Shadowrocket

## How to Import Subscription Links into Shadowrocket

Shadowrocket is a popular proxy tool on the iOS platform, supporting various proxy protocols such as SS, SSR, V2Ray, and Trojan. One of its core features is the convenient acquisition and management of proxy server nodes through "subscriptions." Importing a subscription is the first and crucial step in using Shadowrocket.

## Obtaining and Preparing Subscription Links

Before starting the import process, you first need to have a valid subscription link. This link is typically provided by the VPN or proxy service you have purchased. It is a URL starting with `http://` or `https://`. Be sure to obtain it from a trusted service provider and keep it secure; do not disclose it arbitrarily.

**Important Note**: The subscription link is your credential for obtaining the node list. It does not directly provide proxy services but contains an encrypted list of information such as server addresses, ports, passwords, and encryption methods.

## Detailed Import Steps

Please follow these steps to complete the subscription import in Shadowrocket:

1.  **Open Shadowrocket**: Ensure you have downloaded and installed the genuine Shadowrocket app from the App Store.
2.  **Navigate to the Subscription Page**: After opening the app, tap the **"Settings"** icon (gear-shaped) in the bottom navigation bar, then select **"Server Subscriptions"**.
3.  **Add a Subscription**: Tap the **"+"** button in the top-right corner.
4.  **Fill in Subscription Information**:
    *   **URL**: Paste the complete subscription link obtained from your service provider here.
    *   **Remark**: You can set an easily recognizable name for this subscription, such as "My Work Nodes" or the service provider's name.
5.  **Save and Update**: After filling in the details, tap **"Done"** in the top-right corner.
6.  **Manually Update Nodes**: Return to the "Server Subscriptions" page, where you will see the newly added subscription. **Swipe left** on it to reveal the "Update" option and tap it. Alternatively, tap the subscription entry directly and then tap the **"Update"** button on the details page.
7.  **Nodes Take Effect**: After a successful update, all nodes will automatically appear in the server list on Shadowrocket's home page. At this point, you simply need to select a node with low latency and high speed from the home page list and tap the switch in the top-right corner to connect.

### Advanced Settings and Tips

*   **Automatic Update**: On the "Server Subscriptions" page, enable the **"Update on Launch"** option. This way, every time you open the Shadowrocket app, it will automatically check and update the subscription, ensuring you always have the latest node information.
*   **Managing Multiple Subscriptions**: You can add subscription links from different service providers for easy management and switching. Swipe left on a subscription entry to perform actions like "Update," "Edit," or "Delete."
*   **Importing Local Files**: Besides subscription links, Shadowrocket also supports importing configuration files containing single node information (such as `.ss`, `.vmess` links, etc.). You can add them via methods like "Download from URL" or "Import from Clipboard."

## Common Reasons for Import Failure and Troubleshooting

If nodes fail to update after import, please check the following:
1.  **Network Connection**: Ensure your device can access the internet normally. Try switching between Wi-Fi and cellular data.
2.  **Link Validity**: Confirm that the subscription link has not expired and that you have correctly copied the complete link from your service provider's dashboard.
3.  **App Permissions**: During first-time use, ensure you allow Shadowrocket to use the local network and VPN configurations.
4.  **System Time**: Check if your device's system date and time are accurate. Incorrect time settings may cause SSL certificate verification failures.

If you are a Mac user or wish to learn about a more comprehensive guide for tool downloads and basic usage on iOS, you can refer to this detailed tutorial: [MAC & IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage), which covers the complete process from obtaining the app to initial configuration.

## Frequently Asked Questions

### Why is the node list empty after updating the subscription?
This usually indicates that the subscription link itself is invalid, expired, or that a network connection issue occurred during the update. First, check your network, then reconfirm with your service provider whether the subscription link is valid and try manually updating again. If the problem persists, contact your service provider for technical support.

### Can I use multiple subscriptions simultaneously?
Yes, absolutely. Shadowrocket supports adding and managing multiple subscriptions. You can add subscriptions from different service providers for various purposes (e.g., streaming, work, gaming). When connecting, you can choose any node from the combined total node list to connect.

### Is importing a subscription safe?
As long as you obtain the subscription link from a reputable, legitimate service provider and import it through the official Shadowrocket app, the entire process is safe. Shadowrocket itself does not record or upload your subscription information. Avoid using free subscription links from unknown sources to prevent privacy leaks or network security risks.

<RelatedCards :items='[{"title":"MAC&IOS下载以及使用方式","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
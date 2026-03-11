---
title: "shadowrocket subscription link import"
description: "Shadowrocket, a popular proxy tool on the iOS platform, has a core feature of quickly obtaining and updating server node"
lastUpdated: 1773205426744
---

# Shadowrocket Subscription Link Import

## Shadowrocket Subscription Link Import Guide

Shadowrocket, a popular proxy tool on the iOS platform, has a core feature of quickly obtaining and updating server node information through subscription links. A subscription link is a URL containing server configuration details. Users only need to import it once to automatically synchronize node updates from the service provider, eliminating the hassle of manual additions.

### How to Obtain a Subscription Link

Subscription links are typically provided by VPN or proxy service providers. After purchasing a service, you will receive a long string URL starting with protocols like `https://` or `ss://` in your user dashboard or via email. Always obtain the link from a trusted service provider and keep it secure to avoid leakage.

### Detailed Import Steps

Importing a subscription link is a crucial step in configuring Shadowrocket. Please follow these steps:

1.  **Open the Shadowrocket App**: Ensure you have downloaded and installed the official Shadowrocket app from the App Store.
2.  **Navigate to the Subscription Section**: Tap the **"Settings"** tab (gear icon) at the bottom of the app, then select **"Server Subscriptions"**.
3.  **Add a Subscription**: Tap the **"+"** button in the top-right corner.
4.  **Fill in Subscription Information**:
    *   **URL**: Paste the complete subscription link provided by your service provider into this field.
    *   **Remark**: You can assign a custom name, such as "My Service," for easier management later.
5.  **Save and Update**: Tap **"Done"** in the top-right corner. Return to the "Server Subscriptions" list, find the entry you just added, swipe left on it, and tap **"Update"**. Alternatively, you can tap the entry directly and then tap the **"Update"** button at the bottom.
6.  **Enable a Node**: After a successful update, the node list will automatically appear in the "Server" list on the home page. Select a node with low latency and stable speed, and tap the switch button on its right to enable it (it will turn green). For the first connection, the app may request to add a VPN configuration; please tap "Allow".

### Tips and Precautions

*   **Regular Updates**: To ensure you have the latest node information, it's recommended to manually update periodically on the "Server Subscriptions" page or enable the "Auto Update" feature (found in the subscription settings).
*   **Link Invalidity**: If an update fails with a message like "Failed to fetch subscription content," check if the link has expired or contact your service provider to confirm the subscription status.
*   **Managing Multiple Subscriptions**: You can add subscriptions from different service providers for easy switching. Swipe left on an entry to delete or update it.
*   **Security Reminder**: Never share your subscription link in public, as this is equivalent to sharing your service access.

After importing the subscription and successfully connecting, you can enjoy secure internet access. If you encounter difficulties with downloading or basic operations, you can refer to our detailed tutorial: [MAC & IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage), which covers the entire process from obtaining the app to basic configuration.

## Frequently Asked Questions

### Why don't nodes appear after importing the subscription link?
First, ensure you have completed the "Update" operation; merely saving the link does not fetch the nodes. Second, check if your network connection is normal. If the update fails, verify that the subscription link is correct and confirm whether the subscription service itself is active. Sometimes, you need to close and reopen the app.

### How do I set up automatic subscription updates in Shadowrocket?
In Shadowrocket, go to **"Settings" > "Server Subscriptions"**, tap the subscription entry you have added to enter the edit page. Find the **"Auto Update"** option, enable it, and you can set the update frequency (e.g., every 12 or 24 hours). Once enabled, the app will automatically fetch the latest node information in the background at regular intervals.

### What should I do if the subscription link shows "Unable to parse" or "Format error"?
This usually indicates an incorrect or corrupted link address. Try copying the complete link again from your service provider's dashboard, being careful not to miss any characters. Some links may need to be added via the "Import from Clipboard" function (if the link is copied, a prompt may appear when opening Shadowrocket). If the problem persists, please contact your service provider for support.

<RelatedCards :items='[{"title":"MAC&IOS下载以及使用方式","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
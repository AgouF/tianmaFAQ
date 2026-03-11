---
title: "How to import a subscription in Shadowrocket?"
description: "Shadowrocket is a popular proxy tool on iOS devices, and one of its core features is importing subscription links to obt"
lastUpdated: 1773222513510
---

# How to Import Subscriptions in Shadowrocket

## Detailed Tutorial on Importing Subscriptions in Shadowrocket

Shadowrocket is a popular proxy tool on iOS devices, and one of its core features is importing subscription links to obtain and update proxy server nodes. This process is a crucial step for quickly and batch-adding subscription information from your service provider to the Shadowrocket client. Mastering the correct import method can make your network connection experience smoother.

### Preparations
Before starting the import, please ensure you have completed the following preparations:
1. **Shadowrocket Installed**: Make sure you have downloaded and installed the latest version of the Shadowrocket app from the App Store on your iPhone or iPad. If not yet installed, you can refer to our detailed guide: [MAC&IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage).
2. **Obtain a Valid Subscription Link**: This is the most critical step. You need to obtain a dedicated subscription link (usually a URL starting with `http://` or `https://`) from the VPN or proxy service provider you purchased. Keep this link secure and do not disclose it arbitrarily.
3. **Ensure Network Connectivity**: The import process requires an internet connection to download node information.

### Main Import Methods
Shadowrocket offers several convenient import methods. You can choose based on your preference.

#### Method 1: Import via "Scan QR Code" (Most Recommended)
If your service provider provides a QR code for the subscription link, this is the fastest method.
1. Open the Shadowrocket app and tap the "Plus" (+) button in the upper-right corner.
2. In the pop-up menu, select "Scan QR Code."
3. Point your phone's camera at the subscription QR code provided by your service provider.
4. After successful scanning, the app will automatically recognize it and display a confirmation window. Tap "OK" to complete the import. All nodes will automatically appear in the server list.

#### Method 2: Import via "Import from URL"
If you only have the subscription link in text form, use this method.
1. On the Shadowrocket main interface, tap the "Plus" (+) button in the upper-right corner again.
2. Select "Import from URL."
3. In the pop-up input box, paste the subscription link you copied in its entirety.
4. Tap "Done" in the upper-right corner. Shadowrocket will automatically download and parse the subscription content, and a "Success" prompt will appear upon completion.

#### Method 3: Import via "Clipboard"
If the subscription link is already copied to the clipboard, Shadowrocket can intelligently recognize it.
1. Ensure the subscription link is copied to the system clipboard (e.g., long-press the link in Safari and select "Copy").
2. Open the Shadowrocket app directly. A prompt will usually appear immediately, asking whether to add servers from the clipboard.
3. Tap "OK" to quickly import.

#### Method 4: Open via Safari Browser
You can also directly click the subscription link anywhere (e.g., email, notes, Telegram).
1. Click the subscription link, and it will open by default in the Safari browser.
2. After the page loads, a prompt will usually appear: "Open link in Shadowrocket?" Tap "Open."
3. The app will switch to Shadowrocket and complete the import automatically.

### Post-Import Operations and Notes
- **Update Subscription**: Server node information may be updated (e.g., password or address changes). In Shadowrocket, swipe left on the added subscription configuration and tap "Update" to manually fetch the latest nodes. Regular updates are recommended.
- **Select Node**: After a successful import, all nodes will be listed on the "Servers" page. Tap any node to attempt a connection. It is generally recommended to choose nodes with lower latency (ping values).
- **Security Reminder**: Always obtain subscriptions from trusted service providers. Avoid using free subscriptions from unknown sources to prevent privacy leaks or network security risks.
- **Compatibility**: Ensure your subscription link format is compatible with Shadowrocket (typically supports standard subscription formats for protocols like SS, SSR, Vmess, Trojan, etc.).

## Frequently Asked Questions

### Why is the node list empty after importing a subscription?
This usually occurs for several reasons:
1. **Subscription Link Invalid**: Your subscription may have expired, or the link itself is incorrect. Confirm the validity of the link with your service provider.
2. **Network Issues**: Unstable network connection during import may have prevented successful download of node information. Switch to a stable network (e.g., Wi-Fi) and try swiping left on the subscription configuration to select "Update."
3. **Incompatible Link Format**: In rare cases, the subscription format provided by the service provider may not be directly supported by Shadowrocket. You can try contacting your service provider to inquire if there is a dedicated subscription link for Shadowrocket.

### How to update a subscription and delete old subscription configurations?
- **Update a Single Subscription**: On the "Servers" page in Shadowrocket, find the subscription configuration you added (usually displayed as the subscription name or the beginning of the URL). Swipe left on it, and options for "Update" and "Delete" will appear. Tap "Update" to fetch the latest nodes.
- **Delete a Subscription**: Similarly, swipe left and tap "Delete" to remove the subscription configuration and all its nodes. This will not affect other subscriptions you have set up. Regularly cleaning up invalid or unused subscriptions is a good practice.

<RelatedCards :items='[{"title":"MAC&IOS Download and Usage Guide","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
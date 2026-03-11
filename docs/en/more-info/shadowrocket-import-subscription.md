---
title: "How to import a subscription in Shadowrocket?"
description: "Shadowrocket is a popular proxy tool on iOS devices, and one of its core features is importing subscription links to obt"
lastUpdated: 1773250746969
---

# How to Import Subscriptions in Shadowrocket

## Detailed Steps for Importing Subscriptions in Shadowrocket

Shadowrocket is a popular proxy tool on iOS devices, and one of its core features is importing subscription links to obtain and update proxy server nodes. This process is the first and crucial step in using Shadowrocket. Below are detailed introductions to several mainstream and secure import methods.

### Method 1: Direct Import via Subscription Link (Most Common)
This is the quickest method, suitable when you already have a subscription link (usually a URL starting with `http://` or `https://`).
1.  **Copy the Subscription Link**: Obtain the complete subscription link from your service provider and ensure it is copied to your clipboard.
2.  **Open Shadowrocket**: Launch the Shadowrocket app on your iPhone or iPad.
3.  **Tap "Add Subscription"**: On the app's home screen, there is usually a "+" icon or a button labeled "Add Subscription" in the top-left corner. Tap it.
4.  **Paste and Confirm**: In the URL input field that appears, paste the copied subscription link. You can fill in the "Remark" field below with a recognizable name (e.g., "My Service").
5.  **Complete Import**: Tap "Done" in the top-right corner. Shadowrocket will automatically start downloading node configurations from the link. Once successful, all nodes will appear in the server list on the home screen.

### Method 2: Import via QR Code Scan
Many service providers offer subscriptions in QR code format, which is more convenient and avoids manual input errors.
1.  **Open Scan Function**: On the Shadowrocket home screen, tap the "Scan" icon in the top-right corner (a button shaped like a QR code).
2.  **Grant Camera Permission**: If it's your first time using this feature, allow Shadowrocket to access your camera.
3.  **Scan the QR Code**: Point your phone's camera at the subscription QR code provided by your service provider.
4.  **Automatic Processing**: After a successful scan, Shadowrocket will automatically recognize the subscription information in the QR code and pop up a confirmation window. Simply tap "Done" or "OK" to import the nodes.

### Method 3: Import via Configuration File
Sometimes, you may receive a configuration file in formats like `.conf` or `.yaml`.
1.  **Obtain the Configuration File**: Save the configuration file to your iOS device's "Files" app or download it via another app (such as Mail or Safari).
2.  **Open with Another App**: In the app where the file is located, find the configuration file and tap the "Share" or "Open with Another App" button.
3.  **Select Shadowrocket**: In the app list of the share menu, find and select "Copy to 'Shadowrocket'."
4.  **Import Success**: Shadowrocket will automatically open and import the configuration, and the nodes will be added to your list.

**Important Notes**:
*   **Subscription Source**: Always obtain subscriptions from trusted service providers to ensure network security and connection stability.
*   **Update Subscriptions**: Server nodes may be updated or changed. You can long-press the subscription name on the home screen and select "Update" to manually fetch the latest nodes. Regular updates are recommended.
*   **Compatibility**: Ensure that your subscription link or configuration file is compatible with Shadowrocket's protocols.

If you are using such a tool on an Apple device for the first time and have questions about installation and basic operations, you can refer to our detailed guide: [MAC&IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage), which covers the complete process from obtaining the app to initial setup.

## Frequently Asked Questions

### What to Do If the Node List Is Empty After Importing a Subscription?
This usually happens for several reasons:
1.  **Invalid Subscription Link**: The link you copied may have expired or be incorrect. Return to your service provider's dashboard to check and recopy the correct link.
2.  **Network Issues**: For the initial import, your device needs to be able to access the server hosting the subscription link. Check your current network connection, or try switching networks (e.g., from Wi-Fi to cellular data) and then long-press the subscription name to select "Update."
3.  **Unsupported Format**: In rare cases, the subscription content format may not be parsed by Shadowrocket. Contact your service provider to confirm if their subscription supports the Shadowrocket client.

### How to Update and Delete Subscriptions?
*   **Update Subscription**: On the Shadowrocket home screen, find the name of the subscription you added and **swipe left** on it. An "Update" option will appear. Tap it to manually update the nodes. You can also tap the subscription name to enter the details page and find the "Update" button at the bottom.
*   **Delete Subscription**: Similarly, **swipe left** on the subscription name to reveal the "Delete" option. Tap it to remove the entire subscription and all its nodes. If you only want to delete a specific node, you can swipe left on that individual node in the node list to delete it.

<RelatedCards :items='[{"title":"MAC&IOS Download and Usage Guide","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
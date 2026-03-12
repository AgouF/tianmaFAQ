---
title: "How to import a subscription link in Shadowrocket?"
description: "Shadowrocket is a popular proxy tool on iOS devices, and one of its core features is obtaining and updating proxy server"
lastUpdated: 1773310152325
---

# How to Import Subscription Links in Shadowrocket

## Detailed Tutorial on Importing Subscription Links in Shadowrocket

Shadowrocket is a popular proxy tool on iOS devices, and one of its core features is obtaining and updating proxy server nodes through subscription links. Importing a subscription link is the first step in using Shadowrocket and is crucial for ensuring a stable network connection. Below are detailed introductions to several mainstream and secure import methods.

### Method 1: Direct Import via Clipboard (Most Common)
This is the simplest and quickest method, suitable when you already have a subscription link (usually a URL starting with `http://` or `https://`).
1.  **Copy the Link**: First, long-press the subscription link you received (which may come from an email, document, or website) and select "Copy." Ensure the entire link is copied completely.
2.  **Open Shadowrocket**: Return to the home screen and open the Shadowrocket app.
3.  **One-Click Import**: **When Shadowrocket detects a recognizable subscription link in the clipboard, a notification banner will automatically appear at the top of the screen**. Simply tap this banner.
4.  **Confirm Addition**: Shadowrocket will automatically navigate to the server node list page and pop up a confirmation window. Tap "OK" or "Confirm," and the app will begin downloading node information from the link.
5.  **Completion**: After the download is complete, new servers will appear in the node list. You usually need to manually select one of the nodes and then toggle the connection switch at the top.

### Method 2: Import via QR Code Scan
This method is very convenient if the subscription link is provided as a QR code image.
1.  On the Shadowrocket main interface, tap the "+" button in the top-right corner.
2.  From the pop-up menu, select "Scan QR Code."
3.  Point your phone's camera at the provided subscription QR code.
4.  After a successful scan, it will automatically recognize the link and pop up an addition confirmation window. The subsequent steps are the same as in Method 1.

### Method 3: Manual Subscription Addition
Use this method if automatic recognition fails or if you want more precise management.
1.  On the Shadowrocket main interface, tap the "+" button in the top-right corner.
2.  Select "Type" as "Subscribe."
3.  In the "URL" field, paste or manually enter your subscription link.
4.  (Optional) Fill in an easily recognizable name in the "Remark" field, such as "My Service A."
5.  Tap "Done" in the top-right corner, and Shadowrocket will begin fetching the subscription.

### Important Tips and Notes
*   **Link Security**: Always obtain subscription links from trusted service providers. Do not use links from unknown sources to avoid security risks.
*   **Updating Subscriptions**: Server nodes may be updated, become invalid, or change. You need to regularly update your subscription to get the latest nodes. On the node list page in Shadowrocket, **pull down the screen to manually update the subscription** (a refresh icon will appear). You can also enable "Auto Update" in the subscription settings.
*   **Managing Multiple Subscriptions**: Shadowrocket supports adding multiple subscriptions. You can manage them (enable, disable, or delete) under "Settings" -> "Server Subscriptions."
*   **Compatibility**: Ensure your version of Shadowrocket supports the subscription link format. Keeping the app updated to the latest version is a good practice.
*   **Obtaining the Client**: If you are a first-time user, you need to obtain the Shadowrocket app first. For specific download and installation methods, you can refer to this detailed guide: [MAC&IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage).

After successfully importing the subscription and connecting, you can enjoy a secure and convenient network access experience based on your rule settings.

## Frequently Asked Questions

### Why doesn't Shadowrocket pop up an import prompt after I copy the link?
This could be due to several reasons:
1.  The copied text is not a complete subscription link format recognized by Shadowrocket (e.g., it contains line breaks or missing characters).
2.  The Shadowrocket app is completely closed in the background. Try reopening the app.
3.  System clipboard permission issues. Try restarting Shadowrocket or your phone. If the prompt still doesn't appear, it's recommended to use Method 3 (Manual Addition) to add the link.

### After importing the subscription, it shows "Update Failed" or "Failed to Fetch Configuration." What should I do?
This usually indicates an issue with the subscription link itself:
1.  **Link Invalid**: The subscription link may have expired or been disabled by the service provider. Contact your service provider to confirm the link's validity.
2.  **Network Issue**: The current network environment cannot access the server hosting the subscription link. Try switching networks (e.g., from Wi-Fi to cellular data) and then updating.
3.  **Incorrect Link Format**: Double-check if the link is completely correct, especially for long links, which are prone to missing characters at the beginning or end during copying.

### Can I import multiple subscription links at the same time? How do I switch between them?
Absolutely. Shadowrocket supports adding multiple subscriptions. All imported nodes are merged and displayed in a single list. You can distinguish them by node names or groups. To manage a specific subscription individually (e.g., update or disable it separately), go to Shadowrocket's "Settings" -> "Server Subscriptions." Here, you can see a list of all added subscriptions and manage them independently.

<RelatedCards :items='[{"title":"MAC&IOS Download and Usage Guide","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
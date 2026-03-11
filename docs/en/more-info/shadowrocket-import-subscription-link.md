---
title: "How to import a subscription link in Shadowrocket?"
description: "Shadowrocket is a popular proxy tool on iOS devices, and one of its core features is obtaining and updating proxy server"
lastUpdated: 1773207472840
---

# How to Import Subscription Links in Shadowrocket

## Complete Guide to Importing Subscription Links in Shadowrocket

Shadowrocket is a popular proxy tool on iOS devices, and one of its core features is obtaining and updating proxy server nodes through subscription links. Importing a subscription link is the first step in using Shadowrocket and a key operation to ensure proper network connectivity. Below are detailed introductions to several mainstream and secure import methods.

### Method 1: Direct Import via Clipboard (Most Common)
This is the quickest method, suitable when you already have the subscription link copied.
1.  **Copy the Subscription Link**: First, ensure you have obtained the complete subscription link from your service provider and copied it to your device's clipboard.
2.  **Open Shadowrocket**: Launch the Shadowrocket app on your iPhone or iPad.
3.  **Go to the Subscription Page**: Tap the **"Settings"** tab at the bottom of the app, then select **"Server Subscriptions"**.
4.  **Paste and Add**: Tap the **"+"** button in the top-right corner. Shadowrocket will automatically detect the link in the clipboard and pop up a confirmation window. You can also manually paste the link into the "URL" field.
5.  **Complete Addition**: You can give the subscription an easily recognizable name (e.g., "My Service") in the "Remark" field, then tap **"Done"** in the top-right corner.
6.  **Update Nodes**: After successful addition, return to the "Server Subscriptions" page and tap the **"Update"** button next to the newly added subscription. Shadowrocket will then fetch node information from the link, and the node list will appear in the "Server" option on the home page.

### Method 2: Import via QR Code Scan
This method is very convenient if the subscription link is provided as a QR code.
1.  **Open the Scan Function**: On the Shadowrocket home page, tap the scan icon in the top-right corner (a small dot inside a square frame).
2.  **Scan the QR Code**: Point your phone's camera at the QR code containing the subscription link.
3.  **Automatic Redirect and Addition**: After a successful scan, the app will automatically redirect to the "Add Subscription" interface with the link already filled in. You just need to add a remark, tap "Done," and remember to go back and update it.

### Method 3: Import via Configuration File (URL Scheme)
Some service providers offer dedicated configuration links starting with something like `shadowrocket://add/sub://`.
1.  **Tap the Configuration Link**: Directly tap this special link provided by the service provider in Safari or another app.
2.  **Redirect and Confirm**: The system will ask if you want to open "Shadowrocket." Tap **"Open"**.
3.  **Automatic Completion**: Shadowrocket will automatically launch and complete the subscription addition, usually updating the nodes once automatically. You can view and manage it in the "Server Subscriptions" settings.

**Important Notes**:
*   **Update Promptly**: Subscription links may have expiration dates. Regularly update manually on the "Server Subscriptions" page or enable the "Auto Update" feature to get the latest nodes.
*   **Link Security**: Always obtain subscription links from trusted service providers to avoid privacy leaks.
*   **Troubleshooting**: If the update fails, check if your network connection is normal and if the subscription link is still valid (links can sometimes expire). You can try pasting the link into a browser to see if it downloads a text file to verify the link's validity.

For guidance on using similar tools on Mac computers, you can refer to this detailed guide: [MAC&IOS Download and Usage Methods](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage), which covers cross-device usage tips.

## Frequently Asked Questions

### Why is my node list still empty after updating the subscription?
This usually happens for several reasons:
1.  **Subscription Link Invalid**: Your subscription may have expired. Contact your service provider to confirm the link's validity.
2.  **Network Issues**: Poor network connection during the update. Try switching networks (e.g., from Wi-Fi to cellular data) and update again.
3.  **Incomplete Link Copy**: Ensure the copied link has no leading/trailing spaces or missing characters. The safest method is to manually long-press the URL field to paste when "Adding Subscription."

### Can I import multiple subscription links?
Yes. Shadowrocket supports adding multiple subscription links. You just need to repeat the addition process described above. Nodes from all subscriptions will be aggregated in the "Server" list on the home page. You can manage (edit, delete, update individually) each subscription in the "Server Subscriptions" settings page.

### Is importing a subscription link safe? Will it leak my information?
**Safety primarily depends on the source of the subscription link.** Links obtained from正规, reputable service providers are safe, and the import process itself is a local operation. However, never import subscription links from unknown or free sources, as they may contain malicious configurations leading to traffic interception or privacy leaks. Always choose trusted service providers.

<RelatedCards :items='[{"title":"MAC&IOS下载以及使用方式","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
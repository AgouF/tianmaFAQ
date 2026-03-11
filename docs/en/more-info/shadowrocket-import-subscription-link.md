---
title: "How to import a subscription link in Shadowrocket?"
description: "Shadowrocket is a popular proxy tool on iOS devices, and one of its core functions is to obtain and manage proxy server "
lastUpdated: 1773269622119
---

# How to Import Subscription Links in Shadowrocket

## Complete Guide to Importing Subscription Links in Shadowrocket

Shadowrocket is a popular proxy tool on iOS devices, and one of its core functions is to obtain and manage proxy server nodes through subscription links. Importing a subscription link is the first step in using Shadowrocket and is key to connecting to network services. Below are detailed introductions to several mainstream and secure import methods.

### Method 1: Import via "Scan QR Code" (Most Recommended)
This is the fastest and least error-prone method, especially suitable for QR codes obtained from service providers or friends.
1. Open the Shadowrocket app and ensure you are on the "Servers" tab on the homepage.
2. Tap the "+" button in the upper-right corner of the screen.
3. In the pop-up menu, select "Scan QR Code."
4. Point your phone's camera at the QR code containing the subscription link. Shadowrocket will automatically recognize and read the link.
5. After successful recognition, the app will prompt "Download Successful." At this point, all node information has been automatically added to your server list.

**Advantages**: No manual input required, avoiding link copying errors; efficient and secure.

### Method 2: Manually Add via "Import from URL"
If you have obtained a text-based subscription link (usually starting with `https://`), you can use this method.
1. Similarly, on the "Servers" page, tap the "+" button in the upper-right corner.
2. Select "Import from URL" from the menu.
3. A text box will pop up. **Long-press the text box**, select "Paste," and paste the subscription link address you copied earlier. **It is strongly recommended to use paste to avoid character errors from manual input.**
4. Tap "Done" in the upper-right corner. Shadowrocket will begin fetching subscription information from the link address.
5. After successful retrieval, the node list will update automatically.

### Method 3: One-Click Import via Safari Browser
Many service provider websites offer a "one-click import" feature, which essentially utilizes iOS's URL Scheme.
1. Open the webpage providing the subscription link using Safari on your iPhone.
2. Find the "One-Click Import to Shadowrocket" or similar button on the webpage and tap it.
3. A pop-up will ask, "Open this page in 'Shadowrocket'?" Tap "Open."
4. The Shadowrocket app will automatically launch and begin processing the subscription link to import nodes.

### Important Tips and Follow-Up Settings
*   **Link Security**: Always obtain subscription links from trusted sources to avoid privacy leaks.
*   **Update Subscription**: Server nodes may be updated, become invalid, or change. You need to regularly update your subscription to get the latest nodes. On the "Servers" page in Shadowrocket, **swipe down on the screen** to manually refresh the subscription. You can also enable "Auto Update" in "Settings" > "Server Subscriptions."
*   **Connectivity Test**: After importing nodes, it is recommended to tap a node and select "Test Connectivity" or "Latency Test" to check the current network quality of that node.
*   **Enable Proxy**: After importing and testing nodes, return to the Shadowrocket homepage, select a node with low latency, and tap the large switch button at the top to enable the proxy connection. When the button turns green and the VPN icon appears in the status bar, the connection is successful.

For Mac users, the configuration process and concepts are similar, but the interface differs. You can refer to our other detailed guide: [MAC&IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage), which includes steps for configuring Shadowrocket on macOS.

## Frequently Asked Questions

### Why is the node list empty or does it show a failure after importing the subscription?
This usually has several reasons:
1.  **Subscription link has expired or is invalid**: Contact your service provider to confirm the link's validity.
2.  **Network issues**: Try switching networks (e.g., from Wi-Fi to cellular data) and then pull down to refresh the subscription again.
3.  **Incomplete link copy**: Ensure the copied link has no leading or trailing spaces and is complete and accurate. When using "Import from URL," always use the paste function.
4.  **Unsupported subscription format**: In rare cases, the link may contain a special format incompatible with Shadowrocket.

### Can I import multiple subscription links simultaneously?
Yes. Shadowrocket supports adding multiple subscription sources. You simply need to follow the "Import from URL" method described above to add different subscription links multiple times. Nodes from all subscriptions will be merged and displayed in the server list. You can manage (edit or delete) each added subscription in "Settings" > "Server Subscriptions."

### Will importing a subscription leak my password or other information?
A standard subscription link itself only contains server configuration information and will not directly leak your main account password. However, the subscription link itself is a string of credentials, and **anyone who obtains this link can use the corresponding service**. Therefore, you must keep your subscription link secure as you would a password and never share or leak it publicly.

<RelatedCards :items='[{"title":"MAC&IOS下载以及使用方式","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
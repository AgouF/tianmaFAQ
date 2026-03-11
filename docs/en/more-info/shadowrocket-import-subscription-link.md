---
title: "How to import a subscription link in Shadowrocket?"
description: "Shadowrocket is a popular proxy tool on iOS devices, and one of its core features is obtaining and managing proxy server"
lastUpdated: 1773215907608
---

# How to Import Subscription Links in Shadowrocket

## How to Import Subscription Links in Shadowrocket

Shadowrocket is a popular proxy tool on iOS devices, and one of its core features is obtaining and managing proxy server nodes through subscription links. Importing a subscription link is the first step in using Shadowrocket and is key to connecting to network services. Although the process is straightforward, clear guidance is essential for new users.

### Detailed Import Steps

Follow these steps to successfully import a subscription link into Shadowrocket:

1.  **Obtain the Subscription Link**: First, you need to obtain a valid subscription link from your purchased VPN or proxy service provider. This is usually a long URL starting with `http://` or `https://`. Keep it secure and do not share it arbitrarily.

2.  **Open the Shadowrocket App**: Find and tap the Shadowrocket icon on your iPhone or iPad to launch the app.

3.  **Navigate to the Subscription Management Page**:
    *   After the app launches, you will see several tabs at the bottom. Tap the **"Settings"** (gear icon) on the far right.
    *   On the Settings page, find and tap the **"Subscriptions"** option.

4.  **Add a Subscription**:
    *   On the Subscriptions page, tap the **"+"** (plus) button in the upper right corner.
    *   A window for adding a subscription will pop up. Simply paste the complete subscription link obtained from your service provider into the **"URL"** field.
    *   The **"Remark"** field can be filled with a name for easy identification, such as "My Main Node" or the provider's name. This is optional but recommended for easier management.
    *   Other options like "Update Interval" can be left at their default values.
    *   Finally, tap **"Done"** in the upper right corner.

5.  **Update the Subscription and Enable It**:
    *   After adding, you will return to the subscription list page, where you can see the subscription you just added.
    *   To immediately fetch node information, **swipe left** on the subscription entry you just added and tap **"Update"**. Alternatively, you can tap the subscription to enter its details page and manually tap "Update".
    *   After a successful update, return to Shadowrocket's home page (the first tab labeled "Home"). You should see a list of all server nodes obtained from the subscription.
    *   Select a node you want to connect to and tap the switch in the upper right corner to start the connection.

### Important Tips and Troubleshooting

*   **Link Validity**: Ensure the subscription link you pasted is completely correct and has not expired. If the link is invalid, the update will fail.
*   **Network Environment**: When updating the subscription for the first time, ensure your device has a stable network connection. Sometimes, in specific network environments, you may need to connect to the network through other means first to successfully update.
*   **Update Failure**: If the update fails, check if the link is correct and try switching networks (e.g., from Wi-Fi to cellular data) before updating again.
*   **Node Management**: After successful import, you can perform operations like speed testing, sorting, and grouping on the nodes from the home page to help you select the optimal route.

For information on how to use similar proxy tools on Mac computers, you can refer to our other detailed guide: [MAC&IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage), which covers usage tips across devices.

## Frequently Asked Questions

### Why is the node list still empty after I click "Update Subscription"?
This usually happens for a few reasons: 1) The subscription link itself is invalid or incorrect—confirm with your service provider; 2) The current network cannot access the subscription server—try switching network environments; 3) Shadowrocket may require network permissions upon first use—check iOS "Settings" > "Shadowrocket" and ensure the "Wireless Data" option is enabled. It is recommended to test the link by pasting it into your phone's browser (it may display as a string of code). If it doesn't open, it is likely a link or network issue.

### Do I need to re-import the subscription link regularly?
No. Once successfully imported, Shadowrocket will automatically update node information in the background based on the "Update Interval" you set (default is usually 24 hours). You only need to re-add a new subscription link if your service provider informs you that the link has changed or if you manually clear the app data. Normally, you just need to select and use nodes from the list.

### Can I import multiple subscription links?
Yes. Shadowrocket supports adding multiple subscriptions. You can add subscription links from different service providers on the "Settings" > "Subscriptions" page and label them with distinct names. After updating, nodes from all subscriptions will be aggregated and displayed in the node list on the home page. You can distinguish them by node names or groups for easier management of multiple routes.

<RelatedCards :items='[{"title":"MAC&IOS下载以及使用方式","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
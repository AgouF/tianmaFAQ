---
title: "How to import a subscription link in Shadowrocket?"
description: "Shadowrocket is a popular proxy tool on iOS devices, and one of its core features is obtaining and updating server node "
lastUpdated: 1773262956250
---

# How to Import Subscription Links in Shadowrocket

## Complete Guide to Importing Subscription Links in Shadowrocket

Shadowrocket is a popular proxy tool on iOS devices, and one of its core features is obtaining and updating server node information through "subscription links." A subscription link is a URL address provided by a service provider, containing all necessary information such as server configurations and encryption methods. Correctly importing a subscription link is the first step to using Shadowrocket for accessing the internet.

### Preparations
Before starting the import process, ensure you have completed the following two steps:
1.  **Have a valid subscription link**: You need to purchase a service from a reliable VPN or proxy provider, who will provide a dedicated subscription link (usually a URL starting with `http://` or `https://`).
2.  **Have the Shadowrocket app installed**: You need to purchase and download the Shadowrocket app from a non-China App Store (such as the US or Hong Kong store). If you haven't installed it yet, you can refer to our other detailed tutorial: [MAC&IOS Download and Usage Guide](/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage), which includes steps for obtaining and installing the app.

### Detailed Import Steps
Follow the steps below. The entire process usually takes less than a minute.

1.  **Copy the subscription link**:
    *   Find your subscription link from your service provider's backend, email, or user center.
    *   Long-press the link and select "Copy" from the pop-up menu to copy the link to your clipboard.

2.  **Open Shadowrocket and add a subscription**:
    *   Open the Shadowrocket app on your iPhone or iPad.
    *   Tap the "Home" or "Servers" tab in the bottom navigation bar.
    *   Tap the "+" button in the top-right corner of the screen.
    *   From the pop-up menu, select "**Import from URL**."

3.  **Paste and confirm**:
    *   A window will automatically pop up, and your previously copied subscription link will be pasted into the URL field. If it doesn't paste automatically, long-press the input field and select "Paste."
    *   After confirming the link is correct, tap "Done" or "OK" in the top-right corner.

4.  **Update server nodes**:
    *   After successful import, you will see a new subscription group (usually named after the service provider).
    *   Tap this subscription group to enter its details page.
    *   To fetch the latest server list, tap the "**Update**" button at the bottom of the page. Shadowrocket will retrieve the latest node configuration information from the address specified in the subscription link.

5.  **Select a node and connect**:
    *   After updating, return to the Shadowrocket home page.
    *   From the server list, select the node you want to connect to (usually, the lower the latency, the better).
    *   Finally, tap the large circular "Switch" button at the top of the home page to enable the proxy connection. When the button turns green and displays "Connected," the import and connection are successful.

### Tips and Precautions
*   **Regular Updates**: Service providers may update node information, so it's recommended to regularly enter the subscription group and tap "Update" to get the latest list.
*   **Backup Links**: Some providers offer multiple backup subscription links. If one fails, try importing another.
*   **Security Reminder**: Keep your subscription link secure and do not share it arbitrarily, as it is directly linked to your account and service.
*   **Troubleshooting Import Failures**: If the import fails, check: 1) Whether your network connection is stable; 2) Whether the subscription link has expired or is invalid; 3) Whether you copied the complete link accurately.

## Frequently Asked Questions

### What should I do if the node list is empty after importing the subscription link?
This usually has a few causes: First, check your network connection and try tapping the "**Update**" button at the bottom of the subscription group again. Second, the subscription link itself may be invalid. Contact your service provider to confirm the link's validity. Finally, try completely closing and reopening the Shadowrocket app, then perform the update again.

### Can I import subscription links from multiple different service providers?
Absolutely. Shadowrocket supports adding multiple subscriptions. Simply repeat the "Add Subscription" steps above to import links from different providers. In the server list on the home page, you can see nodes from all subscriptions and switch between them freely. This is convenient for users who need backup options or need to access resources from different regions.

### What is the difference between a subscription link and manually adding servers?
A subscription link is an automated method. You only need to maintain one link. When the service provider updates node information, ports, passwords, etc., you can sync all changes with one tap on "Update," which is very convenient. Manually adding servers requires you to input all parameters such as server address, port, password, and encryption method one by one, and any subsequent changes need to be made manually. For most users, using subscription links is highly recommended.

<RelatedCards :items='[{"title":"MAC&IOS Download and Usage Guide","link":"/network/vpn/how-to-download-and-install-tools/mac-ios-download-usage"}]' />
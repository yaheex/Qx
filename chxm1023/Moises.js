/*************************************

项目名称：Moises-音乐人应用
下载地址：https://t.cn/A6pzDxjh
更新日期：2024-10-13




**************************************

[rewrite_local]
^https?:\/\/api\.moises\.ai\/graphql url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Moises.js

[mitm]
hostname = api.moises.ai

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data.user.subscription = {
  ...chxm1023.data.user.subscription,
  "isPremium": true,
  "details": {
    ...chxm1023.data.user.subscription.details,
    "providerGateway": "Apple Pay",
    "providerName": "Apple Subscription Service",
    "planCycle": "lifetime"
  },
  "isPro": true,
  "availableCredits": 999,
  "plan": "Pro",
  "subscriptionType": "individual",
  "__typename": "UserSubscription"
};

$done({ body: JSON.stringify(chxm1023) });
/*************************************

项目名称：Moises-音乐人应用
下载地址：https://t.cn/A6pzDxjh
更新日期：2024-10-13
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.moises\.ai\/graphql url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Moises.js

[mitm]
hostname = api.moises.ai

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data.user.subscription = {
  ...yahe1023.data.user.subscription,
  "isPremium": true,
  "details": {
    ...yahe1023.data.user.subscription.details,
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

$done({ body: JSON.stringify(yahe1023) });
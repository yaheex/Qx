/*************************************

项目名称：Slidebox相册清理
下载地址：https://too.st/6b4
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/.*-slidebox-ios-prod\.cloudfunctions\.net\/api_v1 url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/slidebox.js

[mitm]
hostname = *-slidebox-ios-prod.cloudfunctions.net

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023 = {
  "data" : {
    "env" : {
      "projectId" : "slidebox-ios-prod",
      "region" : "asia-east2",
      "function" : "api_v1",
      "realm" : "prod"
    },
    "appStoreRecord" : {
      "purchases" : [
        {
          "productId" : "co.slidebox.iap.apple.fullversion"
        }
      ],
      "subscriptions" : [

      ],
      "validatedTimestampMs" : "1699365288625",
      "bundleId" : "co.slidebox.Slidebox"
    }
  }
};

$done({body : JSON.stringify(yahe1023)});

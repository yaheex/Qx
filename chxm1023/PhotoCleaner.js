/*************************************

项目名称：照片清理工具Photo Cleaner
下载地址：https://t.cn/A6qK2YhO
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/PhotoCleaner.js

[mitm] 
hostname = api.revenuecat.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023 = {
  "request_date_ms" : 1674744915209,
  "request_date" : "2023-01-26T14:55:15Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-01-26T14:55:13Z",
    "original_application_version" : null,
    "entitlement" : {

    },
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.monocraft.photocleaner.lifetime.1" : {
        "warning" : "仅供学习，禁止转载或售卖",
        "wechat" : "yahe1023",
        "purchase_date" : "2022-09-09T09:09:09Z",
        "original_purchase_date" : "2022-09-09T09:09:09Z",
        "feedback" : "yahe1023",
        "ownership_type" : "PURCHASED"
      }
    },
    "entitlements" : {
      "premium" : {
        "wechat" : "yahe1023",
        "ownership_type" : "PURCHASED",
        "product_identifier" : "com.monocraft.photocleaner.lifetime.1",
        "feedback" : "yahe1023",
        "warning" : "仅供学习，禁止转载或售卖",
        "original_purchase_date" : "2022-09-09T09:09:09Z",
        "purchase_date" : "2022-09-09T09:09:09Z"
      }
    },
    "original_purchase_date" : null,
    "original_app_user_id" : "$RCAnonymousID:9f61ce5d455344f8896af4de20e9f2f1",
    "last_seen" : "2023-01-26T14:55:13Z"
  }
};

$done({body : JSON.stringify(yahe1023)});

/*************************************

项目名称：Pixelup AI照片增强器
下载地址：https://t.cn/A60PK5CX

**************************************

[rewrite_local]
^https?:\/\/receipt-verifier\.cdwapi\.com\/receipt url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Pixelup.js

[mitm]
hostname = receipt-verifier.cdwapi.com

*************************************/


var yahee = JSON.parse($response.body);

yahee = {
  "status": {
    "message": "Success",
    "code": 200
  },
  "payload": {
    "is_intro_offer": true,
    "latest_transaction_id": "300001314520000",
    "active": true,
    "is_renewal": false,
    "expires_at": 4092599349000,
    "auto_renew_status": "1",
    "grace_expires_at": 4092599349000,
    "product_id": "pixelup.pro.freetrial.1year.t1",
    "is_in_grace": true,
    "started_at": 1666666666666,
    "purchased_product_identifiers": [
      "pixelup.pro.freetrial.1year.t1"
    ],
    "latest_transaction_time": 1666666666666,
    "subscription_id": "300001314520000",
    "is_trial": true,
    "is_family_share": true
  }
};

$done({body : JSON.stringify(yahee)});
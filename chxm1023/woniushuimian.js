/*************************************

项目名称：蜗牛睡眠
下载地址：https://t.cn/A6NBzdYh
更新日期：2024-12-07




**************************************

[rewrite_local]
^https?:\/\/snailsleep\.net\/snail\/v\d\/profile\/get.+ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/woniushuimian.js

[mitm]
hostname = snailsleep.net

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "status" : 200,
  "message" : "OK",
  "result" : {
    "points" : 0,
    "updated" : 1684116994159,
    "expired" : false,
    "expiresRAD" : 4092599349000,
    "offerPeriod" : false,
    "expires" : 4092599349000,
    "type" : "SNAIL",
    "dreamsTotal" : 10,
    "level" : 1,
    "unique" : "646195d5bc81021ffed65e71",
    "lifelong" : true,
    "radexpired" : false,
    "dreamsUsed" : 0
  }
};

$done({body : JSON.stringify(chxm1023)});

/*************************************

项目名称：蜗牛睡眠
下载地址：https://t.cn/A6NBzdYh

**************************************

[rewrite_local]
^https?:\/\/snailsleep\.net\/snail\/v\d\/profile\/get.+ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/woniushuimian.js

[mitm]
hostname = snailsleep.net

*************************************/


var yahee = JSON.parse($response.body);

yahee = {
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
    "links" : [

    ],
    "dreamsUsed" : 0
  },
  "links" : [

  ]
};

$done({body : JSON.stringify(yahee)});
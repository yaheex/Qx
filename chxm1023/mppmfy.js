/*************************************

项目名称：麦片屏幕翻译
下载地址：https://too.st/9uj
更新日期：2024-04-15




**************************************

[rewrite_local]
^https?:\/\/youxifanyizhushou\.com\/ios\/api\/product\/user\/remain\/ios url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/mppmfy.js

[mitm]
hostname = youxifanyizhushou.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "data" : [
    {
      "productPayType" : 1,
      "times" : 9999,
      "level" : 3,
      "desc" : "高级订阅",
      "expireTime" : "2099-09-09 09:09:09"
    }
  ],
  "code" : 0
};

$done({body : JSON.stringify(chxm1023)});

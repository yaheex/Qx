/*************************************

项目名称：一羽记账
下载地址：https://t.cn/A6Hh0Gsw
更新日期：2024-05-04




**************************************

[rewrite_local]
^https?:\/\/www\.yiyujizhang\.cn\/yiyujizhang\/vip\/info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/yiyujizhang.js

[mitm]
hostname = www.yiyujizhang.cn

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data.userInfo = {
  ...chxm1023.data.userInfo,
  "vipExpireDate" : 4092599349000,
  "vipType" : 1
};

$done({body : JSON.stringify(chxm1023)});
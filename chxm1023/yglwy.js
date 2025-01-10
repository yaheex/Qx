/*************************************

项目名称：阳光老挝语
下载地址：https://t.cn/A6QE9nvI
更新日期：2024-07-07




**************************************

[rewrite_local]
^https?:\/\/www\.ecigrxy\.cn\/api\/(user\/info|login) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/yglwy.js

[mitm]
hostname = www.ecigrxy.cn

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data = {
  ...chxm1023.data,
  "videoVip" : true,
  "translateVipDate" : "2099-09-09 09:09:09",
  "translateCount" : "9999",
  "isDown" : true,
  "videoVipDate" : "2099-09-09 09:09:09",
  "translateVip" : true
};

$done({body : JSON.stringify(chxm1023)});

/*************************************

项目名称：小时尚 解锁VIP
下载地址：https://t.cn/A6Xr4Kjn

**************************************

[rewrite_local]

^https?:\/\/kongque\.twan\.cn\/index.+\/admin\/appberrycustomer.+ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/xiaoshishang.js

[mitm]

hostname = kongque.twan.cn

*************************************/


var yahee = JSON.parse($response.body);

yahee = {
  "berry" : 3,
  "isValid" : 2,
  "berryEnd" : "2099-09-09 09:09:09"
};

$done({body : JSON.stringify(yahee)});

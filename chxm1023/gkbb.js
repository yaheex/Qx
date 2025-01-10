/*************************************

项目名称：高考必备
下载地址：https://t.cn/A6TwG9bI
更新日期：2024-03-21




**************************************

[rewrite_local]
http:\/\/api\.chuangqi\.store\/ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/gkbb.js

[mitm]
hostname = api.chuangqi.store

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data = {
   ...chxm1023.data,
   "isvip" : 1,
   "is_ad_vip" : 1,
   "vip_end_time" : "2099-09-09 09:09:09"
};
$done({body : JSON.stringify(chxm1023)});

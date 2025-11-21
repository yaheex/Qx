/*************************************

项目名称：高考必备
下载地址：https://t.cn/A6TwG9bI
更新日期：2024-03-21
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
http:\/\/api\.chuangqi\.store\/ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/gkbb.js

[mitm]
hostname = api.chuangqi.store

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data = {
   ...yahe1023.data,
   "isvip" : 1,
   "is_ad_vip" : 1,
   "vip_end_time" : "2099-09-09 09:09:09"
};
$done({body : JSON.stringify(yahe1023)});

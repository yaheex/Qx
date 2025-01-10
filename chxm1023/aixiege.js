/*************************************

项目名称：歌歌AI写歌
下载地址：https://t.cn/A6nZnbJH
更新日期：2025-01-08




**************************************

[rewrite_local]
^https?:\/\/apiv2\.somuseai\.com\/userinfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/aixiege.js

[mitm]
hostname = apiv2.somuseai.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data.userinfo.status = {
  ...chxm1023.data.userinfo.status,
  "is_vip" : 1,
  "vip_expired_date" : 4092599349,
  "vip_name" : "大师会员",
  "vip" : 2
};

$done({body : JSON.stringify(chxm1023)});

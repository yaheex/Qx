/*************************************

项目名称：歌歌AI写歌
下载地址：https://t.cn/A6nZnbJH
更新日期：2025-01-08
脚本作者：@yahe1023

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/apiv2\.somuseai\.com\/userinfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/aixiege.js

[mitm]
hostname = apiv2.somuseai.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data.userinfo.status = {
  ...yahe1023.data.userinfo.status,
  "is_vip" : 1,
  "vip_expired_date" : 4092599349,
  "vip_name" : "大师会员",
  "vip" : 2
};

$done({body : JSON.stringify(yahe1023)});

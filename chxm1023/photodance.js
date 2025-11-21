/*************************************

项目名称：PhotoDance
下载地址：https://t.cn/A6HK65UJ
更新日期：2024-05-24
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/viart-api\.afunapp\.com\/photodance\/(user_api\/(get_user_info|visitor_login)|order_api\/apple_query) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/photodance.js

[mitm]
hostname = viart-api.afunapp.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data = {
  ...yahe1023.data,
  "vip_remain_time" : 4092599349,
  "vip_type" : 1,
  "vip_year" : 1
},

$done({body : JSON.stringify(yahe1023)});

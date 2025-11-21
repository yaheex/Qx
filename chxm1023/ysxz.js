/*************************************

项目名称：云上写作
下载地址：https://t.cn/A6EbmQL2
更新日期：2024-09-25
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/www\.yunshangxiezuo\.com\/api\/getAuthenticate url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/ysxz.js

[mitm]
hostname = www.yunshangxiezuo.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data.user = {
  ...yahe1023.data.user,
  "vip" : 1,
  "vip_forever" : 1,
  "vip_last" : "2099-09-09 09:09:09"
};

$done({body : JSON.stringify(yahe1023)});
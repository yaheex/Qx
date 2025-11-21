/*************************************

项目名称：吉真紫微斗数
下载地址：https://t.cn/A68V37I5
更新日期：2024-07-26
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/zwpp\.wzbz123\.com\/api\/.+\/user\/getzwvipinfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/jzzwds.js

[mitm]
hostname = zwpp.wzbz123.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023 = {
  ...chxm1023,
  "code" : 0,
  "data" : {
    ...yahe1023.data,
    "expires" : "2099-09-09 09:09:09",
    "vipLevel" : 1
  },
  "isSuccess" : true
};

$done({body : JSON.stringify(yahe1023)});
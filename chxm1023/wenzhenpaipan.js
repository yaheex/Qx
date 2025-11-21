/*************************************

项目名称：问真排盘
下载地址：https://too.st/5tQ
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com\/api\/.+\/(user\/getvipinfo|User\/getWXPW) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/wenzhenpaipan.js

[mitm]
hostname = bzpp2.iwzbz.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.isSuccess = true;
yahe1023.validateKey = "yahe1023";
yahe1023.data = {
    "expires" : "2099-09-09 09:09:09",
    "vipLevel" : 3
  };

$done({body : JSON.stringify(yahe1023)});

/*************************************

项目名称：问真排盘
下载地址：https://too.st/5tQ

**************************************

[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com\/api\/.+\/(user\/getvipinfo|User\/getWXPW) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/wenzhenpaipan.js

[mitm]
hostname = bzpp2.iwzbz.com

*************************************/


var yahee = JSON.parse($response.body);

yahee.isSuccess = true;
yahee.validateKey = "yahee";
yahee.data = {
    "expires" : "2099-09-09 09:09:09",
    "vipLevel" : 3
  };

$done({body : JSON.stringify(yahee)});

/*************************************

项目名称：有谱么
下载地址：https://t.cn/A60Vxtkh

**************************************

[rewrite_local]
^https?:\/\/yopu\.co\/api\/user\/info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/youpume.js

[mitm]
hostname = yopu.co

*************************************/


var yahee = JSON.parse($response.body);

yahee.level = 1;
yahee.isMember = true;
yahee.adsDisabled = true;
yahee.adsDisabledTill = 4092599349000;

$done({ body: JSON.stringify(yahee)});

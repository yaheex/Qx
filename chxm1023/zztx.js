/*************************************

项目名称：杂志天下
下载地址：https://t.cn/A6ObfXUi

**************************************

[rewrite_local]
^https?:\/\/www\.fuyoutech\.club\/magworld\/member\/status url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/zztx.js

[mitm]
hostname = www.fuyoutech.club

*************************************/


var yahee = JSON.parse($response.body);

yahee.memberStatus = 2;
yahee.startTime = "2022-09-09 09:09:09";
yahee.finishTime = "2099-09-09 09:09:09";

$done({body : JSON.stringify(yahee)});

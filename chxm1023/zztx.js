/*************************************

项目名称：杂志天下
下载地址：https://t.cn/A6ObfXUi
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/www\.fuyoutech\.club\/magworld\/member\/status url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/zztx.js

[mitm]
hostname = www.fuyoutech.club

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.memberStatus = 2;
yahe1023.startTime = "2022-09-09 09:09:09";
yahe1023.finishTime = "2099-09-09 09:09:09";

$done({body : JSON.stringify(yahe1023)});

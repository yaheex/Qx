/*************************************

项目名称：山丘阅读
下载地址：https://t.cn/A6o2bCq7
更新日期：2024-06-03
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http:\/\/(m\.815616\.xyz|175\.178\.52\.149:88)\/api\/v\d\/myinfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/shanqiuyuedu.js

[mitm]
hostname = m.815616.xyz

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data[0].type = "9";
yahe1023.data[0].vipto = "2099-09-09 09:09:09";

$done({body : JSON.stringify(yahe1023)});

/*************************************

项目名称：葫芦时刻-电子杂志
下载地址：https://t.cn/A6WmsPMe
更新日期：2023-11-19
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api-search\.hulusaas\.com\/api\/user\/.* url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/hulushike.js

[mitm]
hostname = api-search.hulusaas.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.result.memberDate = "4092599349";
yahe1023.result.validTime = "2099-09-09";
yahe1023.result.payType = 3;
yahe1023.result.hasPayItem = 1;

$done({body : JSON.stringify(yahe1023)});

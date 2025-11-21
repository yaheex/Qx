/*************************************

项目名称：诗词集韵
下载地址：https://too.st/8JN
更新日期：2024-03-11
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/ouyangxunshufa\.azurewebsites\.net\/JiyunAPI url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/scjy.js

[mitm]
hostname = ouyangxunshufa.azurewebsites.net

*************************************/


var body = $response.body.replace(/\"Vip":\w+/g, '\"Vip":true');$done({body});

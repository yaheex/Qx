/*************************************

项目名称：猫头鹰文件
下载地址：https://t.cn/A6Kotbjs
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/www\.skyjos\.cn url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/mtywj.js

[mitm]
hostname = www.skyjos.cn

*************************************/


body = $response.body.replace(/\"memberLevel":(.*?)/g, '\"memberLevel":3').replace(/\"succ":"(.*?)"/g, '\"succ":"true"').replace(/\"dispName":"(.*?)"/g, '\"dispName":"yahe1023"').replace(/\"expireAt":"(.*?)"/g, '\"expireAt":"4092599349000"')

$done({body});

/*************************************

项目名称：有谱么
下载地址：https://t.cn/A60Vxtkh
脚本作者：YaHee,
特别感谢：@Baby，提供数据

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/yopu\.co\/api\/user\/info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/youpume.js

[mitm]
hostname = yopu.co

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.level = 1;
yahe1023.isMember = true;
yahe1023.adsDisabled = true;
yahe1023.adsDisabledTill = 4092599349000;

$done({ body: JSON.stringify(yahe1023)});

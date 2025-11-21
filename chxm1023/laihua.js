/*************************************

项目名称：来画
下载地址：https://t.cn/A6ptiPqj
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/laipicapp\.laihua\.com\/session\/new url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/laihua.js

[mitm]
hostname = laipicapp.laihua.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data.sex = 1;
yahe1023.data.isTmp = 0;
yahe1023.data.isCommercial = 1;
yahe1023.data.type = 1;
yahe1023.data.endDay = 4092599349;
yahe1023.data.appEndDay = 4092599349;
yahe1023.data.appExportBroTimes = 4092599349;
yahe1023.data.vipType = 1;
yahe1023.data.levelType = 4;
yahe1023.data.levelName = "企业VIP会员";
yahe1023.data.lifetimeVip = 1;
yahe1023.data.appNewVipTime = 4092599349;
yahe1023.data.level = 1;

$done({body : JSON.stringify(yahe1023)});

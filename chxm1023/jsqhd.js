/*************************************

项目名称：计算器HD解锁会员
下载地址：http://t.cn/A6xF7wam




**************************************

[rewrite_local]
^https?:\/\/www\.40sishi\.com\/(list|currency|calculator)\/user\/profile$ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/jsqhd.js

[mitm] 
hostname = www.40sishi.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data["vipState"] = {
    "state" : 1,
    "forever" : true,
    "startTime" : 1566600000000,
    "expireTime" : 4092599349000
};

$done({body : JSON.stringify(chxm1023)});

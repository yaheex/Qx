/*************************************

项目名称：潮汐
下载地址：https://t.cn/A6NdGzH4




**************************************

[rewrite_local]
^https?:\/\/tide-api\.moreless\.io\/v\d\/users\/self url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/chaoxi.js

[mitm]
hostname = tide-api.moreless.io

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023["vip"] = {
    "expired_at" : 4092599349,
    "is_valid" : true,
    "created_at" : 1684249596,
    "sub_cancel_at" : 0,
    "is_lifetime_member" : true,
    "updated_at" : 1684249596,
    "premium_type" : 2
};

$done({body : JSON.stringify(chxm1023)});

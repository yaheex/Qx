/*************************************

项目名称：Slopes
下载地址：https://t.cn/A6lxfuhC
脚本作者：ios151



**************************************

[rewrite_local]
^https?:\/\/my\.getslopes\.com\/api\/v\d\/account url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Slopes.js

[mitm]
hostname = my.getslopes.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.pass_expiration = 4092599349;
chxm1023.purchases = 1;
chxm1023.v1Owner = true;
chxm1023.pass_ranges = [{
    "is_trial_period": false,
    "end": 4092599349,
    "subscription_origin": "apple",
    "auto_renewing": "on",
    "start": 1701704386
}];

$done({ body: JSON.stringify(chxm1023) });
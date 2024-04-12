/*************************************

项目名称：Slopes
下载地址：https://t.cn/A6lxfuhC

**************************************

[rewrite_local]
^https?:\/\/my\.getslopes\.com\/api\/v\d\/account url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Slopes.js

[mitm]
hostname = my.getslopes.com

*************************************/


var yahee = JSON.parse($response.body);

yahee.pass_expiration = 4092599349;
yahee.purchases = 1;
yahee.v1Owner = true;
yahee.pass_ranges = [{
    "is_trial_period": false,
    "end": 4092599349,
    "subscription_origin": "apple",
    "auto_renewing": "on",
    "start": 1701704386
}];

$done({ body: JSON.stringify(yahee) });
/*
扫描宝 6.64

[rewrite_local]

#资料
https://app.yinxiang.com/third/profile/public/restful/public-user-profile? url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023//saomiaobao.js

#会员
https://app.yinxiang.com/third/scanner/scanner/app/userInfo/get url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/saomiaobao2.js

[mitm]
hostname = app.yinxiang.com

*/
var baby = JSON.parse($response.body);
baby.userProfile.nickname = "lovebabyforever";
baby.userProfile.avatarUrl = "https://raw.githubusercontent.com/Yu9191/-/main/A559C8EF-B4C6-4A94-8488-3D0BF36A6673.jpeg";
baby.userProfile.email = "YaHee,";
$done({body : JSON.stringify(baby)});
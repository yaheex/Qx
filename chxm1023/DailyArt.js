/*************************************

项目名称：DailyArt(每日艺术)
下载地址：https://t.cn/A6pv6XfN

**************************************

[rewrite_local]
^https?:\/\/api\.getdailyart\.com\/api\/(subscription\/verified|auth\/login|check-logged) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/DailyArt.js

[mitm]
hostname = api.getdailyart.com

*************************************/


var yahee = JSON.parse($response.body);
const vipa = '/api/subscription/verified';
const vipb = '/api/auth/login';
const vipc = '/api/check-logged';
const vip = {
    "auto_resume_date" : null,
    "status" : "active",
    "account_type" : "patron-annual",
    "cancel_date" : null,
    "start_date" : "2023-05-22T11:37:17.000000Z",
    "expire_date" : "2099-09-09T09:09:09.000000Z"
  };

if ($request.url.indexOf(vipa) != -1){
  yahee.data = (vip);
}

if ($request.url.indexOf(vipb) != -1){
  yahee.user.subscription = (vip)
  yahee.user.account_type = "patron-annual";
}

if ($request.url.indexOf(vipc) != -1){
  yahee.subscription = (vip)
  yahee.account_type = "patron-annual";
}

$done({body : JSON.stringify(yahee)});

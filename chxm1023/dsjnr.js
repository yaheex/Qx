/*************************************

项目名称：倒数纪念日 解锁终身会员
下载地址：https://t.cn/A6t6nFst

**************************************

[rewrite_local]

^https:\/\/day-api\.xixitime\.com url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/dsjnr.js

[mitm]

hostname = day-api.xixitime.com

*************************************/


var yahee = JSON.parse($response.body);
const user = '/user/info';
const vip = '/vip/state';

if ($request.url.indexOf(user) != -1){
yahee.data["foreverVip"] = true;
yahee.data["vipInfo"] = {
      "vipExpireTime" : 4092599349000,
      "trialPeriod" : true,
      "canUseTrialPeriod" : false,
      "validVip" : true,
      "foreverVip" : true,
      "vipCount" : 999999
    };
}


if ($request.url.indexOf(vip) != -1){
yahee["data"] = {
    "vipExpireTime" : 4092599349000,
    "trialPeriod" : true,
    "canUseTrialPeriod" : false,
    "validVip" : true,
    "foreverVip" : true,
    "vipCount" : 999999
  };
}

$done({body : JSON.stringify(yahee)});

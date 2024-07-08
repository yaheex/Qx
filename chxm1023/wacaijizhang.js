/*************************************

项目名称：挖财记账
下载地址：https://too.st/5ez
脚本作者：yahee
**************************************

[rewrite_local]
^https?:\/\/jz\.wacaijizhang\.com\/(api\/(my\/v\d|vipmember\/v\d\/index|usercenter\/userInfo)|jz-activity\/bkk-frontier\/api\/vipmember\/v\d\/index) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/wacaijizhang.js

[mitm]
hostname = jz.wacaijizhang.com

*************************************/

var yahee = JSON.parse($response.body);
const my = /api\/my\/v\d/;
const vip = /(vipmember\/v\d\/index|jz-activity\/bkk-frontier\/api\/vipmember\/v\d\/index)/;
const user = /usercenter\/userInfo/;

if(my.test($request.url)){
  yahee.data.vipInfo = {
    "vipMemberType" : "挖财记账超牛逼会员",
    "isVipMember" : true,
    "expirationDate" : 4092599349000,
    "continuous" : true,
    "remainingDays" : 99999,
    "consecutiveDays" : 99999
  };
}

if(vip.test($request.url)){
  yahee.data.vipInfo = {
    ...yahee.data.vipInfo,
    "adFreeVipEnable" : 1,
    "adFreePermanentVip" : true,
    "vipMemberEnable" : 1,
    "continuousEnable" : 1,
    "continuousType" : 1,
    "expirationDate" : 4092599349000,
    "superExpireDate" : 4092599349000,
    "adFreeExpireDate" : 4092599349000,
    "isPermanentVip" : true,
    "freeSendAdFreeVipEnable" : 0,
    "vipType" : 2,
    "expireDaysDays" : 99999,
    "freeSendVipEnable" : 0
  };
}

if(user.test($request.url)){
  yahee.data.isVip = 1;
}

$done({body : JSON.stringify(yahee)});
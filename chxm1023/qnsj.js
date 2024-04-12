/*************************************

项目名称：青柠设计-P图抠图海报
下载地址：https://t.cn/A69gPvA3

**************************************

[rewrite_local]
^https:\/\/.*\.qingning6\.com\/api\/(user\/getUserInfo|team\/teamInfo) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/qnsj.js

[mitm]
hostname = *.qingning6.com

*************************************/


var yahee = JSON.parse($response.body);

const user = '/user/getUserInfo';
const tdxx = '/api/team/teamInfo';

if ($request.url.indexOf(user) != -1){
  yahee.result.isTeamUserVip = 1;
  yahee.result.isForeverVip = 1;
  yahee.result.vipDays = 1;
  yahee.result.vipExpireTime = 4092599349000;
  yahee.result.isVip = 1;
  yahee.result.teamVipExpireTime = 4092599349000;
  yahee.result.totalVolume = 1411055000000;
  yahee.result.h5DesignQuota = 99;
  yahee.result.teamVipQuota = 99;
}

if ($request.url.indexOf(tdxx) != -1){
  yahee.result.memberCount = 1;
  yahee.result.vipMemberCount = 99;
  yahee.result.currUserTeamVipQuota = 99;
  yahee.result.isForever = 1;
  yahee.result.vipExpireTime = 4092599349000;
  yahee.result.isMember = 1;
  yahee.result.vipUserQuota = 99;
}

$done({body : JSON.stringify(yahee)});

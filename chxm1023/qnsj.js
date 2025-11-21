/*************************************

项目名称：青柠设计-P图抠图海报
下载地址：https://t.cn/A69gPvA3
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/.*\.qingning6\.com\/api\/(user\/getUserInfo|team\/teamInfo) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/qnsj.js

[mitm]
hostname = *.qingning6.com

*************************************/


var yahe1023 = JSON.parse($response.body);

const user = '/user/getUserInfo';
const tdxx = '/api/team/teamInfo';

if ($request.url.indexOf(user) != -1){
  yahe1023.result.isTeamUserVip = 1;
  yahe1023.result.isForeverVip = 1;
  yahe1023.result.vipDays = 1;
  yahe1023.result.vipExpireTime = 4092599349000;
  yahe1023.result.isVip = 1;
  yahe1023.result.teamVipExpireTime = 4092599349000;
  yahe1023.result.totalVolume = 1411055000000;
  yahe1023.result.h5DesignQuota = 99;
  yahe1023.result.teamVipQuota = 99;
}

if ($request.url.indexOf(tdxx) != -1){
  yahe1023.result.memberCount = 1;
  yahe1023.result.vipMemberCount = 99;
  yahe1023.result.currUserTeamVipQuota = 99;
  yahe1023.result.isForever = 1;
  yahe1023.result.vipExpireTime = 4092599349000;
  yahe1023.result.isMember = 1;
  yahe1023.result.vipUserQuota = 99;
}

$done({body : JSON.stringify(yahe1023)});

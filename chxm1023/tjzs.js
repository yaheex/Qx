/*************************************

项目名称：推剧助手
下载地址：https://t.cn/A6Tfv8iZ
更新日期：2024-04-01
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/film-api\.startupfun\.vip\/api\/v\d\/(wallpaper\/generator|user\/point\/info) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/tjzs.js

[mitm]
hostname = film-api.startupfun.vip

*************************************/


var yahe1023 = JSON.parse($response.body);
const vip = /vip\/info/;
const point = /user\/point\/info/;
const bf = /check/;

if(vip.test($request.url)){
  yahe1023.vipDesc = "会员有效期至：2099-09-09 09:09";
  yahe1023.vipInfo.forEach(item => {
    if ('vipType' in item && 'vipStatus' in item && 'vipDesc' in item) {
      item.vipType = 1;
      item.vipStatus = 1;
      item.vipDesc = "会员有效期至：2099-09-09 09:09";
    }
    if ('mobile' in item) {
      item.mobile = "会员有效期至：2099-09-09 09:09";
    }
    if (item.userInfo) {
      item.userInfo.dailyRemaining = 99;
      item.userInfo.dailyLimit = 99;
      item.userInfo.permanentPoints = 99;
    }
  });
  
  yahe1023.mobile = "YaHee, Studio.(年费会员)";
  yahe1023.queryTimes = 3;
  yahe1023.vipStatus = 1;
  yahe1023.isTrial = 1;
  yahe1023.coins = 99;
  yahe1023.isNewAwardTimes = 99;
}

if(point.test($request.url)){
  yahe1023.points = 999;
  yahe1023.permanentPoints = 999;
}

if(bf.test($request.url)){
  yahe1023.canGenerate = 1;
  yahe1023.needDuration = 0;
}

$done({ body: JSON.stringify(yahe1023) });
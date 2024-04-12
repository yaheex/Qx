/*************************************

项目名称：波点音乐
下载地址：https://t.cn/A6NLgAZW
更新日期：2023-12-11

**************************************

[rewrite_local]
^https:\/\/bd-api\.kuwo\.cn\/api\/(ucenter\/users|play\/listening\/user|service\/(home\/index|banner\/myPage|advert\/watch)) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/bodian.js

[mitm]
hostname = bd-api.kuwo.cn

*************************************/


var body = $response.body;
var yahee = JSON.parse(body);
const vipa = /api\/(ucenter\/users|play\/listening\/user)/;
const ad = /api\/service\/(home\/index|banner\/myPage)/;
const advert = /api\/service\/advert\/watch/;

if(vipa.test($request.url)){
  yahee.data.payInfo = {
      "expireDate" : 4092599349000,
      "isSigned" : 1,
      "lastPayType" : 1,
      "isVip" : 1
    };
  yahee.data.payRights = {
      "headPendant" : {
        "id" : 11,
        "name" : "音波",
        "pic" : "https://bodiancdn.kuwo.cn/file/bc92ceb2fb555e34246cdf4f558015ec.gif"
      }
    };
  yahee.data.isBind = 1;
  yahee.data.userInfo = {
   ...yahee.data.userInfo,
   "isVip" : 1,
   "authType" : 3,
   "headOuterImg" : "https://bodiancdn.kuwo.cn/file/bc92ceb2fb555e34246cdf4f558015ec.gif",
   "status" : 1
  };
}

if(ad.test($request.url)){
  yahee.data.bannerList = [];
  if (yahee.data.moduleList && yahee.data.moduleList.length > 0) {
   yahee.data.moduleList = yahee.data.moduleList.filter(item => item.name !== "轮播图" && item.name !== "波点实验室");
  };
}

if(advert.test($request.url)){
  yahee.data = {
    "mvGuide" : "看广告，解锁所有VIP歌曲\n解锁后可畅听%s",
    "expireTime" : 0,
    "mvDuration" : 0
  };
}

$done({body : JSON.stringify(yahee)});

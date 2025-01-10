/*************************************

项目名称：追书神器
下载地址：https://t.cn/A6Nm0RuT
更新日期：2024-05-12



效果说明：付费内容未解锁，解锁听书/去广告

**************************************

[rewrite_local]
# VIP/净化
^https?:\/\/.*\.zhuishushenqi\.com\/(user|charge\/voice\/state|pay\/products|advert_center|push\/pop-config|book\/recommend-pop|api|video\/adConfig|book\/bookshelf.*|activity\/popup\/scenes\/init) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/zhuishushenqi.js
# 开屏广告/也可去除其他APP的广告，用处广泛
^https?:\/\/.*\.pangolin-sdk-toutiao.*\.com url reject
^https?:\/\/mhjk\.1391\.com url reject-200
^https?:\/\/opencloud\.wostore\.cn url reject-200
^https?:\/\/open\.e\.kuaishou\.com url reject-200
^https?:\/\/mi\.gdt\.qq\.com url reject-200
^https?:\/\/mobads\.baidu\.com url reject-200
^https?:\/\/ios\.bugly\.qq\.com url reject-200
^https?:\/\/sdk\.e\.qq\.com url reject-200
^https?:\/\/analytics\.oceanengine\.com url reject-200

[mitm]
hostname = *.zhuishushenqi.com, *.pangolin-sdk-toutiao*.com, mhjk.1391.com, opencloud.wostore.cn, open.e.kuaishou.com, mi.gdt.qq.com, mobads.baidu.com, ios.bugly.qq.com, sdk.e.qq.com, analytics.oceanengine.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const vipa = /judgeSignIn/;
const vipb = /pay\/products/;
const user = /account/;
const yuyin = /charge\/voice\/state/;

if(vipa.test($request.url)){
  chxm1023.days = 99999;
  chxm1023.date = "2099-09-09";
}

if(vipb.test($request.url)){
  chxm1023.isVip = true;
}

if(/(push\/pop-config|sfo\/(popup_displays|user_popup_configs)|video\/adConfig|book\/(bookshelf-recommend.*|bookshelf-top-recommend|recommend-pop)|activity\/popup\/scenes\/init|advert_center\/(advert_list|switch_config))/.test($request.url)){
  chxm1023 = {};
};

if(user.test($request.url)){
  chxm1023 = {
    ...chxm1023,
    "isFree" : true,
    "time" : 4092599349,
    "superMonthlyExpire" : 4092599349,
    "isSVIPUser" : true,
    "vipExpire" : "2099-09-09T09:09:09.000Z",
    "ok" : true,
    "isMonthly" : true,
    "vipStatus" : 2,
    "isAppstoreAutoMonthly" : true,
    "freeTime" : 4092599349,
    "monthly" : 4092599349,
    "expiresDay" : 99999
  };
}

if(yuyin.test($request.url)){
  chxm1023 = {
    "state" : {
      "voiceExpire" : 4092599349,
      "isFree" : true,
      "available" : true,
      "freeText" : "欢迎使用朗读功能，恭喜您获得全场发音人免费听权限！"
    },
    "ok" : true
  };
}

$done({body: JSON.stringify(chxm1023)});

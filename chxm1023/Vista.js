/*************************************

项目名称：Vista看天下
下载地址：https://t.cn/A6ORUIIv

**************************************

[rewrite_local]
^https?:\/\/open3\.vistastory\.com\/v\d\/api\/(vip|my\/home\/get_home_center|user/pendant|poster\/share_poster|adm\/get_popup_ad|index\/loading_ad) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Vista.js

[mitm] 
hostname = open3.vistastory.com

*************************************/


var yahee = JSON.parse($response.body);
const subscription = {      "userId" : 666666,      "beginTime" : 1666666666666,      "id" : 188888,      "endTime" : 4092599349000,      "createTimeFormat" : "2022-10-25 10:57:46",      "createTime" : 1666666666666,      "isActive" : 1    };

const vipa = '/api/vip';
const vipb = '/my/home/get_home_center';
const guashi = '/user/pendant';
const yaoqing = '/poster/share_poster'
const popup = '/adm/get_popup_ad';
const ad = '/index/loading_ad';


if ($request.url.indexOf(vipa) != -1){
  yahee["isVip"] = 1;
  yahee["expireVip"] = 0;
  yahee["subscriptionVip"] = (subscription);
  yahee["isUpgradeVip"] = 0;
  yahee["vipInfo"] = {
    "isMiniVip" : 0,
    "expireVip" : 0,
    "subscriptionVip" : (subscription),
    "isVip" : 1
  };
}

if ($request.url.indexOf(vipb) != -1){
  yahee["subscriptionVip"] = (subscription);
  yahee["isVip"] = 1;
  yahee["level"] = 99;
  yahee["exp"] = 0;
  yahee["info"] = "yahee";
}

if ($request.url.indexOf(guashi) != -1){
  yahee.userLevel = 99;
  yahee.status = 1;
  yahee.msg = "success";
  if(yahee.pendantList && Array.isArray(yahee.pendantList)) {
    yahee.pendantList.forEach(item => {
      item.level = 1;
    });
  }
}

if ($request.url.indexOf(yaoqing) != -1){
  yahee.posterList = [
    {
      "status" : 1,
      "id" : 6,
      "title" : "                                                                ",
      "imgUrl" : "https://raw.githubusercontent.com/yahee/Script_X/main/icon/dlam.png",
      "imgPath" : "https://raw.githubusercontent.com/yahee/Script_X/main/icon/dlam.png",
      "position" : 0
    }
  ];
  yahee.inviteUrl = "https://t.me/yahee"
}

if ($request.url.indexOf(popup) != -1){
  delete yahee.popup;
}

if ($request.url.indexOf(ad) != -1){
  delete yahee.ad;
}

$done({body : JSON.stringify(yahee)});

/*************************************

项目名称：海绵去水印/功夫去水印
下载地址：#小程序://海绵去水印/fkz0DxWNzGVwb3A
下载地址：#小程序://功夫去水印/BDrKc83B8O909Sc
使用说明：点击登录即可变成至尊VIP。

**************************************

[rewrite_local]
^https?:\/\/analysis\.20kaka\.cn\/api\/wechat url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Advertising/xcx/hmqsy.js
^https?:\/\/q12\.tuanyougou\.com url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Advertising/xcx/hmqsy.js

[mitm]
hostname = analysis.20kaka.cn, q12.tuanyougou.com

*************************************/


var body = $response.body;
var yahee = JSON.parse(body);

const vip = '/user';
const ad = '/index';
const jx = '/urlresult';
const vipb = '/registryUser';
const adb = '/getAdvertMsg';
const jxb = '/GetYqList';

//海绵去水印
if ($request.url.indexOf(vip) != -1){
  yahee = {
  "invite_num" : 0,
  "cdkey" : "1",
  "vip" : 1,
  "zs_image" : "https://s4.ax1x.com/2021/12/13/oOsYAe.png",
  "svip" : 1,
  "explain" : "加速下载",
  "residue_time" : "2099-09-09 09:09",
  "code" : "101",
  "pattern" : "1",
  "data" : {
    "ip" : null,
    "sort_num" : "0",
    "max_num" : null,
    "nickname" : "yahee",
    "create_time" : "1970-01-01 08:00:00",
    "given" : null,
    "day_num" : 0,
    "create_time_a" : "2023-04-28 14:40:06",
    "state" : 0,
    "is_svip" : "1",
    "id" : 5447282,
    "avatarurl" : "http://cdn-head.20kaka.cn/img/9c0137232e5872509b04329abf1efb9c.jpg",
    "is_vip" : true,
    "residue_num" : 0,
    "edit_time" : null,
    "residue_time" : "4092599350",
    "use_num" : 0,
    "invite_id" : 0,
    "down_time" : "",
    "user_info" : 1,
    "stars_time" : "1682697600",
    "lately_time" : null,
    "from" : "微信聊天主页面下拉"
  },
  "pay" : null,
  "msg" : "success",
  "name" : "海绵去水印"
};
}


if ($request.url.indexOf(ad) != -1){
  delete yahee.data.banner;
  delete yahee.data.advertisement;
  delete yahee.data.banner_tools;
}

if ($request.url.indexOf(jx) != -1){
  yahee.data.vip = 1;
}

//功夫去水印备用版
if ($request.url.indexOf(vipb) != -1){
  yahee.data = {
    "userId" : 1858119,
    "openid" : 1858119,
    "endTime" : "2099-09-09",
    "isVip" : 2,
    "shengyu" : 1,
    "userType" : 1,
    "isFirstLogin" : false
  };
}

if ($request.url.indexOf(adb) != -1){
  delete yahee.data.ads;
  delete yahee.data.bannerList;
  delete yahee.data.adTip;
  delete yahee.data.adTiptj;
  delete yahee.data.adTippl;
  delete yahee.data.adPath;
  delete yahee.data.content;
}

if ($request.url.indexOf(jxb) != -1){
  yahee.data.keyong = 99999999999;
}

$done({body : JSON.stringify(yahee)});

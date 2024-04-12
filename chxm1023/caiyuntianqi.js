/*************************************

项目名称：彩云天气-净化/解锁SVIP
下载地址：https://t.cn/A66d95hV
更新日期：2024-04-12

**************************************

[rewrite_local]
^https?:\/\/(biz|wrapper|starplucker)\.(cyapi|caiyunapp)\.(cn|com)\/(.+\/(user\?app_name|activity\?app_name|visitors|operation\/banners|operation\/homefeatures|config)|p\/v\d\/(vip_info|user_info|entries|privileges|trial_card\/info)) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/yahee/caiyuntianqi.js
^https?:\/\/(api|wrapper)\.(cyapi|caiyunapp)\.(cn|com)\/v\d\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/yaheex/Qx/main/yahee/caiyuntianqi.js

[mitm]
hostname = *.cyapi.cn, *.caiyunapp.com

*************************************/


const yahee1 = {};
const yahee = JSON.parse(typeof $response != "undefined" && $response.body || null);
const url = $request.url;
const adUrl = /(activity\?app_name|operation\/banners)/;
const tcUrl = /conditions/;
const vipUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/vip_info/;
const userUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/v\d\/user\?app_name/;
const syUrl = /trial_card\/info/;
const qyUrl = /entries/;
const peUrl = /privileges/;
const topUrl = /operation\/homefeatures/;

if (typeof $response == "undefined") {
  yahee1.headers = $request.headers;
  yahee1.headers['device-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoiNjVkMzY2OTRmY2FjMDgwMDE0NDlkODMzIiwidXNlcl9pZCI6IjVmNWJmYzU3ZDJjNjg5MDAxNGUyNmJiOCIsInZlcnNpb24iOjIsImV4cCI6MTcxNjEyOTE3MiwidmlwX2V4cGlyZWRfYXQiOjAsImlzcyI6IndlYXRoZXIiLCJpYXQiOjE3MDgzNTMxNzIsInN2aXBfZXhwaXJlZF9hdCI6MTg1MTUwMTAzMSwicHJpbWFyeSI6dHJ1ZX0.U_LCYNGl3cbBCpjrnjmxYBAuNFSvNCe3dKIrV1MGpzo';
} else {
  switch (true) {
    case adUrl.test(url):
      yahee.status = "ok";
      yahee.activities = [{"items":[{}]}];
      yahee.data = [];
      break;
    case tcUrl.test(url):
      yahee.actions = [];
      yahee.popups = [];
      break;
    case vipUrl.test(url):
      yahee.vip = {  ...yahee.vip,
  "expires_time" : "4092599349",  "is_auto_renewal" : true  };
      yahee.svip =  {  ...yahee.svip,  "expires_time" : "4092599349",  "is_auto_renewal" : true  };
      yahee.show_upcoming_renewal = false;
      break;
    case userUrl.test(url):
      yahee.result = { ...yahee.result,  is_vip: true,  vip_expired_at: 4092599349,  svip_given: 1,  is_xy_vip: true,  xy_svip_expire: 4092599349,  wt: {  ...yahee.result.wt,  vip: {  ...yahee.result.wt.vip,  "expired_at" : 0,  "enabled" : true,  "svip_apple_expired_at" : 4092599349,  "is_auto_renewal" : true,  "svip_expired_at" : 4092599349    },    svip_given: 1,  },  is_phone_verified: true,  vip_take_effect: 1,  is_primary: true,  xy_vip_expire: 4092599349,  svip_expired_at: 4092599349,  svip_take_effect: 1,  vip_type: "s",  };
      break;
    case syUrl.test(url):
      yahee.receive_status = 0;
      yahee.vip_type = "svip";
      yahee.activated_at = 1712600671;
      yahee.vip_duration = "999";
      yahee.expired_at = 4092599349;
      yahee.has_valid_card = 0;
      break;
    case qyUrl.test(url):
      yahee["entries"] = [{  "url" : "https://t.me/yahee",  "id" : 1,  "name" : "YaHee,",  "type" : 1,  "pos" : 2  }];
      break;
    case peUrl.test(url):
      yahee["privileges"] = [{  "vip_type" : "svip",  "subscription_chat_quota" : 999  }];
      break;
    case topUrl.test(url):
      yahee["data"] = [{  "badge_type" : "",  "title" : "YaHee,",  "url" : "https://t.me/yahee",  "feature_type" : "",  "avatar" : "https://raw.githubusercontent.com/yahee/Script_X/main/icon/ddm2.png"  },...yahee.data];
      break;
    }
  yahee1.body = JSON.stringify(yahee);
}

$done(yahee1);
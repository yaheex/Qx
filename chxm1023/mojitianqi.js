/*************************************
项目名称：墨迹天气
下载地址：https://t.cn/A69ukfNz

**************************************

[rewrite_local]
^https?:\/\/.*\.api\.moji\.com\/(sns\/json\/profile\/get_info_.+|json\/member_new\/homepage_info.+|user\/personal\/json\/profile_.+|flycard\/novice|shortvideo\/.+) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/mojitianqi.js

[mitm]
hostname = *.api.moji.com

*************************************/


var yahee = JSON.parse($response.body);
const vip1 = '/sns/json/profile/get_info';
const vip2 = '/json/member_new/homepage_info';
const vip3 = '/user/personal/json/profile';
const vip4 = '/flycard/novice';
const AD1 = '/shortvideo';

if ($request.url.indexOf(vip1) != -1){
  yahee.is_vip = 1;
  yahee.type = 7;
  yahee.grade = 1;
  yahee.is_adver_free = 0;
  yahee.expire_time = 4092599349000;
  yahee.member_type = 1;
  yahee.member_level = 1;
  yahee.max_expiration_days = 9999999;
  yahee.is_expire = 0;
  yahee.remain_day = 9999999;
  yahee.inkrity = 9999999;
  yahee.status = 1;
  yahee.is_purchase = true;
}

if ($request.url.indexOf(vip2) != -1){
  yahee.userTips = ["将在2099-09-09到期"];
  yahee.user_tips = ["将在2099-09-09到期"];
  yahee.is_member = true; 
  yahee.user_member_info.vip = 1;
  yahee.user_member_info.is_auto_member = 1;
}

if ($request.url.indexOf(vip3) != -1){
  yahee.personal_profile.inkrity = 9999999;
  yahee.personal_profile.is_vip = true;
  yahee.personal_profile.grade = 1;
  yahee.personal_profile.user_flag = true;
}

if ($request.url.indexOf(vip4) != -1){
  yahee.data.novice.adShow= 0;
  yahee.data.novice.expireTime = 4092599349000;
  yahee.data.novice.vipShow = 1;
}

if ($request.url.indexOf(AD1) != -1){
  yahee.item_list = [];
  yahee.rcmList = [];
  yahee.add_card_list = [];
}

$done({body : JSON.stringify(yahee)});

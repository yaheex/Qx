/*************************************
项目名称：墨迹天气
下载地址：https://t.cn/A69ukfNz
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/.*\.api\.moji\.com\/(sns\/json\/profile\/get_info_.+|json\/member_new\/homepage_info.+|user\/personal\/json\/profile_.+|flycard\/novice|shortvideo\/.+) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/mojitianqi.js

[mitm]
hostname = *.api.moji.com

*************************************/


var yahe1023 = JSON.parse($response.body);
const vip1 = '/sns/json/profile/get_info';
const vip2 = '/json/member_new/homepage_info';
const vip3 = '/user/personal/json/profile';
const vip4 = '/flycard/novice';
const AD1 = '/shortvideo';

if ($request.url.indexOf(vip1) != -1){
  yahe1023.is_vip = 1;
  yahe1023.type = 7;
  yahe1023.grade = 1;
  yahe1023.is_adver_free = 0;
  yahe1023.expire_time = 4092599349000;
  yahe1023.member_type = 1;
  yahe1023.member_level = 1;
  yahe1023.max_expiration_days = 9999999;
  yahe1023.is_expire = 0;
  yahe1023.remain_day = 9999999;
  yahe1023.inkrity = 9999999;
  yahe1023.status = 1;
  yahe1023.is_purchase = true;
}

if ($request.url.indexOf(vip2) != -1){
  yahe1023.userTips = ["将在2099-09-09到期"];
  yahe1023.user_tips = ["将在2099-09-09到期"];
  yahe1023.is_member = true; 
  yahe1023.user_member_info.vip = 1;
  yahe1023.user_member_info.is_auto_member = 1;
}

if ($request.url.indexOf(vip3) != -1){
  yahe1023.personal_profile.inkrity = 9999999;
  yahe1023.personal_profile.is_vip = true;
  yahe1023.personal_profile.grade = 1;
  yahe1023.personal_profile.user_flag = true;
}

if ($request.url.indexOf(vip4) != -1){
  yahe1023.data.novice.adShow= 0;
  yahe1023.data.novice.expireTime = 4092599349000;
  yahe1023.data.novice.vipShow = 1;
}

if ($request.url.indexOf(AD1) != -1){
  yahe1023.item_list = [];
  yahe1023.rcmList = [];
  yahe1023.add_card_list = [];
}

$done({body : JSON.stringify(yahe1023)});

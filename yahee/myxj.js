/*************************************
项目名称：美颜相机 解锁VIP
下载地址：https://t.cn/A69cNPHr
**************************************

[rewrite_local]

^https:\/\/(api|community)\.meiyan\.com\/(vip|v\d)\/(user_center|user_info|user\/(.*?)) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/myxj.js

[mitm]

hostname = *.meiyan.com

*************************************/


var yahee = JSON.parse($response.body);
const hysj = '/vip/user_info';
const user = '/user/show';
const hymb = '/vip/user_center';

if ($request.url.indexOf(hysj) != -1){
yahee.response.status = 1;
yahee.response.ad_vip_type = 3;
yahee.response.expire_time = "2099-09-09 09:09:09";
yahee.response.type = 2;
yahee.response.product_type = 1;
yahee.response.expire_date = "2099-09-09";
}

if ($request.url.indexOf(user) != -1){
yahee.data.vip_type = 1;
yahee.data.vip_icon = "https://xximg1.meitudata.com/6948531818264286440.png";
yahee.data.follower_count = 999000;
yahee.data.fan_count = 999000;
yahee.data.favorites_count = 999000;
yahee.data.be_like_count = 999000;
}

if ($request.url.indexOf(hymb) != -1){
yahee.response.user_info = {
      "status" : 1,
      "period_type" : 11,
      "discount_status" : 0,
      "agreement_status" : 1,
      "product_type" : 1,
      "expire_date" : "2099-09-09"
    };
}

$done({body : JSON.stringify(yahee)});

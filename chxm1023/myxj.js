/*************************************

项目名称：美颜相机 解锁VIP
下载地址：https://t.cn/A69cNPHr
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️

**************************************

[rewrite_local]

^https:\/\/(api|community)\.meiyan\.com\/(vip|v\d)\/(user_center|user_info|user\/(.*?)) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/myxj.js

[mitm]

hostname = *.meiyan.com

*************************************/


var yahe1023 = JSON.parse($response.body);
const hysj = '/vip/user_info';
const user = '/user/show';
const hymb = '/vip/user_center';

if ($request.url.indexOf(hysj) != -1){
yahe1023.response.status = 1;
yahe1023.response.ad_vip_type = 3;
yahe1023.response.expire_time = "2099-09-09 09:09:09";
yahe1023.response.type = 2;
yahe1023.response.product_type = 1;
yahe1023.response.expire_date = "2099-09-09";
}

if ($request.url.indexOf(user) != -1){
yahe1023.data.vip_type = 1;
yahe1023.data.vip_icon = "https://xximg1.meitudata.com/6948531818264286440.png";
yahe1023.data.follower_count = 999000;
yahe1023.data.fan_count = 999000;
yahe1023.data.favorites_count = 999000;
yahe1023.data.be_like_count = 999000;
}

if ($request.url.indexOf(hymb) != -1){
yahe1023.response.user_info = {
      "status" : 1,
      "period_type" : 11,
      "discount_status" : 0,
      "agreement_status" : 1,
      "product_type" : 1,
      "expire_date" : "2099-09-09"
    };
}

$done({body : JSON.stringify(yahe1023)});

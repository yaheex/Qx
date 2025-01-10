/*************************************

项目名称：易截图
下载地址：https://t.cn/A6TQziCW
更新日期：2024-04-20




**************************************

[rewrite_local]
^https?:\/\/1jietu\.com\/apiv2\/(user|ad) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/yijietu.js

[mitm]
hostname = 1jietu.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const ad = /ad/;
const user = /user/;

if(ad.test($request.url)){
  chxm1023 = {};
}

if(user.test($request.url)){
  chxm1023.info.vip_datetime = "4092599349000";
  chxm1023.info.vip = 1;
  chxm1023.info.group = "永久会员";
  chxm1023.info.group_id = "3";
}

$done({body : JSON.stringify(chxm1023)});
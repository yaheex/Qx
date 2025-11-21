/*************************************

项目名称：胃之书
下载地址：https://t.cn/A6TukISS
更新日期：2024-04-25
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/bellybook-app-api\.bellybook\.cn\/api\/v\d\/users\/(me|my_useage_info) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/StomachBook.js

[mitm]
hostname = bellybook-app-api.bellybook.cn

*************************************/


var yahe1023 = JSON.parse($response.body);
const vipa = '/users/me';
const vipb = '/users/my_useage_info';

if ($request.url.indexOf(vipa) != -1){
  yahe1023.data = {
    ...yahe1023.data,
    "vip_level" : 3,
    "vip_expire_time" : "4092599349000",
    "daily_token_limit" : 999000,
    "my_vip_name" : "美食家会员",
    "is_superuser" : true
  };
}

if ($request.url.indexOf(vipb) != -1){
  yahe1023.data = {
    ...yahe1023.data,
    "daily_token_limit" : 999000,
    "vipbanner_title" : "您正在使用美食家会员计划。"
  };
}

$done({body : JSON.stringify(yahe1023)});
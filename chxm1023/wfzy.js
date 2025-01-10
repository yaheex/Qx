/*************************************

项目功能：悟饭掌悦 解锁VIP
下载地址：https://t.cn/A6o114Kq



**************************************

[rewrite_local]
^http:\/\/iosv2\.cjapi\.5fun\.com url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/wfzy.js

[mitm]
hostname = iosv2.cjapi.5fun.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const vip = '/get_member_info';

if ($request.url.indexOf(vip) != -1){
chxm1023.data.user_info = {
      "member_state" : 2,
      "expired_time" : 0,
      "is_vip" : "9A0684792021D73BE42B71491469ADFA"
    };
chxm1023.data.is_success = true;
}

$done({body : JSON.stringify(chxm1023)});

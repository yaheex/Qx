/*************************************

项目名称：体重小本 解锁永久VIP
下载地址：https://t.cn/A69kYRWI



使用说明：非一次性解锁，使用前打开脚本

**************************************

[rewrite_local]
^https:\/\/api\.jitizhong\.com url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/tizhongxiaoben.js

[mitm]
hostname = api.jitizhong.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const vip = {
      "status" : 0,
      "userId" : 304246632,
      "serverTime" : 1675898982,
      "vipType" : 3,
      "vipChannel" : 6,
      "vipExpireTime" : 4092599349,
      "surplusSeconds" : 172268,
      "lastSpecialFlag" : 0
    };
const vipa = '/weightnote/ios/user/get';
const vipb = '/weightnote/ios/usercentre/userInfo';
const vipc = '/ios/vip/getVipInfo';

if ($request.url.indexOf(vipa) != -1){
  chxm1023.data.vipInfo = (vip);
}

if ($request.url.indexOf(vipb) != -1){
  chxm1023.data.vipInfo = (vip);
}

if ($request.url.indexOf(vipc) != -1){
  chxm1023.data = (vip);
}

$done({body : JSON.stringify(chxm1023)});
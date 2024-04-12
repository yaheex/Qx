/*************************************

项目名称：13个APP解锁全家桶
下载地址：https://t.cn/A6Ouq9uD

**************************************

[rewrite_local]
^https?:\/\/(appss|standard)\.(rhinox.*|linhongshi)\.com\/.+\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/13geapp.js

[mitm]
hostname = *.rhinox*.com, appss.linhongshi.com

*************************************/


var yahee = JSON.parse($response.body);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

if (ua.indexOf('bnchangtu') != -1) {
  yahee.result["type"] = "FOREVER";
} else { yahee.result["type"] = "VIP"; }
yahee.result["vipGroupInfos"] = [      {        "groupType" : "TYPE_ONE",        "vipType" : "VIP",        "autoPay" : "YES"      }    ];
yahee.result["vipExpireTime"] = "2099-09-09 09:09:09";
yahee.result["vipExpireDays"] = 999999;

$done({body : JSON.stringify(yahee)});

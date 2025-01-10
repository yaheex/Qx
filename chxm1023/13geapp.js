/*************************************

项目名称：13个APP解锁全家桶
下载地址：https://t.cn/A6Ouq9uD
更新日期：2025-01-08




**************************************

[rewrite_local]
^https?:\/\/(appss|standard)\.(rhinox.*|linhongshi)\.com\/.+\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/13geapp.js

[mitm]
hostname = *.rhinox*.com, appss.linhongshi.com

*************************************/


var ddm = JSON.parse($response.body);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

if (ua.indexOf('bnchangtu') != -1) {
  ddm.result["type"] = "FOREVER";
} else { ddm.result["type"] = "VIP"; }
ddm.result["vipGroupInfos"] = [      {        "groupType" : "TYPE_ONE",        "vipType" : "VIP",        "autoPay" : "YES"      }    ];
ddm.result["vipExpireTime"] = "2099-09-09 09:09:09";
ddm.result["vipExpireDays"] = 999999;

$done({body : JSON.stringify(ddm)});

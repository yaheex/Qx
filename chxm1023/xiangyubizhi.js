/*************************************

项目名称：香芋壁纸
下载地址：https://t.cn/A6HvnlbI
更新日期：2024-05-03




**************************************

[rewrite_local]
^https?:\/\/(?:sdk\.)?xiangyubizhi\.com\/(v\d\/front|notify\/ios) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/xiangyubizhi.js

[mitm]
hostname = sdk.xiangyubizhi.com, xiangyubizhi.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const ad = '/notify/ios';
const xs = '/front';
const vip = '/front/member/info';

if ($request.url.indexOf(ad) != -1){
  chxm1023 = {};
}

if ($request.url.indexOf(xs) != -1){
  searchAndModify(chxm1023, 'noPublic', "0");
}

if ($request.url.indexOf(vip) != -1){
  chxm1023.data = {
    ...chxm1023.data,
    "vipName" : "超级会员",
    "endTime" : "2099-09-09 09:09:09",
    "ok" : true
  };
}

$done({body : JSON.stringify(chxm1023)});

function searchAndModify(obj, ...args) {for (let i = 0; i < args.length; i += 2) {const key = args[i];const value = args[i + 1];for (var prop in obj) {if (obj.hasOwnProperty(prop)) {if (typeof obj[prop] === 'object') {searchAndModify(obj[prop], ...args);} else if (prop === key) {obj[prop] = value;}}}}};
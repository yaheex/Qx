/*************************************

项目名称：香芋壁纸
下载地址：https://t.cn/A6HvnlbI
更新日期：2024-05-03
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(?:sdk\.)?xiangyubizhi\.com\/(v\d\/front|notify\/ios) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/xiangyubizhi.js

[mitm]
hostname = sdk.xiangyubizhi.com, xiangyubizhi.com

*************************************/


var yahe1023 = JSON.parse($response.body);
const ad = '/notify/ios';
const xs = '/front';
const vip = '/front/member/info';

if ($request.url.indexOf(ad) != -1){
  yahe1023 = {};
}

if ($request.url.indexOf(xs) != -1){
  searchAndModify(chxm1023, 'noPublic', "0");
}

if ($request.url.indexOf(vip) != -1){
  yahe1023.data = {
    ...yahe1023.data,
    "vipName" : "超级会员",
    "endTime" : "2099-09-09 09:09:09",
    "ok" : true
  };
}

$done({body : JSON.stringify(yahe1023)});

function searchAndModify(obj, ...args) {for (let i = 0; i < args.length; i += 2) {const key = args[i];const value = args[i + 1];for (var prop in obj) {if (obj.hasOwnProperty(prop)) {if (typeof obj[prop] === 'object') {searchAndModify(obj[prop], ...args);} else if (prop === key) {obj[prop] = value;}}}}};
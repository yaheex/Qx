/*************************************

项目名称：古文岛
下载地址：https://too.st/aZF
更新日期：2024-11-14




**************************************

[rewrite_local]
^https?:\/\/.*\.guwendao\.net\/(api\/user\/getVip|router\/user\/getUserInfo) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/guwendao.js

[mitm]
hostname = *.guwendao.net

*************************************/


var chxm1023 = JSON.parse($response.body);

if(/api\/user\/getVip/.test($request.url)){
  chxm1023.svip = "/Date(4092599349000)/";
}

if(/router\/user\/getUserInfo/.test($request.url)){
  chxm1023.result.user = {
    ...chxm1023.result.user,
    "vipTimeSpan" : 9466560000000,
    "shebeiIsMore" : true,
    "svipTimeSpan" : 9466560000000,
    "vipTime" : "2099-09-09 09:09:09",
    "svipTime" : "2099-09-09 09:09:09"
  };
}

$done({body : JSON.stringify(chxm1023)});
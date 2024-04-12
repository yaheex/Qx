/*************************************

项目名称：布丁锁屏/布丁锁屏壁纸
下载地址：https://t.cn/A6o11VGR
下载地址：https://t.cn/A6NXjTUx

**************************************
 
[rewrite_local]
^https?:\/\/screen-lock\.(sm-check|51wnl-cq)\.com\/userApi\/saveUser.+ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/yahee/bdsp.js

[mitm] 
hostname = screen-lock.*.com

*************************************/


var yahee = JSON.parse($response.body);

  yahee.data = {
    "exchangeCodeGetTime" : null,
    "id" : "yahee",
    "newVipStatus" : 2,
    "endTime" : 2099-09-09,
    "expireDate" : 4092599349,
    "vipStatus" : 1,
    "sign" : "yahee",
    "nickName" : "yahee",
    "exchangeCode" : null
  };

$done({body : JSON.stringify(yahee)});

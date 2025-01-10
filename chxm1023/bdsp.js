/*************************************

项目名称：布丁锁屏/布丁锁屏壁纸
下载地址：https://t.cn/A6o11VGR
下载地址：https://t.cn/A6NXjTUx
更新日期：2025-01-09




**************************************
 
[rewrite_local]
^https?:\/\/screen-lock\.(sm-check|51wnl-cq)\.com\/userApi\/saveUser.+ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/bdsp.js

[mitm] 
hostname = screen-lock.*.com

*************************************/


var ddm = JSON.parse($response.body);

ddm.data = {
  "exchangeCodeGetTime" : null,
  "id" : "chxm1023",
  "newVipStatus" : 2,
  "endTime" : 2099-09-09,
  "expireDate" : 4092599349,
  "vipStatus" : 1,
  "sign" : "chxm1023",
  "nickName" : "chxm1023",
  "exchangeCode" : null
};

$done({body : JSON.stringify(ddm)});

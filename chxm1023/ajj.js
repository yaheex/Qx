/*************************************

项目名称：爱剪辑
下载地址：https://t.cn/A6KKPMgP
更新日期：2025-01-08




**************************************

[rewrite_local]
^https?:\/\/api\.open\.loveclip\.site\/UserInfo\/(UserPersonalCoreAsync|GetUserDetail) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/ajj.js

[mitm]
hostname = api.open.loveclip.site

*************************************/


var ddm = JSON.parse($response.body);

if(/(UserPersonalCoreAsync|GetUserDetail)/.test($request.url)){
  ddm.data.IsVip = true;
  ddm.data.VipLevel = "1";
  ddm.data.VipExpire = "2099-09-09 09:09:09";
}

$done({body : JSON.stringify(ddm)});


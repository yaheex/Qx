/*************************************

项目名称：凡音钢琴
下载地址：https://too.st/6UO
更新日期：2023-12-18




**************************************

[rewrite_local]
^https?:\/\/gzfanyin\.com\/api\/ums\/getMember url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/fanyingangqin.js

[mitm]
hostname = gzfanyin.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data = { 
   ...chxm1023.data,
   memberRole: 1,
   vipEndDate: "2099-09-09 09:09:09",
   isAdmin: "Y",
   nickName: "叮当猫",
   avatar: "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png",
   vipGrade: 3
};

$done({body : JSON.stringify(chxm1023)});
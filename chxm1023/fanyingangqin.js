/*************************************

项目名称：凡音钢琴
下载地址：https://too.st/6UO
更新日期：2023-12-18

**************************************

[rewrite_local]
^https?:\/\/gzfanyin\.com\/api\/ums\/getMember url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/fanyingangqin.js

[mitm]
hostname = gzfanyin.com

*************************************/


var yahee = JSON.parse($response.body);

yahee.data = { 
   ...yahee.data,
   memberRole: 1,
   vipEndDate: "2099-09-09 09:09:09",
   isAdmin: "Y",
   nickName: "YaHee,",
   avatar: "https://raw.githubusercontent.com/yahee/Script_X/main/icon/ddm.png",
   vipGrade: 3
};

$done({body : JSON.stringify(yahee)});
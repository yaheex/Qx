/*************************************

项目名称：凡音钢琴
下载地址：https://too.st/6UO
更新日期：2023-12-18
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/gzfanyin\.com\/api\/ums\/getMember url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/fanyingangqin.js

[mitm]
hostname = gzfanyin.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data = { 
   ...yahe1023.data,
   memberRole: 1,
   vipEndDate: "2099-09-09 09:09:09",
   isAdmin: "Y",
   nickName: "YaHee,",
   avatar: "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png",
   vipGrade: 3
};

$done({body : JSON.stringify(yahe1023)});
/*************************************

项目名称：指尖时光
下载地址：https://too.st/5Dh
更新日期：2024-01-28
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/integral2\.(dasyibalang|zhijiantime)\.com\/.+\/User url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/zjsg.js

[mitm]
hostname = integral2.*.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data.VIP = 3;  //永久会员
//yahe1023.data.MembersBeginDateMs = 1666666666666;  //会员开始时间
//yahe1023.data.MembersEndDateMs = 4092599349000;  //会员到期时间

$done({body : JSON.stringify(yahe1023)});

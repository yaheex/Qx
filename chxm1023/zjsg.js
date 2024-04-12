/*************************************

项目名称：指尖时光
下载地址：https://too.st/5Dh
更新日期：2024-01-28
脚本作者：yahee

**************************************

[rewrite_local]
^https?:\/\/integral2\.(dasyibalang|zhijiantime)\.com\/.+\/User url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/zjsg.js

[mitm]
hostname = integral2.*.com

*************************************/


var yahee = JSON.parse($response.body);

yahee.data.VIP = 3;  //永久会员
//yahee.data.MembersBeginDateMs = 1666666666666;  //会员开始时间
//yahee.data.MembersEndDateMs = 4092599349000;  //会员到期时间

$done({body : JSON.stringify(yahee)});

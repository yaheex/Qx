/*************************************

项目名称：Agenda
下载地址：https://t.cn/A6ouQyEq

**************************************

[rewrite_local]

^https:\/\/accounts\.agenda\.com\/users\/.*\/license url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Ag.js

[mitm]

hostname = accounts.agenda.com

*************************************/


var body = $response.body; 
var yahee = JSON.parse(body); 

yahee.licenseStatusMobile = 1;
yahee.unlockExpiryMobile = 4092600296;
yahee.informUserOfPendingBonus = true;
yahee.licenseStatus = 1;
yahee.isSubscribed = true;
yahee.unlockExpiry = 4092600296;
yahee.error = 0;
yahee.isSubscribedMobile = true;
yahee.universalPurchaseAvailable = true;

$done({body : JSON.stringify(yahee)});

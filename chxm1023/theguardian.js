/*************************************

项目名称：The Guardian

**************************************

[rewrite_local]
^https:\/\/members-data-api\.theguardian\.com\/user-attributes\/me url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/theguardian.js
[mitm]
hostname = members-data-api.theguardian.com

*************************************/

var obj = JSON.parse($response.body);
obj.showSupportMessaging = false;
var accessLevels = ['member', 'paidMember', 'guardianPatron', 'paperSubscriber', 'recurringContributor', 'supporterPlus', 'digitalPack', 'guardianWeeklySubscriber'];
accessLevels.forEach(level => obj.contentAccess[level] = true);
$done({ body: JSON.stringify(obj) });

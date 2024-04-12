/*************************************

项目名称：SCIENTIFIC AMERICAN

**************************************

[rewrite_local]
^https:\/\/main-sciam-nature\.content\.pugpig\.com\/subs\/(itunes_store|pianomediaoauth_subs)\/verify_subscription url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/sa.js
[mitm]
hostname = main-sciam-nature.content.pugpig.com

*************************************/

let modifiedXml = $response.body;
modifiedXml = modifiedXml.replace(/state="inactive"/g, 'state="active"');
modifiedXml = modifiedXml.replace(/message="[^"]*"/g, 'message="cracked by leepyer"');
modifiedXml = modifiedXml.replace(/false/g, 'true');
$done({body: modifiedXml});

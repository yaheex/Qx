/*************************************

项目名称：挖财记账
下载地址：https://too.st/5ez
脚本作者：yahee
**************************************

[rewrite_local]
^https?:\/\/jz\.wacai\.com url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/wacaijizhang.js

[mitm]
hostname = jz.wacai.com

*************************************/


var body = $response.body;

body = body.replace(/\"isVip":\d+/g, '\"isVip":1');

body = body.replace(/\"sex":"\d+"/g, '\"sex":"1"');

body = body.replace(/\"isPermanentVip":\w+/g, '\"isPermanentVip":true');

body = body.replace(/\"freeSendVipEnable":\d+/g, '\"freeSendVipEnable":1');

body = body.replace(/\"freeSendAdFreeVipEnable":\d+/g, '\"freeSendAdFreeVipEnable":1');

body = body.replace(/\"vipType":\d+/g, '\"vipType":2');

body = body.replace(/\"expireDaysDays":\d+/g, '\"expireDaysDays":99999');

body = body.replace(/\"vipMemberEnable":\d+/g, '\"vipMemberEnable":1');

body = body.replace(/\"adFreePermanentVip":\w+/g, '\"adFreePermanentVip":true');

body = body.replace(/\"matchVipTrial":\w+/g, '\"matchVipTrial":true');

body = body.replace(/\"adFreeVipEnable":\d+/g, '\"adFreeVipEnable":1');

$done({body});
/*

夸克扫描王：https://apps.apple.com/app/id1160172628
夸克浏览器搜索：夸克扫描王

[rewrite_local]
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.sm\.order\.service\.member\.getmemberinfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/Guding88/kuakesaomiaowang.js

[MITM]
hostname = acs.m.taobao.com

*/
var yahee = JSON.parse($response.body);
yahee.data.data.userInfo.memberType = "VIP";
yahee.data.data.userInfo.vipExpirationTime = "148204937166000";
$done({ body: JSON.stringify(yahee) });

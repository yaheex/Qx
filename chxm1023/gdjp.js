/*************************************

项目名称：滚动截屏
下载地址：https://t.cn/A6AZHHA5
更新日期：2024-04-28
脚本作者：@Sheepfj



**************************************

[rewrite_local]
^http:\/\/tailor\.tomax\.xyz\/api\/users\/fetch\/info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/gdjp.js

[mitm]
hostname = tailor.tomax.xyz

*************************************/


var obj = JSON.parse($response.body);
const vip = '/api/users/fetch/info';

if ($request.url.indexOf(vip) != -1) {
obj.data.isVip=true;
obj.data.vip.expire="2099-09-09T09:09:09.000Z";
}
$done({body : JSON.stringify(obj)});

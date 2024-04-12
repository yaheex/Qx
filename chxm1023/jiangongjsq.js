/*

项目名称：建工计算器


[rewrite_local]
^https:\/\/calc\.kuaicad\.com\/authority\/verify_vip\? url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/jiangongjsq.js

[mitm]
hostname = calc.kuaicad.com

*/
var originalResponse = $response.body;

var lovebaby = JSON.parse(originalResponse);
lovebaby.data.type = 3;
lovebaby.data.expiresTime = "2099-08-03 16:11:22";
lovebaby.data.isExpires = false;
var modifiedResponseString = JSON.stringify(lovebaby);
$done({
  body: modifiedResponseString
});

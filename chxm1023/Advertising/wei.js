/*************************************

项目名称：魏-魏牌新能源(优化底栏+净化AD)
下载地址：https://t.cn/A6leY3hH
更新日期：2024-01-05

**************************************

[rewrite_local]
^https?:\/\/gw-app\.beantechyun\.com\/app-api\/api\/(wey\/.+|.+)\/content\/route\/(getWholeNodeContentInfo\?contentType=(MENU|APPSECONDAD)|getContentInfo) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Advertising/wei.js

[mitm]
hostname = gw-app.beantechyun.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const Alter = /contentType=MENU/;
const AD = /(getContentInfo|contentType=APPSECONDAD)/;

if(Alter.test($request.url)){
  for (var i = 0; i < chxm1023.data.length; i++) {  chxm1023.data[i].contentMessageList = chxm1023.data[i].contentMessageList.filter(item => item.title !== '发现' && item.title !== '商城');}
}

if(AD.test($request.url)){
  chxm1023.data = [];
}

$done({body: JSON.stringify(chxm1023)});
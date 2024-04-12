/*************************************

项目名称：亲邻开门-AD净化(App+小程序)
下载地址：https://t.cn/A6o47ShU

**************************************

[rewrite_local]
^https:\/\/(qadx.*\.qinlinad|mall-dsp.*\.qinlinkeji)\.com url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Advertising/xcx/qlkm.js

[mitm]
hostname = qadx*.qinlinad.com, mall-dsp*.qinlinkeji.com

*************************************/


var body = $response.body;

body = body.replace(/\"list"./g, delete '\"list"');

body = body.replace(/\"newYearSkinBannerUrl":".*?"/g, '\"newYearSkinBannerUrl":""');

body = body.replace(/\"defaultBannerUrl":".*?"/g, '\"defaultBannerUrl":""');

body = body.replace(/\"groupId":"\d+"/g, '\"groupId":"0"');

body = body.replace(/\"mainSwitch":\d+/g, '\"mainSwitch":0');

body = body.replace(/\"slotId":".*?"/g, '\"slotId":""');

body = body.replace(/\"slotModeSort":\d+/g, '\"slotModeSort":0');

$done({body});

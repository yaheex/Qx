/*************************************

项目名称：漫画台Lite
下载地址：#小程序://漫画台/NGyUMsmS3tlUbgI

**************************************

[rewrite_local]
^https?:\/\/comic\.321mh\.com url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Advertising/xcx/donghuatai.js

[mitm]
hostname = comic.321mh.com

*************************************/


var body = $response.body;


body = body.replace(/\"isbuy":\d+/g, '\"isbuy":0');

body = body.replace(/\"is_vip":\d+/g, '\"is_vip":0');

body = body.replace(/\"islock":\d+/g, '\"islock":0');

body = body.replace(/\"price":\d+/g, '\"price":0');

body = body.replace(/\"download_price":\d+/g, '\"download_price":0');

$done({body});

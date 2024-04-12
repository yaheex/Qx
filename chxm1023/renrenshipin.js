/*************************************

项目名称：人人视频
下载地址：https://t.cn/A60DZeo4
**************************************

[rewrite_local]
^https?:\/\/api\.(hujuvod\.com|qwapp\.top)\/(user\/personal\/information|app\/drama\/page) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/renrenshipin.js

[mitm]
hostname = api.hujuvod.com, api.qwapp.top

*************************************/


if ($response.body != 'undefined'){
var body = $response.body;
var yahee = JSON.parse(body);
const urla = '/user/personal/information';
const urlb = '/app/drama/page';

if ($request.url.indexOf(urla) != -1){
  yahee.data.user["vipInfo"] = { "level" : "3",        "valid" : true, "expiredTime" : 4092599349000 };
  yahee.data.user.level = 3;
  yahee.data.user.vipLevel = 3;
  body = JSON.stringify(yahee);
}

if ($request.url.indexOf(urlb) != -1){
  body = body.replace(/\"canShowVip":\w+/g, '\"canShowVip":false');
  body = body.replace(/\"externalAds":\w+/g, '\"externalAds":false');
  body = body.replace(/\"feeMode":\w+/g, '\"feeMode":free');
  body = body.replace(/\"enable":\w+/g, '\"enable":true');
  body = body.replace(/\"canPlay":false/g, '\"canPlay":true');
}
$done({body});}

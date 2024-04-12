/*************************************

项目名称：刷刷题
下载地址：https://t.cn/A60szmtc

**************************************

[rewrite_local]
^https?:\/\/api\.shuashuati\.com url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/shuashuati.js

[mitm]
hostname = api.shuashuati.com

*************************************/


var body = $response.body;

function deepDelete(yahee1, propToDelete) {
  for (let prop in yahee1) {
    if (prop === propToDelete) {
      delete yahee1[prop];
    } else if (typeof yahee1[prop] === "object") {
      deepDelete(yahee1[prop], propToDelete);
    }
  }
}
var yahee = JSON.parse(body);
deepDelete(yahee, ['adInfo','defaultAd']);
body = JSON.stringify(yahee);

body = body.replace(/\"state":\d+/g, '\"state":2');

body = body.replace(/\"vipToTime":\w+/g, '\"vipToTime":"2099-09-09 09:09:09"');

body = body.replace(/\"vipToTimeStr":\w+/g, '\"vipToTimeStr":"2099-09-09 09:09:09"');

body = body.replace(/\"first":\d+/g, '\"first":1');

body = body.replace(/\"userDou":\d+/g, '\"userDou":1');

body = body.replace(/\"balance":\w+/g, '\"balance":1');

body = body.replace(/\"adType":"(.*?)"/g, '\"adType":null');

body = body.replace(/\"pay":\d+/g, '\"pay":0');

body = body.replace(/\"pay":\w+/g, '\"pay":false');

body = body.replace(/\"free":\d+/g, '\"free":1');

body = body.replace(/\"word_vip":\d+/g, '\"word_vip":1');

body = body.replace(/\"from":\d+/g, '\"from":0');

$done({body});

/*************************************

项目名称：搜罗好货
下载地址：#小程序://搜罗好货/Rt7Kuvpe4GLPjaD

**************************************

[rewrite_local]
^https?:\/\/www\.i3zh\.com\/wp-json\/watch-life-net\/.+\/(options|posts) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/yahee/Advertising/xcx/slhh.js

[mitm]
hostname = www.i3zh.com

*************************************/


var body = $response.body;
var yahee = JSON.parse(body);

yahee.listAdId = "";
yahee.videoAdId = "";
yahee.interstitialAdId = "";
yahee.excitationAd = "0";
yahee.detailAd = "0";

$done({body : JSON.stringify(yahee)});

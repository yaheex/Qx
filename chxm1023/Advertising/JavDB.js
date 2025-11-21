/*************************************
项目名称：JavDB-去广告
下载地址：https://javdb008.com
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https?:\/\/api\.((pxxgg|yijingluowangluo)\.xyz|ujvnmkx\.cn)\/api url script-response-body https://raw.githubusercontent.com/chxm1023/Advertising/main/JavDB.js

[mitm]
hostname = api.pxxgg.xyz, api.ujvnmkx.cn, api.yijingluowangluo.xyz

*************************************/


var body = $response.body;
var yahe1023 = JSON.parse(body);

const ada = '/ads';
const adb = '/startup';

//横幅广告
if ($request.url.indexOf(ada) != -1){
  yahe1023.data.ads = {};
}

//公告，开屏
if ($request.url.indexOf(adb) != -1){
  yahe1023.data.splash_ad.enabled = false;
  yahe1023.data.splash_ad.overtime = 0;
  yahe1023.data.splash_ad.ad = {};
  yahe1023.data.feedback.placeholder = "";
  yahe1023.data.settings.UPDATE_DESCRIPTION = "";
  yahe1023.data.settings.NOTICE = "";
}

$done({body : JSON.stringify(yahe1023)});

/*************************************

项目名称：微信公众号底部广告
脚本作者：yahee

**************************************

[rewrite_local]
^http[s]?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad.+ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Advertising/wxgzhad.js

[mitm]
hostname = mp.weixin.qq.com

*************************************/


var body = $response.body;
var yahee = JSON.parse(body);

yahee.advertisement_num = 0;
yahee.advertisement_info = [];
delete yahee.appid;

$done({body : JSON.stringify(yahee)});
 

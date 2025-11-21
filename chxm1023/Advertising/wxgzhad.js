/*************************************

项目名称：微信公众号底部广告
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http[s]?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad.+ url script-response-body https://raw.githubusercontent.com/chxm1023/Advertising/main/wxgzhad.js

[mitm]
hostname = mp.weixin.qq.com

*************************************/


var body = $response.body;
var yahe1023 = JSON.parse(body);

yahe1023.advertisement_num = 0;
yahe1023.advertisement_info = [];
delete yahe1023.appid;

$done({body : JSON.stringify(yahe1023)});
 

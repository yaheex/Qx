/*************************************

项目名称：陆琪讲故事
下载地址：https://t.cn/A6WinsEM
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
https?:\/\/www\.luqijianggushi\.com\/api url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/luqijianggushi.js

[mitm]
hostname = www.luqijianggushi.com

*************************************/


var body = $response.body;

body = body.replace(/\"is_share":\d+/g, '\"is_share":1');
body = body.replace(/\"is_vip":\d+/g, '\"is_vip":1');
body = body.replace(/\"_vip_endtime":".*?"/g, '\"_vip_endtime":"2099-09-09"');
body = body.replace(/\"expiretime":\d+/g, '\"expiretime":4092599349');
body = body.replace(/\"expires_in":\d+/g, '\"expires_in":4092599349');
body = body.replace(/\"vip_endtime":\d+/g, '\"vip_endtime":4092599349');
body = body.replace(/\"avatar":".*?"/g, '\"avatar":"https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/dlam.png"');
body = body.replace(/\"theme_content":".*?"/g, '\"theme_content":"YaHee, Studio. || 已解锁所有节目🎉 || ⚠️仅供参考，🈲转载与售卖！|| ——谢谢合作"');

$done({body});

/*************************************

项目名称：如期
下载地址：https://t.cn/A6KVkB2y


**************************************

[rewrite_local]
^https:\/\/www\.freshhome\.top url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/rq.js

[mitm]
hostname = www.freshhome.top

*************************************/


body = $response.body.replace(/\"isVip":"\d+"/g, '\"isVip":"1"').replace(/\"vipType":\w+/g, '\"vipType":true').replace(/\"vipEndTime":(.*?)/g, '\"vipEndTime":4092599350000');

$done({body});

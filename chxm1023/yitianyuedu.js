/*************************************

项目名称：一天阅读 解锁VIP
下载地址：https://t.cn/A6C6jqJt

**************************************

[rewrite_local]

^https:\/\/novel\.test\.onedayapp\.cn\/login\/sync.+ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/yitianyuedu.js

[mitm]

hostname = novel.test.onedayapp.cn

*************************************/


var yahee = JSON.parse($response.body);

yahee.data.vip = 3;
yahee.data.sex =1;

$done({body : JSON.stringify(yahee)});

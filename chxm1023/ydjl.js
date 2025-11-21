/*************************************

项目名称：阅读记录 解锁VIP
下载地址：https://t.cn/A6GJPYdo
温馨提示：每次使用需打开脚本，非一次性解锁
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️

**************************************

[rewrite_local]

^https:\/\/app\.yidiansz\.com\/api\/.+\/app\/user\/info?(.*?)*$ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/ydjl.js

[mitm]

hostname = app.yidiansz.com

*************************************/


var body = $response.body;
var yahe1023 = JSON.parse(body);

yahe1023.data.member_type = 4;
yahe1023.data.end_date = "2099-09-09 09:09:09";
yahe1023.data.has_perpetual_vip = 1;
yahe1023.data.member_status = 4;
yahe1023.data.auto_renew_status = 2;
yahe1023.data.is_publish = 1;

$done({body : JSON.stringify(yahe1023)});


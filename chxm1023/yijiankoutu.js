/*************************************

项目名称：一键扣图
下载地址：https://t.cn/A6pdVNzJ
**************************************

[rewrite_local]
^https?:\/\/api\.mattingm\.com\/receipt_api\/user\/info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/yijiankoutu.js

[mitm]
hostname = api.mattingm.com

*************************************/


var yahee = JSON.parse($response.body);

yahee.data.expire_at = "2099-09-09 09:09:09";
yahee.data.state = 3;

$done({body : JSON.stringify(yahee)});

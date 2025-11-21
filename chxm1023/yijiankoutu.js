/*************************************

项目名称：一键扣图
下载地址：https://t.cn/A6pdVNzJ
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.mattingm\.com\/receipt_api\/user\/info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/yijiankoutu.js

[mitm]
hostname = api.mattingm.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data.expire_at = "2099-09-09 09:09:09";
yahe1023.data.state = 3;

$done({body : JSON.stringify(yahe1023)});

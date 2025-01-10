/*************************************

项目名称：RainViewer天气预报
下载地址：https://t.cn/A6WqTbgz




**************************************

[rewrite_local]
^https?:\/\/d1hzbu30hrhkoe\.cloudfront\.net\/mobile\/verify\/ios url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/RainViewer.js

[mitm]
hostname = d1hzbu30hrhkoe.cloudfront.net

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data = {...chxm1023.data,
    "is_grace" : true,
    "purchased" : true,
    "is_trial" : true,
    "is_cancelled" : true,
    "type" : 2,
    "has_orders" : true,
    "expiration" : 4092599349,
    "is_expired" : false
  };

$done({body : JSON.stringify(chxm1023)});

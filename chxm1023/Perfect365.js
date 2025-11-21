/*************************************

项目名称：Perfect365
下载地址：https://t.cn/A6YH7YPQ
更新日期：2024-03-02
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/service\.perfect365\.com\/svr\/perfect365\/services url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Perfect365.js

[mitm]
hostname = service.perfect365.com

*************************************/


var yahe1023 = JSON.parse($response.body);

if (chxm1023 && yahe1023.data && yahe1023.data.subscribing === false) {
  yahe1023.data = {
    ...yahe1023.data,
    "yearlyConversion": true,
    "eligible": true,
    "productId": "subscription_yearly",
    "expireTime": "4092599349000",
    "subscribing": true
  };
}

$done({ body: JSON.stringify(yahe1023) });

/*************************************

项目名称：轻图
下载地址：https://t.cn/A6OjOeJY
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http[s]s:\/\/purchase-qingtu-api\.b612kaji\.com\/v1\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/qingtu.js

[mitm]
hostname = purchase-qingtu-api.b612kaji.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023 ={
  "result" : {
    "products" : [
      {
        "managed" : false,
        "status" : "ACTIVE",
        "startDate" : 1695261165000,
        "productId" : "com.photovision.camera.subscribe.plan.oneyear",
        "expireDate" : 4092599349000
      }
    ],
    "activated" : true
  }
};

$done({body : JSON.stringify(yahe1023)});

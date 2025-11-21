/*************************************

项目名称：Tripsy-旅行规划者
下载地址：https://t.cn/A60jMYum
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/firstclass\.tripsy\.app\/api\/.+\/receipt\/update url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Tripsy.js

[mitm]
hostname = firstclass.tripsy.app

*************************************/


<<<<<<< HEAD
if ($response.body != 'undefined'){var yahe1023 = JSON.parse($response.body);yahe1023 = {"is_premium":true,"expiration_intent":0,"is_trial":true,"subscription":"premium.yearly.29.99.v4","expiration_date":"2099-09-09T09:09:09Z","is_introductory_offer":false,"is_in_billing_retry_period":false};$done({body:JSON.stringify(yahe1023)})};$done();
=======
if ($response.body != 'undefined'){var chxm1023 = JSON.parse($response.body);chxm1023 = {"is_premium":true,"expiration_intent":0,"is_trial":true,"subscription":"premium.yearly.29.99.v4","expiration_date":"2099-09-09T09:09:09Z","is_introductory_offer":false,"is_in_billing_retry_period":false};$done({body:JSON.stringify(chxm1023)})};$done();
>>>>>>> c4b5e432faadef2ba6d2d4d954f4589f6d40c3ab

/*************************************

项目名称：DeepFaker
下载地址：https://t.cn/A6WuKDkR
更新日期：2023-11-19
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.deepfaker\.app\/api\/.* url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/DeepFaker.js

[mitm]
hostname = api.deepfaker.app

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.subscription_type = "PRO";
yahe1023.max_video_file_size = 990000000;
yahe1023.subscription_expiration_date = "2099-09-09T09:09:09Z";

$done({body : JSON.stringify(yahe1023)});

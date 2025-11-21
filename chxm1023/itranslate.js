/*************************************

项目名称：iTranslate 翻译
下载地址：https://t.cn/A6p2IR1g
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：进入App出现付费按[恢复购买]

**************************************

[rewrite_local]
^https?:\/\/ssl-api\.itranslateapp\.com\/accounts\/.+\/(subscriptions\/verify|marketing\/consent\/status) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/itranslate.js

[mitm]
hostname = ssl-api.itranslateapp.com

*************************************/


var yahe1023 = JSON.parse($response.body);
const vip = '/subscriptions/verify';
const active = '/marketing/consent/status';

if ($request.url.indexOf(vip) != -1){
  yahe1023.licenses = [
    {
      "product_id" : "com.itranslate.pro.yearly",
      "bundle_id" : "com.outerspaceapps.itranslate",
      "is_trial_period" : true,
      "original_transaction_id" : "160001314520000",
      "expires_date_ms" : 4092599350000,
      "transaction_id" : "160001314520000"
    }
  ];
}

if ($request.url.indexOf(active) != -1){
  yahe1023 ={
  "is_active" : true
  };
}

$done({body : JSON.stringify(yahe1023)});
/*************************************

项目名称：爱涂绘画
下载地址：https://t.cn/A6OlvCzI

**************************************

[rewrite_local]
^https?:\/\/kkr-user\.tapque\.com\/kkruserapi\/userOrderInfo\/isVip url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/aituhuihua.js

[mitm]
hostname = kkr-user.tapque.com

*************************************/


var yahee = JSON.parse($response.body);

yahee = {
  "msg" : "处理完成",
  "records" : {
    "isVipValue" : true,
    "vipExpireDate" : "2099-09-09 09:09:09"
  },
  "code" : 6000
};

$done({body : JSON.stringify(yahee)});

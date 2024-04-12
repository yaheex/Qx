/*************************************

项目名称：消防行
下载地址：https://t.cn/A6OsSXGV
**************************************

[rewrite_local]
^https?:\/\/www\.xfx119\.com\/ksVRExamSystem\/validityTerm url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/xiaofangxing.js

[mitm]
hostname = www.xfx119.com

*************************************/


var yahee = JSON.parse($response.body);

yahee = {...yahee,
  "llkcValidityDays" : 4092599349,
  "tkValidityDays" : 4092599349,
  "validityDays" : 4092599349,
  "fgjxjvValidityDays" : 4092599349,
  "studySubsystem" : "2099-09-09 09:09:09"
}

$done({body : JSON.stringify(yahee)});

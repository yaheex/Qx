/*************************************

项目名称：日杂相机，Fomz相机
下载地址：https://t.cn/A6KMxlLF
下载地址：https://t.cn/A6KMxOrR


！

**************************************

[rewrite_local]
^https:\/\/.*\.imendon\.com\/v2\/purchase\/vip\/verification url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/lgxj.js

[mitm]
hostname = *.imendon.com

*************************************/


var chxm1023 = JSON.parse($response.body);chxm1023.data.isValid = 1;$done({body : JSON.stringify(chxm1023)});

/*************************************

项目名称：一木清单
下载地址：https://t.cn/A6HLNxgY
更新日期：2024-05-09




**************************************

[rewrite_local]
^https:\/\/yimutodo\.com\/api\/v\/mtop\/user\/info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/yimuqingdan.js

[mitm]
hostname = yimutodo.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data = {
  ...chxm1023.data,
  "memberType" : "YEAR",
  "memberExpiredTime" : 4092599349000,
  "class" : "com.tian.OneWoodList.year.48"
};
chxm1023.data.openInfos.class = "com.tian.OneWoodList.year.48";

$done({body : JSON.stringify(chxm1023)});

/*************************************

项目名称：极速扫描仪
下载地址：目前下架了
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/scanner\.jianse\.tv\/api\/users url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/jssmy.js

[mitm]
hostname = scanner.jianse.tv

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.lastDeviceId =  "00000000-0000-0000-0000-000000000000";
yahe1023.vipExpireDate = "2099-09-09 09:09:09";
yahe1023._instanceName = "666,666 (+86)";
yahe1023.countryCode = "86";
yahe1023.id = 666666;
yahe1023.lastLoginTime = "2022-11-27T09:12:28.529";
yahe1023.vip = true;
yahe1023.createTime = "2021-02-24T21:06:36";

$done({body: JSON.stringify(yahe1023)});

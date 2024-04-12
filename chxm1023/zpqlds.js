/*************************************

项目名称：PhotoSlip-照片清理大师

**************************************

[rewrite_local]

^https:\/\/www2\.tigeroom\.com url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/zpqlds.js

[mitm] 

hostname = www2.tigeroom.com

*************************************/


var yahee = JSON.parse($response.body);

yahee = {
  "message" : "",
  "data" : {
    "phone" : null,
    "viptime" : "2099-09-09",
    "stafftype" : "02",
    "isperfect" : 0,
    "username" : null,
    "staffid" : "1601256577462566913",
    "photo" : "https://fff-kangxizidian.oss-cn-hangzhou.aliyuncs.com/image/photo/default/default-photo.png",
    "email" : null,
    "isvip" : 1,
    "appleid" : null
  },
  "code" : 200
};


$done({body : JSON.stringify(yahee)});

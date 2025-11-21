/*************************************

项目名称：iyf.tv影视
下载地址：https://m.iyf.tv
更新日期：2024-04-21
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.iyf\.tv\/api\/user\/getuserinfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/iyftv.js

[mitm]
hostname = api.iyf.tv

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data = {
  ...yahe1023.data,
  "userExtension" : {
    ...yahe1023.data.userExtension,
    "currentLevel" : 9,
    "gold" : 999,
    "levelTitle" : "LV9"
  },
  "vipCategoryId" : 3,
  "vipRegion" : "1",
  "status" : true,
  "eDate" : "2099-09-09T09:09:09Z",
  "sDate" : "2024-04-15T17:12:00Z",
  "bigV" : true,
  "bigVEndTime" : "2099-09-09T09:09:09Z",
  "role" : 9,
  "vipTypeName" : "至尊会员",
  "bigVBeginTime" : "2023-01-01T00:00:00Z",
  "vipCategoryName" : "至尊会员",
  "vipLevel" : 9,
  "introduce" : "YaHee, Studio."
};

$done({body : JSON.stringify(yahe1023)});

/*************************************

项目名称：地震预警
下载地址：https://t.cn/A6CoMiO5
更新日期：2024-04-29




**************************************

[rewrite_local]
^https?:\/\/mobile-new\.chinaeew\.cn\/v\d\/order\/apple\/vip url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/dzyj.js

[mitm]
hostname = mobile-new.chinaeew.cn

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "message" : "查询成功",
  "data" : {
    "endTime" : 4092599349000
  },
  "code" : 0
};

$done({body : JSON.stringify(chxm1023)});

/*************************************

项目名称：周易起名大师
下载地址：https://t.cn/A6EhpFZM
更新日期：2024-09-19




**************************************

[rewrite_local]
^https?:\/\/www\.zhouyilive\.com\/qm-api\/nm_user\.php url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/zyqmds.js

[mitm]
hostname = www.zhouyilive.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data.vip = "1";
chxm1023.data.hpc_amount = "999";

$done({body : JSON.stringify(chxm1023)});
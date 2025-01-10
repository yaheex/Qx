/*************************************

项目名称：建工计算器
下载地址：https://t.cn/A68YJHGi
更新日期：2024-08-05


使用说明：先打开脚本再进去APP登录账号即可


**************************************

[rewrite_local]
^https?:\/\/calc\.kuaicad\.com\/authority\/verify_vip url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/jgjsq.js

[mitm]
hostname = calc.kuaicad.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data = {
  ...chxm1023.data,
  "type" : 1,
  "expiresTime" : 4092599349000,
  "isExpires" : false
};

$done({body : JSON.stringify(chxm1023)});
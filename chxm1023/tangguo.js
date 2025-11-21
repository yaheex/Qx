/*************************************

项目名称：糖果壁纸
下载地址：https://t.cn/A6Wu0rgn
更新日期：2023-11-19
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/w\.5hzs\.com\/player\/index url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/tangguo.js

[mitm]
hostname = w.5hzs.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data.member = {"is_vip" : true};
yahe1023.data.sex = 1;
yahe1023.data.type = 1;
yahe1023.data.command = true;
yahe1023.data.status = 2;
yahe1023.data.creator = true;
yahe1023.data.name = "YaHee, Studio.";
yahe1023.data.headimg = "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png";

$done({body : JSON.stringify(yahe1023)});

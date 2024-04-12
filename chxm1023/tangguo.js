/*************************************

项目名称：糖果壁纸
下载地址：https://t.cn/A6Wu0rgn
更新日期：2023-11-19

**************************************

[rewrite_local]
^https?:\/\/w\.5hzs\.com\/player\/index url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/tangguo.js

[mitm]
hostname = w.5hzs.com

*************************************/


var yahee = JSON.parse($response.body);

yahee.data.member = {"is_vip" : true};
yahee.data.sex = 1;
yahee.data.type = 1;
yahee.data.command = true;
yahee.data.status = 2;
yahee.data.creator = true;
yahee.data.name = "叮当猫の分享频道";
yahee.data.headimg = "https://raw.githubusercontent.com/yahee/Script_X/main/icon/ddm.png";

$done({body : JSON.stringify(yahee)});

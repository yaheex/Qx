/*************************************

项目名称：傲软抠图
下载地址：https://t.cn/A6xBOE5d
项目名称：傲软扫描
下载地址：https://t.cn/A6o1jHWR
项目名称：傲软PDF转换
下载地址：https://t.cn/A6o1j588
项目名称：傲软PDF编辑
下载地址：https://t.cn/A6o1jCGU
项目名称：傲软投屏
下载地址：https://t.cn/A65nw9gx
项目名称：咖映
下载地址：https://t.cn/A6o1lsFL
项目名称：轻闪PDF
下载地址：https://t.cn/A6o1iiI2
项目名称：乃糖小组件
下载地址：https://t.cn/A6o1iMdP
项目名称：佐糖
下载地址：https://t.cn/A6o1iVTI
项目名称：佐糖照片修复
下载地址：https://t.cn/A6o1itzG

**************************************

[rewrite_local]

^https?:\/\/.*\.(aoscdn\.com|apsapp\.cn) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/arqjt.js

[mitm] 

hostname = *.aoscdn.com, *.apsapp.cn

*************************************/


var yahee = JSON.parse($response.body);
const vipa = '/base/vip/client/authorizations';
const vipb = '/vips';


if ($request.url.indexOf(vipa) != -1){
  yahee.data.is_activated = 1;
  yahee.data.remain_days = 999999999;
  yahee.data.expire_time = "2099-09-09 09:09:09";
  yahee.data.expired_at = 4092600296;
  yahee.data.license_type = "premium";
  yahee.data.durations = 999999999;
  yahee.data.vip_special = 1;
}

if ($request.url.indexOf(vipb) != -1){
  yahee.data = {
    "group_expired_at" : 0,
    "is_tried" : 0,
    "max_devices" : 1,
    "period_type" : "active",
    "candy_expired_at" : 0,
    "pending" : 0,
    "remained_seconds" : 0,
    "limit" : 0,
    "expired_at" : 4092600296,
    "candy" : 0,
    "license_type" : "premium",
    "quota" : 999999999,
    "status" : 1,
    "vip_special" : 1,
    "coin" : 100
  };
}

$done({body : JSON.stringify(yahee)});

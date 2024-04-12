/*************************************

项目名称：薄荷健康-解锁超级会员
下载地址：https://t.cn/A69ull4r

**************************************

[rewrite_local]
^https?:\/\/api\.boohee\.com\/app-interface\/.+\/user\/user_info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/bohejiankang.js

[mitm]
hostname = api.boohee.com

*************************************/


var yahee = JSON.parse($response.body);

  yahee.data.vip.is_member = true;
  yahee.data.vip.state = "1";
  yahee.data.vip.expired_at = "2099-09-09 09:09:09";
  yahee.data.vip.integral_member = {
        "integral": 0,
        "level": 1,
        "level_name": "蓝钻会员"
      };

$done({body : JSON.stringify(yahee)});

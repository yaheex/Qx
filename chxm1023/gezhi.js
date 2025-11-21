/*************************************

项目名称：格志日记
下载地址：https://t.cn/A6oDgPyl
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/diary-id\.sumi\.io\/api\/profile url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/gezhi.js

[mitm]
hostname = diary-id.sumi.io

*************************************/


var yahe1023 = JSON.parse($response.body);

  yahe1023.data["inserted_at"] = "2023-08-01T05:53:45.839474";
  yahe1023.data["expires_at"] = "2099-09-09T09:09:09.000000";
  yahe1023.data["has_stripe_account"] = true;
  yahe1023.data["membership_status"] = "premium";
  yahe1023.data["db_version"] = 1;
  yahe1023.data["active_device_ids"] = ["io.sumi.GridDiary.pro.annually"];

$done({body : JSON.stringify(yahe1023)});

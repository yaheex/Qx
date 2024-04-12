/*************************************

项目名称：格志日记
下载地址：https://t.cn/A6oDgPyl！

**************************************

[rewrite_local]
^https?:\/\/diary-id\.sumi\.io\/api\/profile url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/gezhi.js

[mitm]
hostname = diary-id.sumi.io

*************************************/


var yahee = JSON.parse($response.body);

  yahee.data["inserted_at"] = "2023-08-01T05:53:45.839474";
  yahee.data["expires_at"] = "2099-09-09T09:09:09.000000";
  yahee.data["has_stripe_account"] = true;
  yahee.data["membership_status"] = "premium";
  yahee.data["db_version"] = 1;
  yahee.data["active_device_ids"] = ["io.sumi.GridDiary.pro.annually"];

$done({body : JSON.stringify(yahee)});

/*************************************

项目名称：得间小说 解锁会员
下载地址：https://t.cn/A6i8BXBm

**************************************

[rewrite_local]

^https:\/\/dj\.palmestore\.com\/zyuc\/api\/user\/accountInfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/dejianxiaoshuo.js

[mitm]

hostname = dj.palmestore.com

*************************************/


var yahee = JSON.parse($response.body);

yahee.body.userInfo.unlockVipInfo = {
        "vipType" : 1,
        "vipExpire" : 4092599349,
        "expireDate" : "2099-09-09"
      };
yahee.body.userInfo.vipInfo = {
        "content" : "点击进入购买会员",
        "vipType" : 1,
        "expireDate" : "2099-09-09",
        "halfScreen" : "https://dj.palmestore.com/zytc/public/index.php?ca=FreeVip.Index&source=book",
        "expireDateNew" : "2099-09-09",
        "description" : "开通会员",
        "fullScreen" : "https://dj.palmestore.com/zytc/public/index.php?ca=FreeVip.Index&showContentInStatusBar=1&source=mine",
        "vipExpire" : 4092599349};


$done({body : JSON.stringify(yahee)});

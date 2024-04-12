/*************************************

项目名称：Cubox-收藏阅读
下载地址：https://t.cn/A6x4qhyJ

**************************************

[rewrite_local]
^https:\/\/cubox\.(pro|cc)\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/Cb.js

[mitm]
hostname = cubox.*

*************************************/


var body = $response.body;
var url = $request.url;
var yahee = JSON.parse(body);
const vip = '/userInfo';

if (url.indexOf(vip) != -1) {
    yahee.data.level = 1;
    yahee.data.expireTime = "2099-09-09T09:09:09+09:09";
    yahee.data.nickName = "yahee";
    yahee.data.thirdNickName = "yahee";
    yahee.data.isExpire = false;
    yahee.data.active = true;
    yahee.data.isThirdUser = true;
    yahee.data.payTime = 1660006006;
    body = JSON.stringify(yahee);
}

$done({body});

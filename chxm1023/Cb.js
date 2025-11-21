/*************************************

项目名称：Cubox-收藏阅读
下载地址：https://t.cn/A6x4qhyJ
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/cubox\.(pro|cc)\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/Cb.js

[mitm]
hostname = cubox.*

*************************************/


var body = $response.body;
var url = $request.url;
var yahe1023 = JSON.parse(body);
const vip = '/userInfo';

if (url.indexOf(vip) != -1) {
    yahe1023.data.level = 1;
    yahe1023.data.expireTime = "2099-09-09T09:09:09+09:09";
    yahe1023.data.nickName = "yahe1023";
    yahe1023.data.thirdNickName = "yahe1023";
    yahe1023.data.isExpire = false;
    yahe1023.data.active = true;
    yahe1023.data.isThirdUser = true;
    yahe1023.data.payTime = 1660006006;
    body = JSON.stringify(yahe1023);
}

$done({body});

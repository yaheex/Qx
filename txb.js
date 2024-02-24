
/*************************************
# 兔小贝儿童英语 解锁会员
# 下载：https://apps.apple.com/cn/app/id1495140048
# 兔小贝拼音 解锁会员
# 下载：https://apps.apple.com/cn/app/id1321808354
**************************************
 [rewrite_local]

^https://.*-api\.tuxiaobei\.com/v1/user/ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/txb.js

[mitm]
hostname = *-api.tuxiaobei.com
 */

var body = $response.body;
var obj = JSON.parse(body);

obj.data.vip = 1;
obj.data.vip_expire_at = 2800000000;
obj.data.vip_type = "2";

body = JSON.stringify(obj);
$done({body});

/***********************************

应用名称：Stay去除仓库广告
脚本作者：Cuttlefish
            
[rewrite_local]

^https?:\/\/api\.shenyin\.name\/stay-fork\/browse\/featured$ url script-response-body https://raw.githubusercontent.com/chxm1023/Advertising/main/Stay.js

[mitm]

hostname = api.shenyin.name

***********************************/

let yahe1023 = JSON.parse($response.body);
if (yahe1023.biz) {
    yahe1023.biz = Object.values(yahe1023.biz).filter(item => !(item["type"]=="promoted"));
}
$done({ body: JSON.stringify(yahe1023) });

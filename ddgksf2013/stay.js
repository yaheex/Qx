/***********************************

> 应用名称：Stay去除仓库广告
> 更新时间：2022-10-17
            
[rewrite_local]
^https?:\/\/api\.shenyin\.name\/stay-fork\/browse\/featured$ url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/ddgksf2013/stay.js

[mitm]

hostname=api.shenyin.name

***********************************/

let yahee = JSON.parse($response.body);
if (yahee.biz) {
    yahee.biz = Object.values(yahee.biz).filter(item => !(item["type"]=="promoted"));
}
$done({ body: JSON.stringify(yahee) });

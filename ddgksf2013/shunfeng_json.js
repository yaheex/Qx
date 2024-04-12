/*
version     v0.0.1
updatetime  2022-11-17
function    顺丰


[rewrite_local]
https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryInfoFlow url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/ddgksf2013/shunfeng_json.js

[mitm]
hostname = ccsp-egmas.sf-express.com

*/

if ($request.url.indexOf("app/ad/queryInfoFlow") != -1) {
    var yahee = JSON.parse($response.body);
    yahee.obj = Object.values(yahee.obj).filter((item) => item.adverId==2833);
    $done({
        body: JSON.stringify(yahee),
    });
}

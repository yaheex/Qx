/*************************************

项目名称：glass

**************************************

[rewrite_local]
^https:\/\/glass\.photo\/api\/(v2\/users\/[0-9a-zA-Z-]+$|v1\/account$|v3\/token$) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/glass.js
[mitm]
hostname = glass.photo

*************************************/

if (-1 !== $request.url.indexOf("api/v1/account")){
    var obj = JSON.parse($response.body);
    obj.needs_subscription = false;
    obj.is_patron = true;
    $done({body: JSON.stringify(obj)});
  }else if (-1 !== $request.url.indexOf("api/v2/users")){
    var obj = JSON.parse($response.body);
    obj.is_patron = true;
    $done({body: JSON.stringify(obj)});
  }else if (-1 !== $request.url.indexOf("api/v3/token")){
    var obj = JSON.parse($response.body);
    obj.user.needs_subscription = false;
    obj.user.is_patron = true;
    $done({body: JSON.stringify(obj)});
  }
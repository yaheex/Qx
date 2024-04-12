/*************************************

项目名称：爱剪辑

**************************************

[rewrite_local]

^https?:\/\/api\.open\.loveclip\.site\/UserInfo\/(UserPersonalCoreAsync|GetUserDetail) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/ajj.js

[mitm]

hostname = api.open.loveclip.site

*************************************/


const urla = "/UserInfo/UserPersonalCoreAsync";
const urlb = "/UserInfo/GetUserDetail";
var body = $response.body;

if ($request.url.indexOf(urla) != -1){
let yahee = JSON.parse(body);
yahee.data.IsVip = true;
yahee.data.VipLevel = "1";
yahee.data.VipExpire = "2099-09-09 09:09:09";
body = JSON.stringify(yahee);}



if ($request.url.indexOf(urlb) != -1){
let yahee = JSON.parse(body);
yahee.data.IsVip = true;
yahee.data.VipLevel = "1";
yahee.data.VipExpire = "2099-09-09 09:09:09";
body = JSON.stringify(yahee);}

$done({body});

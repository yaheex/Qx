/*************************************
项目名称：秒连VPN 解锁线路选择
下载地址：
/************************************
//秒连VPN会员等级
***********************************/
// 重写路径
[rewrite_local]
https?:\/\/.*\.mlinkapp\.cc\/v1\/user url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/miaolian.js
// 重写网站
hostname=*.mlinkapp.cc
***********************************/
var body = $response.body; 
var obj = JSON.parse(body); 
// 修改数据字段
obj.data.level = "3";
// 重写响应体
$done({ body: JSON.stringify(obj) });

/*************************************

项目名称：手机扫描
下载地址：https://t.cn/A6KcuPty
项目名称：图片编辑
下载地址：https://t.cn/A6KcuGEk
项目名称：九宫格切图
下载地址：https://t.cn/A6KcuVV8
项目名称：头像制作
下载地址：https://t.cn/A6KcuxvH
项目名称：早安打卡
下载地址：https://t.cn/A6Kcuijk
项目名称：配音
下载地址：https://t.cn/A6KcuPty
更新日期：2023-12-01




**************************************

[rewrite_local]
http:\/\/.*\.dicallapp\.com url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/zhfqjt.js

[mitm]
hostname = *.dicallapp.com

*************************************/


body = $response.body.replace(/\"TFlag":\d+/g, '\"TFlag":1').replace(/\"UFlag":\d+/g, '\"UFlag":1').replace(/\"UserVipEnd":"(.*?)"/g, '\"UserVipEnd":"2099-09-09 09:09:09"')

$done({body});

/*************************************

项目名称：菜谱大全
下载地址：https://t.cn/AijzV2It
项目地址：烘焙小屋
下载地址：https://t.cn/AipIBR88
项目地址：香哈菜谱
下载地址：https://t.cn/AipUXQUl

**************************************

[rewrite_local]
^https:\/\/api.*\.xiangha\.com url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/caipu.js

[mitm]
hostname = *.xiangha.com

*************************************/


var body = $response.body;
var yahee = JSON.parse(body);
const xiangha = '/user/info';
const caipu = '/apiios_dq.xiangha.com';
const info = 'xiangha.com';
const home = '/home/getUser';


if ($request.url.indexOf(xiangha) != -1){
  yahee.data.nickName = "yahee";
  yahee.data.sex = "1";
  yahee.data.vipInfo = {
      "isVip" : "2",
      "url" : "xiangha://welcome?VipWebView.app?url=https://appweb.xiangha.com/vip/myvip?payset=2&fullScreen=2&vipFrom=个人主页",
      "vipState" : "2"
    };
  yahee.data.isGourmet = "2";
  yahee.data.isFollow = "2";
  body = JSON.stringify(yahee);
}


if ($request.url.indexOf(caipu) != -1){
  body = body.replace(/\"status":\w+/g, '\"status":true');
  body = body.replace(/\"is_open_vip":\d+/g, '\"is_open_vip":1');
  body = body.replace(/\"is_vip":\d+/g, '\"is_vip":2');
  body = body.replace(/\"isCollection":\d+/g, '\"isCollection":1');
  body = body.replace(/\"sex":"\d+"/g, '\"sex":"1"');
  body = body.replace(/\"reg_date":".*?"/g, '\"reg_date":"2023-01-23"');
  body = body.replace(/\"nickName":".*?"/g, '\"nickName":"yahee"');
}


if ($request.url.indexOf(info) != -1){
  body = body.replace(/\"isShow":"\d+"/g, '\"isShow":"2"');
  body = body.replace(/\"isVideo":"\d+"/g, '\"isVideo":"2"');
  body = body.replace(/\"isVip":"\d+"/g, '\"isVip":"2"');
}


if ($request.url.indexOf(home) != -1){
  yahee.data.nickName = "yahee";
  yahee.data.vip = {
      "first_time" : "2023-03-12",
      "expired_day" : "2",
      "subTitle" : "",
      "isVip" : 2,
      "vipState" : "2",
      "maturity_time" : "2099-09-09",
      "color" : "#866100",
      "level" : "2",
      "title" : "我的会员",
      "titleColor" : "#866100",
      "last_time" : "2023-03-12",
      "text" : "2099-09-09到期",
      "subTitleColor" : "",
      "xiangdou" : 1,
      "maturity_day" : "1"
    };
  body = JSON.stringify(yahee);
}


$done({body});

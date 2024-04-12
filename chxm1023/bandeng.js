/*************************************

项目名称：板凳音乐
下载地址：https://t.cn/A6WODB1b

**************************************

[rewrite_local]
^https?:\/\/mobileapp\.wuyamusic\.com\/playmusic-app-server-400\/(vip\/user\/list.+|music\/score\/get2.+|choose\/getmusic|api|app\/swiper) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/bandeng.js

[mitm]
hostname = mobileapp.wuyamusic.com

*************************************/


var yahee = JSON.parse($response.body);
const vip = /vip\/user/;
const yuepu = /music\/score/;
const ad = /(api\/msg\/listpopupmessage|app\/swiper\/listv)/;

if(vip.test($request.url)){
	yahee.data = [
    {...yahee.data,
      "remainderDay" : 99999,
      "version" : 1,
      "type" : 1,
      "date" : 4092599349000,
      "flag" : 1,
      "playId" : "07",
      "vipType" : "year",
      "usableUp" : 1,
      "status" : 1,
      "vipTypeId" : "20"
    }
  ];
}

if(yuepu.test($request.url)){
	yahee.data.usableNumber = 99;
	yahee.data.free = 1;
	delete yahee.data.amount;
}

if(ad.test($request.url)){
	yahee.data = [];
	yahee.rows = yahee.rows.filter(item => item.title !== "联系我们");
}

$done({body : JSON.stringify(yahee)});

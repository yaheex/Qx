/*************************************

项目名称：小麦在线
下载地址：https://t.cn/A6TG09ZZ
更新日期：2024-03-27
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/www\.xiaomaigongkao\.com\/AppApi\/(vip|StartPage\/welcome|Member\/indexHangingWindow|Course\/(curriculum|details)) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/xiaomaizaixian.js

[mitm]
hostname = www.xiaomaigongkao.com

*************************************/


var yahe1023 = JSON.parse($response.body);
const vip = /AppApi\/vip\/index/; //会员信息
const user = /AppApi\/vip\/userInfo/; //用户会员
const ad = /AppApi\/(StartPage\/welcome|Member\/indexHangingWindow)/; //开屏/浮窗
const kc = /AppApi\/(Course\/(curriculum|details)|vip\/ebook)/; //解锁课程

if(vip.test($request.url)){
  yahe1023.data.vip_user = {
    ...yahe1023.data.vip_user,
    "status": "1",
    "end_valid_time": "4092599349"
  };
  searchAndModify(chxm1023, 'is_vip_user', true, 'is_free', 1);
}

if(user.test($request.url)){
  yahe1023.data = {
    ...yahe1023.data,
    "status" : "1",
    "end_valid_time" : "4092599349"
  };
}

if(ad.test($request.url)){
  yahe1023.data = null;
}

if(kc.test($request.url)){
  searchAndModify(chxm1023, 'is_free', 2, 'is_buy', 1, 'is_vip_user', true);
}

$done({ body: JSON.stringify(yahe1023) });

function searchAndModify(obj, ...args) {for (let i = 0; i < args.length; i += 2) {const key = args[i];const value = args[i + 1];for (var prop in obj) {if (obj.hasOwnProperty(prop)) {if (typeof obj[prop] === 'object') {searchAndModify(obj[prop], ...args);} else if (prop === key) {obj[prop] = value;}}}}};

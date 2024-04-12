/*************************************

项目名称：电视家
下载地址：https://t.cn/A6KxaEw8

**************************************

[rewrite_local]
^http[s]?:\/\/(share\.dianshihome\.com\/api\/user\/base\/info|123\.56\.125\.184\/api\/.+\/user\/info|api\.gaoqingdianshi\.com\/api\/ad\/mobile\/config) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/dsj.js

[mitm]
hostname = share.dianshihome.com, api.gaoqingdianshi.com

*************************************/


var yahee = JSON.parse($response.body);

yahee.data.sex = 1;
yahee.data.activeProduct = 2;
yahee.data.isTopLevel = true;
yahee.data.equityTime = 4092599349000;
yahee.data.pActiveTime = 4092599349000;
yahee.data.adEquityTime = 4092599349000;
yahee.data.mine = [];
yahee.data.homePopWindow = [];
yahee.data.homeVipOperate= [];

$done({body : JSON.stringify(yahee)});
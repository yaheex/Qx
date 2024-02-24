/*************************************
项目名称：Wink-像修图一样修视频
下载地址：https://t.cn/A6ouQvnT

项目名称：蛋啵-宝宝版美图秀秀
下载地址：https://t.cn/A69AjDYp

项目名称：潮自拍
下载地址：https://t.cn/A6A2Sybv

项目名称：海报工厂
下载地址：https://t.cn/A66WBa0v

项目名称：Chic-创意胶片相机
下载地址：https://t.cn/A6oLDrrK
**************************************

[rewrite_local]
^https:\/\/api-.*\.meitu\.com\/(.+\/user\/vip_info|user\/show) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/mtxxqjt.js

[mitm]
hostname = api-*.meitu.com

*************************************/


var yahee = JSON.parse($response.body);
const vip = '/user/vip_info';
const user = '/user/show';

if ($request.url.indexOf(vip) != -1){
yahee。data.trial_period_invalid_time = 4092599349000;
yahee。data.current_order_invalid_time = 4092599349000;
yahee。data.valid_time = 4092599349000;
yahee。data.invalid_time = 4092599349000;
yahee。data.use_vip = true;
yahee。data.have_valid_contract = true;
yahee。data.derive_type_name = "普通会员";
yahee。data.in_trial_period = true;
yahee。data.is_vip = true;
}

if ($request.url.indexOf(user) != -1){
yahee。data.vip_type = 1;
yahee。data.vip_icon = "https://xximg1.meitudata.com/6948531818264286440.png";
yahee。data.follower_count = 999000;
yahee。data.fan_count = 999000;
yahee。data.favorites_count = 999000;
yahee。data.be_like_count = 999000;
}

$done({body : JSON.stringify(yahee)});


#************************************#
# 美颜相机
# hostname = *.meiyan.com
^https?:\/\/(api|community)\.meiyan\.com\/(vip|v\d)\/(user_center|user_info|user\/(.*?)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/myxj.js

#************************************#
# 美图秀秀
# hostname = *.xiuxiu.meitu.com, api.posters.meitu.com, api-*.meitu.com
^https?:\/\/((h5|api)\.xiuxiu|api-sub|api\.posters)\.meitu\.com\/.+\/(vip|user|h\d|center|home) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mtxx.js

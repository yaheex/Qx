/*************************************

项目名称：靓机汇(APP+小程序)
下载地址：https://t.cn/A6NMLjKA

**************************************

[rewrite_local]
# 解锁会员信息
^https?:\/\/guapi\.liangjihui\.com\/(front\/(quote\/look.+|user\/memberInfo)|api) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/liangjihui.js
# 屏蔽顶部滚屏
^https:\/\/ljh\.dianxiaoman\.com\/ljh\/api\/home\/getHomeList url reject

[mitm]
hostname = guapi.liangjihui.com, ljh.dianxiaoman.com

*************************************/


var yahee = JSON.parse($response.body);
const app = '/front';
const xcx = '/api';

if ($request.url.indexOf(app) != -1){
  yahee.data.is_pay = true;
  yahee.data.experience_card = true;
  yahee.data.is_member = true;
  yahee.data.end_time = 4092599349;
  yahee.data.is_see = true;
}

if ($request.url.indexOf(xcx) != -1){
  yahee.data.is_pay = true;
  yahee.data.add_member = true;
  yahee.data.is_member = true;
  yahee.data.is_see = true;
  yahee.data.member_end_time = "2099-09-09 09:09:09";
  yahee.data.member_applyfor = true;
  yahee.data.user_member = { ...yahee.data.user_member, "end_time" : "2099-09-09 09:09:09", "is_member" : true };
}

$done({body : JSON.stringify(yahee)});

/*************************************

项目名称：靓机汇(APP+小程序)
下载地址：https://t.cn/A6NMLjKA
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
# 解锁会员信息
^https?:\/\/guapi\.liangjihui\.com\/(front\/(quote\/look.+|user\/memberInfo)|api) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/liangjihui.js
# 屏蔽顶部滚屏
^https:\/\/ljh\.dianxiaoman\.com\/ljh\/api\/home\/getHomeList url reject

[mitm]
hostname = guapi.liangjihui.com, ljh.dianxiaoman.com

*************************************/


var yahe1023 = JSON.parse($response.body);
const app = '/front';
const xcx = '/api';

if ($request.url.indexOf(app) != -1){
  yahe1023.data.is_pay = true;
  yahe1023.data.experience_card = true;
  yahe1023.data.is_member = true;
  yahe1023.data.end_time = 4092599349;
  yahe1023.data.is_see = true;
}

if ($request.url.indexOf(xcx) != -1){
  yahe1023.data.is_pay = true;
  yahe1023.data.add_member = true;
  yahe1023.data.is_member = true;
  yahe1023.data.is_see = true;
  yahe1023.data.member_end_time = "2099-09-09 09:09:09";
  yahe1023.data.member_applyfor = true;
  yahe1023.data.user_member = { ...yahe1023.data.user_member, "end_time" : "2099-09-09 09:09:09", "is_member" : true };
}

$done({body : JSON.stringify(yahe1023)});

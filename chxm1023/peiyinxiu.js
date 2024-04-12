/*************************************

项目名称：配音秀 解锁会员
下载地址：https://t.cn/A6hiqy80

**************************************

[rewrite_local]
^https:\/\/iosapi\.peiyinxiu\.com url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/peiyinxiu.js

[mitm]
hostname = iosapi.peiyinxiu.com

*************************************/


var yahee = JSON.parse($response.body); 
const vipa = '/GetMyInfo';
const vipb = '/GetVipDetail';
const vipc = '/GetUserSpaceInfo';

//会员信息
if ($request.url.indexOf(vipa) != -1){
  yahee.data.is_vip = 1;
  yahee.data.vip_end_time = "2099-09-09 09:09:09";
  yahee.data.end_time = "2099-09-09 09:09:09";
  yahee.data.gold = 999999;
  yahee.data.gold2 = 999999;
  yahee.data.fanscount = 999999; //粉丝
  yahee.data.followcount = 999999; //关注
  yahee.data.filmcount = 999; //作品
  yahee.data.invite_coopera_count = 999;//合作
  yahee.data.sourcecount = 999;//素材
  yahee.data.is_can_apply = 1;
  yahee.data.verified = 1;
  yahee.data.vipNoticeCode = 2;
  yahee.data.avatar_tool_id = 1;
  yahee.data.isExposure = 1;
  yahee.data.verifieds = [1];
}

//开通会员面板
if ($request.url.indexOf(vipb) != -1){
  yahee.data.is_vip = 1;
  yahee.data.isRenewal = 1;
  yahee.data.vip_end_time = "2099-09-09 09:09:09";
  yahee.data.end_time = "2099-09-09 09:09:09";
  yahee.data.eventEndText = "2099-09-09 09:09:09";
  yahee.data.vipLevel = 1;
  yahee.data.is_can_apply = 1;
  yahee.data.tools.status = 1;
  yahee.data.avatar_tool_id = 1;
}

//用户信息
if ($request.url.indexOf(vipc) != -1){
  yahee.data.is_vip = 1;
  yahee.data.verified = 1;
  yahee.data.badgeToolId = true;
  yahee.data.gold = 999999;
  yahee.data.gold2 = 999999;
  yahee.data.perform_level =99; //演绎等级
  yahee.data.scriptwriter_level = 99; //制作等级
  yahee.data.good_count = 999999; //点赞
  yahee.data.forward_count = 999999; //转发
  yahee.data.union_count = 999999; //社团
  yahee.data.fanscount = 999999; //粉丝
  yahee.data.followcount = 999999; //关注
  yahee.data.rank_count = 999999; //上榜
  yahee.data.badge_count = 999999; //徽章
  yahee.data.topic_count = 999999; //帖子
  yahee.data.live_count = 999999; //语聊
  yahee.data.filmcount = 999; //作品
  yahee.data.invite_coopera_count = 999;//合作
  yahee.data.sourcecount = 999;//素材
  yahee.data.space_tool_id = 1;
}

$done({body : JSON.stringify(yahee)});

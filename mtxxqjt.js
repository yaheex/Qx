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
^https?:\/\/api-.*\.meitu\.com\/(.+\/user\/vip_info|user\/show) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/mtxxqjt.js

[mitm]
hostname = api-*.meitu.com

*************************************/


var yahee = JSON.parse($response.body);
const vip = '/user/vip_info';
const user = '/user/show';

if ($request.url.indexOf(vip) != -1){
yahee.data.trial_period_invalid_time = 4092599349000;
yahee.data.current_order_invalid_time = 4092599349000;
yahee.data.valid_time = 4092599349000;
yahee.data.invalid_time = 4092599349000;
yahee.data.use_vip = true;
yahee.data.have_valid_contract = true;
yahee.data.derive_type_name = "普通会员";
yahee.data.in_trial_period = true;
yahee.data.is_vip = true;
}

if ($request.url.indexOf(user) != -1){
yahee.data.vip_type = 1;
yahee.data.vip_icon = "https://xximg1.meitudata.com/6948531818264286440.png";
yahee.data.follower_count = 999000;
yahee.data.fan_count = 999000;
yahee.data.favorites_count = 999000;
yahee.data.be_like_count = 999000;
}

$done({body : JSON.stringify(yahee)});



#=============UserScript=============#
#************************************#
# 美颜相机
# hostname = *.meiyan.com
^https?:\/\/(api|community)\.meiyan\.com\/(vip|v\d)\/(user_center|user_info|user\/(.*?)) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/myxj.js

#************************************#
# 美图秀秀
# hostname = *.xiuxiu.meitu.com, api.posters.meitu.com, api-*.meitu.com
^https?:\/\/((h5|api)\.xiuxiu|api-sub|api\.posters)\.meitu\.com\/.+\/(vip|user|h\d|center|home) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/mtxx.js

#************************************#
hostname = api.changecollective.com, api.wawalu.cn, *.whalean.com, api.everyday.app, donate-api.recorder.duapps.com, auth.production.metronautapp.cn, api.apphud.com, www.kaolahome.com, cat-revenuecat-qscqkotbrh.cn-hongkong.fcapp.run, api.purchasely.io, www.dreamfaceapp.com, bd-api.kuwo.cn, subscription.aresframework.com, api.vistopia.com.cn, members-data-api.theguardian.com, iosapi.yueshuian.com, question.tiku.cqxcj.top, base.cmoe.top, yyapi.yayingtk.com, learn.cqrry.com, api.sryx.net, api.meigit.com, question.api.anjiazui.com, app.bftk.com.cn, question.civil.shaoeyy.com, gzfanyin.com, translator.felo.me, baimiao.uzero.cn, my.getslopes.com, www.huojiwangluo.cn, api.ebaicha.com, *.ihuaben.com, smoke.icar.ren, w.5hzs.com, leancloud.emotionwp.com, api2.mubu.com, rdp.duetdisplay.com, api.xbxxhz.com, epbox.gongfudou.com, *.tangdou.com, api.300624.com, hi-api.weshineapp.com, api.apphud.com, xw.jietuguanjia.com, user.linglan.com, mobileapp.wuyamusic.com, *-slidebox-ios-prod.cloudfunctions.net, www.xiaoxiongyouhao.com, api.cs-ide.io, www.luqijianggushi.com, app.yinxiang.com, cdn-bm.camera360.com, szone-my.7net.cc, cm15-c110-3.play.bokecc.com, mb.xinghengedu.com, glass.photo, api.intelimeditor.com, open3.vistastory.com, www.xfx119.com, water*.yunxiaoguo.cn, *.cloudfront.net, ftmailbox.cn, standard.rhinox*.com, appss.rhinox*.com, appss.linhongshi.com, purchase-*-api.*.com, user-kaji-api.b612kaji.com, api.*lianqin*.*, api.mangofuture.cn, kkr-user.tapque.com, subscription-api.notedapp.io, *.execute-api.ap-northeast-2.amazonaws.com, main-sciam-nature.content.pugpig.com, creaceed.com, *api.quthing.com, backend.getdrafts.com, www.guga.co, api.lianzhidao123.com, *.yangjibao.com, api.love.823123.com, prod.api.lambus.io, jz.jarstones.com, koan.bopulab.cn, calc.kuaicad.com, www.fuyoutech.club, qqpyqapi.app.xinmaicard.com, www.kkmop.com, play.wo1wan.com, api.mattingm.com, *.camera360.com, api.expingworld.com, integral2.dasyibalang.com, *.kakamobi.cn, api.shuashuati.com, www.tingniukeji.com, api.panda.boosters.company, api.geefoo.cn, api.995120.cn, api.ankichinas.com, api.hujuvod.com, api.qwapp.top, api.weilaizhushou.com, api.shouzhang.com, mobile.flightradar24.com, oxfordx.cp.com.cn, isi.*.g*.com*, api.polaxiong.com, firstclass.tripsy.app, diary-id.sumi.io, api-production.endel.io, api-service.tutusouti.com, api.xunjiapp.cn, *.oracle.bendingspoonsapps.com, notability。com, www.mymorpholio.com, calendar.aiyohoo.com, api.timetreeapp.com, zy6kcqa01a.execute-api.us-east-2.amazonaws.com, fl*app.com, api.guoqi365.com, cad.glodon.com, yopu.co, api.hummingbird.businessreview.global, bzpp2.iwzbz.com, www.1314zhilv.com, *.kuso.xyz, receipt-verifier.cdwapi.com, *.api.moji.com, *.wps.cn, kc.xinli001.com, i.at.qq.com, license.pdfexpert.com, api.tuzhitong.com, api.yonekura.cn, ssl-api.itranslateapp.com, *.videoshowiosglobalserver.com, *.enjoy-mobi.com, api.getdailyart.com, p.du.163.com, snailsleep.net, drive*.quark.cn, yeguo.236api.com, jz.wacai.com, ljh.dianxiaoman.com, guapi.liangjihui.com, *xmind.*, schedule-api.julanling.com, *.xiangha.com, api.boohee.com, www.40sishi.com, kongque.twan.cn, ggs.manmeng168.com, novel.test.onedayapp.cn, *.lanjiyin.com.cn, iosapi.peiyinxiu.com, *.qingning6.com, day-api.xixitime.com, api.adapty.io, api.mojidict.com, dj.palmestore.com, asia.gikken.co, xianbeikeji.com, server.*.com, *.xiuxiu.meitu.com, api.posters.meitu.com,api-*.meitu.com,  *.meiyan.com, app.yidiansz.com, mobile-api.adguard.org, xremit.xcurrency.com, explorer.tratao.com, top-widgets-api.xiaozujian.com, iap.etm.tech, api.open.loveclip.site, www.skyjos.cn, www2.tigeroom.com, cn.czur.cc, share.dianshihome.com, api.gaoqingdianshi.com, 123.56.125.184, dashen*.shuiyinyu.com, *.imendon.com, api2.vlognow.me, service.ilovepdf.com, www.freshhome.top, *.dicallapp.com, format-api.netpock.com, widget-box-api.codefuture.top, cubox.*, *.radio.cn, 60.205.171.165, accounts.agenda.com, *.aoscdn.com, *.apsapp。cn, apimboom2.globaldelight.net, *.duitang.com, spclient.wg.spotify.com, scibug.com, *.wallpaperscraft.com, screen-lock.*.com, api.risingfalling.com, api.meiease.cn, *.aliyundrive.com, *.alipan.com, pan.baidu.com, *.camscanner.com, *.intsig.net, mb3admin.com, *.kuwo.cn, *.kwcdn.kuwo.cn, *.lrts.me, iosv2.cjapi.5fun.com, api*.speedtest.cn, app.yiyan.art, *.cyapi.cn, *.caiyunapp.com, adx.sogaha.cn, lcs-mobile-cops.adobe.io, *.soutushenqi.com, api.bluepulse.cn, nicegram.cloud, restore-access.indream.app, buy.itunes。apple.com, firestore.googleapis.com, api.revenuecat.com

/*************************************

项目名称：解锁10个APP
包含APP：Filmicpro，Focos，Focos live，Splice，30 Day Fitness，Sleep，Remini，Yoga Wave，Firstlight，Doubletake

**************************************

[rewrite_local]
^https?:\/\/.*\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/.+|purchases\/verify) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/bending.js

[mitm]
hostname = *.oracle.bendingspoonsapps.com

*************************************/


if ($response.body != 'undefined'){
var yahee = JSON.parse($response.body);
const url = $request.url;

if (url.indexOf('splice') != -1) { ids = "com.path36.SpliceFree.1y_t150_bundle";}
if (url.indexOf('filmicpro') != -1) { ids = "com.cinegenix.filmic.pro.1y_t130_bundle_creator";}
if (url.indexOf('firstlight') != -1) { ids = "com.filmicpro.firstlight.1y_t130_bundle_creator";}
if (url.indexOf('doubletake') != -1) { ids = "com.filmicpro.doubletake.1w_t20_bundle_creator";}
if (url.indexOf('focos') != -1) { ids = "com.focos.1y_t130_bundle_creator";}
if (url.indexOf('remini') != -1) { ids = "com.bigwinepot.nwdn.international.1y_p99_99_ft_pro";}
if (url.indexOf('focoslive') != -1) { ids = "com.focoslive.1y_t130_adj";}
if (url.indexOf('thirtydayfitness') != -1) { ids = "com.vigorapps.30DayFitness.1y_t130_bundle_adj";}
if (url.indexOf('sleep') != -1) { ids = "com.bendingspoonsapps.SleepHelp.1y_t100_bundle_adj";}
if (url.indexOf('yoga') != -1) { ids = "com.flyingnayeem.yoga.1y_t100_1w_bundle_adj";}

yahee["me"]["active_subscriptions_ids"] = [(ids)];
yahee["me"]["active_bundle_subscriptions"] = [{
   "expiry" : "2099-09-09T09:09:09+00:00",
   "product_id" : (ids),
   "features" : ["unlock"]
  }];
yahee["settings"]["__identity__"]["expiration"] = "2099-09-09T09:09:09+00:00";
$done({body : JSON.stringify(yahee)});
}
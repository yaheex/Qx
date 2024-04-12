/***********************************

> 应用名称：知乎开屏
> 更新时间：2023-02-04
		   

[rewrite_local]

^https?:\/\/api\.zhihu\.com\/commercial_api.*launch_v2 url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/ddgksf2013/zhihu_openads.js

[mitm]

hostname=api.zhihu.com

***********************************/





















var body=$response.body.replace(/img_play_duration\\":\d+/g,'img_play_duration":0').replace(/launch_timeout\\":\d+/g,'launch_timeout":0');$done({body});

/***********************************************

> 应用名称：12306去广告脚本
> 更新时间：2024-08-24
> 使用说明：请在本地添加分流 host, ad.12306.cn, direct

[rewrite_local]

^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-analyze-echo-response https://raw.githubusercontent.com/yaheex/Qx/main/ddgksf2013/12306.js

[mitm]

hostname = ad.12306.cn

***********************************************/
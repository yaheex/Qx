/***********************************************

> 应用名称：12306去广告脚本
> 更新时间：2023-02-22
> 使用说明：请在本地添加分流 host, ad.12306.cn, direct

[rewrite_local]

^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-analyze-echo-response https://raw.githubusercontent.com/yaheex/Qx/main/ddgksf2013/12306.js

[mitm]

hostname = ad.12306.cn

***********************************************/




const version = 'V1.0.22';

var obj=JSON.parse($request.body),yahee={};"0007"==obj.placementNo?(yahee.materialsList=[{billMaterialsId:"6491",filePath:"yahee",creativeType:1}],yahee.advertParam={skipTime:1},yahee.code="00"):yahee="G0054"==obj.placementNo?{code:"00",materialsList:[{}]}:{code:"00",message:"无广告返回"},$done({body:JSON.stringify(yahee)});

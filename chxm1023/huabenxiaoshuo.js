/*************************************

项目名称：话本小说
下载地址：2023-12-15

**************************************

[rewrite_local]
https?:\/\/.*\.ihuaben\.com\/(api\/userinfo|book\/app\/(vipReadWaitSeconds|book)|function\/bookservice\/authorInfo) url script-response-body https://raw.githubusercontent.com/yaheex/Qx/main/chxm1023/huabenxiaoshuo.js

[mitm]
hostname = *.ihuaben.com

*************************************/


var yahee = JSON.parse($response.body);
const user = /api\/userinfo/;
const yuedu = /book\/app\/vipReadWaitSeconds/;
const authorinfo = /function\/bookservice\/authorInfo/;
const book = /book\/app\/book/;

if(user.test($request.url)){
   yahee["isPaymentMember"] = true;
   yahee["isMember"] = true;
   yahee["testGroup"] = "D";
   yahee["isContractAuthor"] = true;
   yahee["memberEndTime"] = "2099-09-09 09:09:09";
   yahee["isRealNameCertification"] = true;
}

if(yuedu.test($request.url)){
   yahee.hpFee = 1;
   yahee.isDimeMemberExperinceAvailable = true;
}

if(authorinfo.test($request.url)){
   yahee.authorInfo["userStatus"] = 1;
   yahee.authorInfo["isMember"] = true;
}

if(book.test($request.url)){
   yahee.book.marks.isMember = true;
}

$done({body : JSON.stringify(yahee)});
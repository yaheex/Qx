/****************************************

[rewrite_local]

# 阿里云盘-优化首页display
^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/apps\/widgets$ url script-response-body https://raw.githubusercontent.com/chxm1023/Advertising/main/alidrive.js

[mitm]

hostname = api.aliyundrive.com

****************************************/

let yahe1023 = JSON.parse($response.body);
if (yahe1023.result) {
    yahe1023.result = Object.values(yahe1023.result).filter(item => (item["appCode"]=="file" || item["appCode"]=="video"));
}
$done({ body: JSON.stringify(yahe1023)});

# 净化App广告，目前已包含：京喜，京喜特价版，京东小家

var body = $response.body;

body = body.replace(/\"showTime":\d+/g, '\"showTime":0');
body = body.replace(/\"allSwitch":\w+/g, '\"allSwitch":false');
body = body.replace(/\"countDownSwitch":\w+/g, '\"countDownSwitch":false');
body = body.replace(/\"jdLiteAdvertisingVO":\{.+},/gism, '\"yahee":"已去除广告"},');
body = body.replace(/\"jdLiteAdvertisingVO"/g, '\"yahee"');
body = body.replace(/\"loading":\[.+\]/gism, '\"yahee":"已去除广告"');

$done({body});

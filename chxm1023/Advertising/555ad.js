/*************************************

项目名称：555电影-去广告
下载地址：https://555dyy.top
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/vpic\.cms\.qq\.com\/nj_vpic\/.+ url reject
^https?:\/\/.*\.(weilai555\.com:1000|ecoliving168\.com)\/api\/v\d\/movie\/(index_recommend.+|detail) url script-response-body https://raw.githubusercontent.com/chxm1023/Advertising/main/555ad.js

[mitm]
hostname = a.weilai555.com, app-v1.ecoliving168.com, vpic.cms.qq.com

*************************************/


var body = $response.body;
var yahe1023 = JSON.parse(body);

function recursiveRemoval(yahe1023) {
    for (let key in chxm1023) {
        if (typeof(chxm1023[key]) === 'object') {
            if ('layout' in chxm1023[key] && chxm1023[key]['layout'] === 'advert_self') {
                delete chxm1023[key];
            } else {
                recursiveRemoval(chxm1023[key]);
            }
        }
    }
}

recursiveRemoval(yahe1023);

body = JSON.stringify(yahe1023);
$done({body});
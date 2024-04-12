/*************************************

项目名称：555电影-去广告
下载地址：https://555dyy.top

**************************************

[rewrite_local]
^https?:\/\/vpic\.cms\.qq\.com\/nj_vpic\/.+ url reject
^https?:\/\/.*\.(weilai555\.com:1000|ecoliving168\.com)\/api\/v\d\/movie\/(index_recommend.+|detail) url script-response-body https://raw.githubusercontent.com/yahee/Advertising/main/555ad.js

[mitm]
hostname = a.weilai555.com, app-v1.ecoliving168.com, vpic.cms.qq.com

*************************************/


var body = $response.body;
var yahee = JSON.parse(body);

function recursiveRemoval(yahee) {
    for (let key in yahee) {
        if (typeof(yahee[key]) === 'object') {
            if ('layout' in yahee[key] && yahee[key]['layout'] === 'advert_self') {
                delete yahee[key];
            } else {
                recursiveRemoval(yahee[key]);
            }
        }
    }
}

recursiveRemoval(yahee);

body = JSON.stringify(yahee);
$done({body});
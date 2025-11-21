/*************************************

项目名称：像素蛋糕
下载地址：https://t.cn/A6ltnOFr
更新日期：2023-12-13
脚本作者：YaHee,

使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.pixcakeai\.com\/v1\/api\/app\/user\/info url script-response-body https://raw.githubusercontent.com/yaheex/Qx/refs/heads/main/chxm1023/xsdg.js

[mitm]
hostname = api.pixcakeai.com

*************************************/


var yahe1023 = JSON.parse($response.body);

yahe1023.data.vip_info = [{  "left_count": 99,  "pre_left_count": 99,  "total_count": 99,  "start_time": "2023-12-11T11:05:46+08:00",  "end_time": "2099-09-09T09:09:09+00:00"}];
yahe1023.data.left_count_str = "99";
yahe1023.data.show_complete_info_ex = true;
yahe1023.data.use_gpu_bg_clean_config = "{\"1\": [true, true], \"2\": [true, true], \"99\": [true, true], \"4\": [true, true], \"5\": [true, true]}";
yahe1023.data.show_complete_info = true;
yahe1023.data.use_mem_pool_config = "{\"1\": [true, true], \"2\": [true, true], \"99\": [true, true], \"4\": [true, true], \"5\": [true, true]}";
yahe1023.data.user_info = { ...yahe1023.data.user_info,  "is_vip": 1,  "state": 1,  "role_id": 1,  "type": 1 };
yahe1023.data.watermark = 0;
yahe1023.data.total_count_str = "3";
yahe1023.data.show_product_orders = true;
yahe1023.data.show_year_end_summary = true;

$done({body : JSON.stringify(yahe1023)});

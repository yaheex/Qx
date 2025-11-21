var body = $response.body;
var yahe1023 = JSON.parse(body);

if (yahe1023.Variables.data.threaddetail) 
{
yahe1023.Variables.data.threaddetail.tagadv = "";
	yahe1023.Variables.data.threaddetail.threadapp_ad_video = [];
	yahe1023.Variables.data.threaddetail.pingyouadv = "";
	yahe1023.Variables.data.threaddetail.middleadv = "";
	yahe1023.Variables.data.threaddetail.bottomadv = "";
	yahe1023.Variables.data.threaddetail.appdetailadv = [];
}
//delete yahe1023.Variables.data.threaddetail.threadapp_ad_video;
//delete yahe1023.Variables.data.threaddetail.tagadv;
//delete yahe1023.Variables.data.threaddetail.middleadv;
//delete yahe1023.Variables.data.threaddetail.pingyouadv;
//delete yahe1023.Variables.data.threaddetail.bottomadv;
//delete yahe1023.Variables.data.threaddetail.appdetailadv;
	
$done({body: JSON.stringify(yahe1023)});

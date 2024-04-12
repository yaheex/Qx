/*


*/
var body = $response.body;
var yahee = JSON.parse(body);

if (yahee.Variables.data.threaddetail) 
{
yahee.Variables.data.threaddetail.tagadv = "";
	yahee.Variables.data.threaddetail.threadapp_ad_video = [];
	yahee.Variables.data.threaddetail.pingyouadv = "";
	yahee.Variables.data.threaddetail.middleadv = "";
	yahee.Variables.data.threaddetail.bottomadv = "";
	yahee.Variables.data.threaddetail.appdetailadv = [];
}
//delete yahee.Variables.data.threaddetail.threadapp_ad_video;
//delete yahee.Variables.data.threaddetail.tagadv;
//delete yahee.Variables.data.threaddetail.middleadv;
//delete yahee.Variables.data.threaddetail.pingyouadv;
//delete yahee.Variables.data.threaddetail.bottomadv;
//delete yahee.Variables.data.threaddetail.appdetailadv;
	
$done({body: JSON.stringify(yahee)});
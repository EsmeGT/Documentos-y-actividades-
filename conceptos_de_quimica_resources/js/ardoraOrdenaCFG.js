var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones :D"; messageTime=""; messageError="Vuelve a intentar "; messageErrorG="Vuelve a intentar "; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y29uY2VwdG9zX2RlX3F1aW1pY2E="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["TGEgbWFzYSBubyBzZSBjcmVhIG5pIHNlIGRlc3RydXllLCBzb2xvIHNlIHRyYW5zZm9ybWE=","TGEgdW5pZGFkIGRlIG1hc2EgYXTDs21pY2EgZXMgbGEgc3VtYSBkZSBsYSBtYXNhIGRlbCBuZXV0csOzbiBjb24gZWwgcHJvdMOzbi4=","w6F0b21vcyBjb24gZWwgbWlzbW8gbnVtZXJvIGF0w7NtaWNvIHBlcm8gZGlmZXJlbnRlIG51bWVybw==","",""];imaW=["atomo.png","masa_atomica.png","isotopos.jpg","",""];queW=["","","","",""]; c=[53,74,56,0,0];
var auW=["MQ==","Mg==","Mw==","",""];
var actMaxWidth="600"; actMaxHeight="399";indexG=0;profG=0;dirMedia="conceptos_de_quimica_resources/media/"; textBNext="Ordena los siguientes conceptos de quimica ";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];

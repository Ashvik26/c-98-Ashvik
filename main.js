var speechRecognition=window.webkitSpeechRecognition;
var recognition= new speechRecognition();
function begin(){
    document.getElementById("box").innerHTML="";
    recognition.start();
}
recognition.onresult=function (event){
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("box").innerHTML=content;
    
}

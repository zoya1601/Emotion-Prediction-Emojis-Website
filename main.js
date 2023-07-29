
var prediction1 ="";
var prediction2 ="";
Webcam.attach("#camera");
camera=document.getElementById("camera")

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

function capture(){
    Webcam.snap(function(uri){
document.getElementById("result").innerHTML='<img id="s1" src="'+uri+'"/>';
    });

}
console.log("ml5 version",ml5.version);
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aSYBWVPki/model.json',model);

function model(){
    console.log("model loaded");
}
function p(){
    c=document.getElementById("s1");
    x.classify(c,answer);
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction1;
    speak_data_2 = "The Second prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
function answer(error,result){
   if(error){
   console.log(error);
   }
   else{
   console.log(result);
   document.getElementById("result_emotion_name").innerHTML=result[0].label;
   document.getElementById("result_emotion_name2").innerHTML=result[1].label;
   prediction1=result[0].label;
   prediction2=result[1].lablel;
   speak();
   if(result[0].label=="annoyed"){
   document.getElementById("q").innerHTML="&#128529;";
   }
   if(result[0].label=="winking"){
   document.getElementById("q").innerHTML="&#128521;";
   }
   if(result[0].label=="disapointed"){
   document.getElementById("q").innerHTML="&#128533;";
   }
   if(result[0].label=="smile"){
   document.getElementById("q").innerHTML="&#128522;";
   }


   if(result[1].label=="annoyed"){
    document.getElementById("r").innerHTML="&#128529;";
    }
    if(result[1].label=="winking"){
    document.getElementById("r").innerHTML="&#128521;";
    }
    if(result[1].label=="disapointed"){
    document.getElementById("r").innerHTML="&#128533;";
    }
    if(result[1].label=="smile"){
    document.getElementById("r").innerHTML="&#128522;";
    }
   }
}
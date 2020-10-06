
const buttonSpeak = document.getElementById('btnPlay');
buttonSpeak.addEventListener("click", speak);

const buttonPause = document.getElementById('btnPause');
buttonPause.addEventListener("click", stop);

const myInput = document.getElementById('myInput');
myInput.addEventListener("input", (e)=> setText(e));

const utterance = new SpeechSynthesisUtterance();

utterance.lang = "pt-Br";
utterance.pitch = 1
utterance.rate = 2



function speak(){
  speechSynthesis.speak(utterance);
}

function stop(){
  speechSynthesis.cancel();
}

function setText(event){
  utterance.text = event.target.innerText;
}
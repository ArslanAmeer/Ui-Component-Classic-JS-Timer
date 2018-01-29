
document.addEventListener('DOMContentLoaded',function () {
    document.addEventListener('keypress',function(e){
        if (e.key == 'Escape' || e.key == 'Esc') {
            reset();
        }
    },false)

    var input = null;
    var interval = null;    
    var timer = 0;

    document.getElementById('tInput').addEventListener('keypress',function(e){
        
        if (e.key == 'Enter') {
            e.preventDefault();
            start();
        }

    },false);

    document.getElementById('start').addEventListener('click',start,false);

    document.getElementById('stop').addEventListener('click',stop,false);
    
    document.getElementById('reset').addEventListener('click',reset,false);


    function timerValue(){


        if (timer >= 0) {

            document.getElementById("timer").innerHTML = timer--;
            
        }
        else{

            document.getElementById("timer").innerText = "Timer End";

            var audio = document.createElement('audio');
            var autoplay = document.createAttribute("autoplay");
            var loop = document.createAttribute("loop");
            
            audio.setAttribute('src',"assets/tone.mp3");
            audio.setAttribute('id',"tone")
            audio.setAttributeNode(autoplay);
            audio.setAttributeNode(loop);
            
            document.getElementById('aud').appendChild(audio);

            alert("Time Over");
            stop();
            
        }

    };    

    function start(){
        
        input = document.getElementById("tInput").value;
        
        if (input != null && input > 0) {
            clearInterval(interval);
            timer = input;
            interval = setInterval(timerValue,1000)
        }else{
            reset();
        }
        

    };

    function stop(){
        clearInterval(interval);
        input = timer;
        document.getElementById('tone').parentNode.removeChild(document.getElementById('tone'));    
    };

    function reset() {
        input = null;
        timer = 0;
        clearInterval(interval);
        document.getElementById('tInput').value = input;
        document.getElementById('timer').innerText = 'Enter ↑ Value';
        document.getElementById('tone').parentNode.removeChild(document.getElementById('tone'));
    };

});


 
 startbutton = document.getElementById('Start');
 stopbutton = document.getElementById('Stop');
 memelogo = document.getElementById('meme');
 var moveInterval;


function enablestart(){
    startbutton.disabled = false;
    stopbutton.disabled = true;

}
 function enablestop(){
    startbutton.disabled = true;
    stopbutton.disabled  = false;
 }

function  mememove() {
    startx = meme.style.left;
    starty = meme.style.top;
maxx = window.innerWidth - meme.offsetWidth;
maxy = window.innerHeight - meme.offsetHeight

    randomx = Math.round(Math.random() * maxx) ;
    randomy = Math.round(Math.random() * maxy );
    // console.log(startx, starty, randomx, randomy);


    memelogo.style.position = 'absolute';
    memelogo.style.left = randomx + 'px';
    memelogo.style.top = randomy + 'px';
 }
function startmovement(){

mememove();
    enablestop();
    moveInterval = setInterval(mememove,1000)

  
}

function stopmovement(){
enablestart();

clearInterval(moveInterval);
}

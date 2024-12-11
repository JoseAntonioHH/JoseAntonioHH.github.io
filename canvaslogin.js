document.addEventListener('DOMContentLoaded', function(){
    var v = document.getElementById('video1');
    var canvas = document.getElementById('mycanvas');
    var context = canvas.getContext('2d');

    var cw = 640;
    var ch = 600;
    canvas.width = cw;
    canvas.height = ch;

    v.addEventListener('play', function(){
        draw(this,context,cw,ch);
    },false);

},false);

function draw(v,c,w,h) {
    if(v.paused || v.ended) return false;
    c.drawImage(v,0,0,w,h);
    setTimeout(draw,20,v,c,w,h);
}

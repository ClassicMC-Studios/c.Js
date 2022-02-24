const cjs = new Cjs();
let pos = 5;
let po = 47;
let score = 0;
function redraw(){
    cjs.clear();
    cjs.rect(po,"#ffff00");
    cjs.rect(pos,"#00cc00");
    cjs.text("Score:"+score,100,90);
}
redraw();
window.main = function (){
    window.requestAnimationFrame( main );
    if ( pos == po){
        po = cjs.getRandomInt(48);
        if(po == 0){
            po ++;
        }
        score ++;
        redraw();
    }
}
document.addEventListener('keydown', function (evt){
    if(event.keyCode == 40){
        pos += 8;
        redraw();
    }
    if(event.keyCode == 38){
        pos -= 8;
        cjs.clear();
        redraw();
    }
    if(event.keyCode == 37){
        pos -= 1;
        redraw();
    }
    if(event.keyCode == 39){
        pos += 1;
        redraw();
    }
});
main();
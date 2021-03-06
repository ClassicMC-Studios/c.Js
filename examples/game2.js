const cjs = new Cjs();
let position = 10;
let pip = "no";
let pipos = 16;
let pipeType = 2;
class Player{
    draw(pos){
        cjs.rect(pos,"#ff9900");
        cjs.rect(pos-1,"#000000");
    }
}
function newPipe(){
    if(pip == "no"){
        pip = "yes";
    }
    if(pip == "yes"){
        pipos --;
        if(pipos == 8){
            pipos = 16
            pip = "no";
        }
    }
}
const plyr = new Player();
function redraw(){
    cjs.clear();
    cjs.backGround("#ccffff");
    for(let steps = 0;steps<9;steps ++){
        cjs.rect(steps,"#00cc00");
    }
    plyr.draw(position);
    if(pipeType == 1){
        cjs.rect(pipos,"#00cc00");
    }
    if(pipeType == 2){
        cjs.rect(pipos+8,"#00cc00");
        cjs.rect(pipos,"#00cc00");
    }
}
window.main = function (){
    window.requestAnimationFrame( main );
    redraw();
    if(position == pipos||position-1 == pipos){
        redraw();
        cjs.end();
    }
    if(pipeType == 2){
    if(position == pipos+8||position-1 == pipos+8){
        redraw();
        cjs.end();
    }
    }
}
let interval = setInterval(decreaseTimer, 1000);
let oInter = setInterval(type,8000);
function decreaseTimer() {
    newPipe();
}
function type(){
    pipeType = cjs.getRandomInt(3);
    if(pipeType == 0){
        pipeType = 1;
    }
}
document.addEventListener('keydown', function (evt){
    if(event.keyCode == 40){
        position += 8;
    }
    if(event.keyCode == 38){
        position -= 8;
    }
    if(event.keyCode == 37){
        position -= 1;
    }
    if(event.keyCode == 39){
        position += 1;
    }
    if(event.keyCode == 68){
        //alert(pipos+"OS   POS"+position)
        //alert(pipeType);
    }
});
main();
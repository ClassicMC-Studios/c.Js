const cjs = new Cjs();
let pos = 5;
cjs.rect(9,"#a6a6a6");
cjs.rect(47,"#ffff00");
cjs.rect(pos,"#00cc00");
document.addEventListener('keydown', function (evt){
    if(event.keyCode == 40){
        pos += 8;
        cjs.clear();
        cjs.rect(47,"#ffff00");
        cjs.rect(9,"#a6a6a6");
        cjs.rect(pos,"#00cc00");
    }
    if(event.keyCode == 38){
        pos -= 8;
        cjs.clear();
        cjs.rect(47,"#ffff00");
        cjs.rect(9,"#a6a6a6");
        cjs.rect(pos,"#00cc00");
    }
    if(event.keyCode == 37){
        pos -= 1;
        cjs.clear();
        cjs.rect(47,"#ffff00");
        cjs.rect(9,"#a6a6a6");
        cjs.rect(pos,"#00cc00");
    }
    if(event.keyCode == 39){
        pos += 1;
        cjs.clear();
        cjs.rect(47,"#ffff00");
        cjs.rect(9,"#a6a6a6");
        cjs.rect(pos,"#00cc00");
    }
    if(pos == 9){
        alert("You've got mail!");
    }
    else if ( pos == 47){
        alert("You've got more mail!");
    }
});
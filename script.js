let toolopt=document.querySelector(".tool-option");
let toolsCont = document.querySelector(".toolbar");
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let pencilimg = document.querySelector(".pencil");
let eraserimg = document.querySelector(".eraser");
let toolflag=true;
let pencilflag=false;
let eraserflag=false;
// true-show, false-hide
toolopt.addEventListener("click",function(){
    console.log("hello ji");
toolflag=!toolflag;
if(toolflag){
    opentool();
}
else{
closetool();
};
}
);
function opentool(){
    let toolicon=toolopt.children[0];
    toolicon.classList.remove("fa-bars");
    toolicon.classList.add("fa-times");
    toolsCont.style.display="flex";
}
function closetool(){
    let toolicon=toolopt.children[0];
    toolicon.classList.remove("fa-times");
    toolicon.classList.add("fa-bars");
    toolsCont.style.display="none";
    pencilToolCont.style.display = "none";
    eraserToolCont.style.display = "none";
}
pencilimg.addEventListener("click",function(){
    pencilflag=!pencilflag;
    if(pencilflag){
        pencilToolCont.style.display="block";
    }
    else{
        pencilToolCont.style.display="none";
    }
});
eraserimg.addEventListener("click",function(){
    eraserflag=!eraserflag;
    if(eraserflag){
        eraserToolCont.style.display="flex";
    }
    else{
        eraserToolCont.style.display="none";
    }
});
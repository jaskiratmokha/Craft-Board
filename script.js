let toolopt=document.querySelector(".tool-option");
let toolsCont = document.querySelector(".toolbar");
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let pencilimg = document.querySelector(".pencil");
let eraserimg = document.querySelector(".eraser");
let sticky=document.querySelector(".sticky");
let upload = document.querySelector(".upload");
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
sticky.addEventListener("click", (e) => {
    let stickyTemplateHTML = `
    <div class="header-cont">
        <div class="minimize"></div>
        <div class="remove"></div>
    </div>
    <div class="note-cont">
        <textarea spellcheck="false"></textarea>
    </div>
    `;

    createSticky(stickyTemplateHTML);
})

function createSticky(stickyTemplateHTML) {
    let stickyCont = document.createElement("div");
    stickyCont.setAttribute("class", "sticky-cont");
    stickyCont.innerHTML = stickyTemplateHTML;
    document.body.appendChild(stickyCont);

    let minimize = stickyCont.querySelector(".minimize");
    let remove = stickyCont.querySelector(".remove");
    noteActions(minimize, remove, stickyCont);

    stickyCont.onmousedown = function (event) {
        dragAndDrop(stickyCont, event);
    };

    stickyCont.ondragstart = function () {
        return false;
    };
}

function noteActions(minimize, remove, stickyCont) {
    remove.addEventListener("click", (e) => {
        stickyCont.remove();
    })
    minimize.addEventListener("click", (e) => {
        let noteCont = stickyCont.querySelector(".note-cont");
        let display = getComputedStyle(noteCont).getPropertyValue("display");
        if (display === "none") noteCont.style.display = "block";
        else noteCont.style.display = "none";
    })
}
function dragAndDrop(element, event) {
    let shiftX = event.clientX - element.getBoundingClientRect().left;
    let shiftY = event.clientY - element.getBoundingClientRect().top;

    element.style.position = 'absolute';
    element.style.zIndex = 1000;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        element.style.left = pageX - shiftX + 'px';
        element.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    element.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        element.onmouseup = null;
    };
}

upload.addEventListener("click", (e) => {
    // Open file explorer
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();

    input.addEventListener("change", (e) => {
        let file = input.files[0];
        let url = URL.createObjectURL(file);

        let stickyTemplateHTML = `
        <div class="header-cont">
            <div class="minimize"></div>
            <div class="remove"></div>
        </div>
        <div class="note-cont">
            <img src="${url}"/>
        </div>
        `;
        createSticky(stickyTemplateHTML);
    })
})
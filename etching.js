const btnDiv = document.querySelector("#changeGrid");
const button = document.createElement("button");
const container = document.querySelector("#container");
let size=16;

function hovering(e){
    e.target.classList.add("hovering");
}

function addDivs(divSize, side){
    for(let i=0;i<divSize*divSize;i++){
        const sqBox = document.createElement("div");
        sqBox.classList.add("gridDivs");
        sqBox.style.width = `${side / divSize}px` ;
        sqBox.style.height = `${side / divSize}px` ;
        sqBox.addEventListener("mouseover", hovering);
        container.appendChild(sqBox);
    }
}

function askToChangeGrid(){
    const sqs = window.prompt("How many squares do you want? (1 to 100)", size);
    if(isNaN(sqs) || sqs>100 || sqs<1){
        alert("Invalid Choice. Please Enter number 1-100.");
    }
    else{
        size = Number(sqs);
        container.innerHTML = "";
        addDivs(size, 500);
    }
}

button.textContent = "Change Grid Size";
button.addEventListener("click", askToChangeGrid);
button.style.fontSize = `${28}px`
btnDiv.appendChild(button);
addDivs(size, 500);
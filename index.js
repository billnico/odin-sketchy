let main=document.getElementById("main");
root=document.getElementById("root");




let button=document.getElementById("button");

button.style.height="35px";
button.style.width="60px"
button.style.margin="auto auto";

var numOfSquarePerSide=16;

button.addEventListener("click",(e)=>{
    numOfSquarePerSide=parseInt(prompt("how many squares per side: "));
    if(numOfSquarePerSide<70){
        main.innerHTML="";
        makeDivs(numOfSquarePerSide * numOfSquarePerSide);
    }
})
root.appendChild(button)

const makeDivs=(totalBoxes)=>{ 
//creating divs using a loop
for(let index=0;index<totalBoxes;index++){
    let div=document.createElement("div");
    div.classList.add("gridDiv");
    div.addEventListener(("mouseenter"),(e)=>{
        div.style.backgroundColor="red";
    });

    main.setAttribute("style",`grid-template-columns: repeat(${numOfSquarePerSide},  1fr)`);

    main.setAttribute("style",`grid-template-columns: repeat(${numOfSquarePerSide}, 1fr)`)
    main.appendChild(div);
}
}

makeDivs(numOfSquarePerSide * numOfSquarePerSide);
main.style.height="80vh";
root.appendChild(main);



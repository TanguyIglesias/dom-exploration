let addTitle= document.querySelectorAll(".important");
addTitle.forEach(element => {
    element.setAttribute("title","This is important");
});

// Select all the img tags and loop through them. If they have no important class, turn their display property to none

let imgTags = document.querySelectorAll("img");
imgTags.forEach(element => {
    if(!element.classList.contains("important")){
        element.style.display = "none";
    }
}
);

let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(element => {
    if(element.className == ""){
        element.style.color = randTextColor();
    }
    console.log(`${element.innerText} \n ${element.className}`);
    
});


function randTextColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
    
}

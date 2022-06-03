function randbgcolor(){
    h = Math.floor(Math.random() * 360);
    s = Math.floor(Math.random() * 100);
    l = Math.floor(Math.random() * 100);
    return `hsl(${h}, ${s}%, ${l}%)`;
}

let blackOrWhiteTxt = (bgColor) => {
    let hsl = bgColor.split('(')[1].split(')')[0].split(',');
    let h = parseInt(hsl[0]);
    let s = parseInt(hsl[1]);
    let l = parseInt(hsl[2]);
    if (l < 50) {
        return 'white';
    } else {
        return 'black';
    }
}

let article = document.querySelector("article");


let learner= ["Dylan", "Kevin", "Mariya", "Antoine", "Semih", "Melih"];

let shuffled = learner
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

for (i=0; i<learner.length; i++){
    let newSection = document.createElement("section");
    let newArticle = document.createElement("article");
    let newP = document.createElement("p");
    let newText= document.createTextNode(shuffled[i]);
    let newColor= randbgcolor();
    let textColor= blackOrWhiteTxt(newColor);
    newSection.style.backgroundColor = newColor;
    newP.style.color = textColor;
    newP.appendChild(newText);
    newArticle.appendChild(newP);
    newSection.appendChild(newArticle);
    article.appendChild(newSection);
}

function randNum(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);

}
// function shuffleArray(array){
//     let currentIndex = array.length, randomIndex;
//     while(currentIndex !==0){
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;
//         [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//     }
// return array;
// }



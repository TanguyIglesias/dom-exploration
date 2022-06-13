const _initTime = Date.now()
const main= document.querySelector('main');
const sectionThird = main.children[2];
const wrapper= document.querySelector('section:last-child')
const wrapperSquare=  document.querySelector('.displayedsquare-wrapper');
const ul= wrapper.children[1];

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  const li=document.createElement('li');
  li.innerHTML=`${e.target.classList[1]} ${getElapsedTime()}`;
    ul.appendChild(li);
    createSquare(e);
}

const createSquare=(e)=>{
    const wrapper= document.querySelector('.displayedsquare-wrapper');
    const square= document.createElement('div');
    square.classList.add('displayedsquare');
    square.classList.add(`${e.target.classList[1]}`);
    wrapper.appendChild(square);
    square.addEventListener('click', e=>{
      alert(`${e.target.classList[1]}`);})
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}
document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    document.body.style.backgroundColor = randBgColor();
    const li=document.createElement('li');
    li.innerHTML=`Spacebar pressed ${getElapsedTime()}`;
    ul.appendChild(li);
  }
  if(e.key == "l" ||
      e.code == "KeyL" ||
      e.keyCode == 76)
  {
    
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }

}

  if(e.key == "s" ||
      e.code == "KeyS" ||
      e.keyCode == 83)
  {
    while(wrapperSquare.firstChild){
      wrapperSquare.removeChild(wrapperSquare.firstChild);
    }
}
}





console.log(ul);
function randBgColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


    
//  const for list Ul

const list = document.getElementsByTagName('ul')[0].childNodes;
const ul = document.querySelector('ul');

// loop for making Fast and Furious importants

for (let i = 0; i < list.length; i++) {
    if (list[i].nodeType === 1) {
        if (list[i].textContent === 'Fast and Furious') {
            list[i].classList.add('important');
            if (i !== 0) {
                list[i].parentNode.insertBefore(list[i], list[0]);
            }
        }
    }
}


addEventListener('click', event => {
    if (event.target.textContent === 'Fast and Furious') {
        alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
    }
    if (event.target.tagName === 'LI') {
        alert(event.target.textContent);
    }
}
);

/* remove dupes in list */
if (list.length > 1) { 
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i].isEqualNode(list[j])) {
                list[j].parentNode.removeChild(list[j]);
            }
        }
    }
}





/*  Display list of all the elements in the list */

const div = document.createElement('div');
document.body.insertBefore(div, ul);
const select = document.createElement('select');
div.appendChild(select);
const option1 = document.createElement('option');
const option2 = document.createElement('option');
option1.textContent = 'importants franchises';
option2.textContent = 'normal franchises';
select.appendChild(option1);
select.appendChild(option2);


addEventListener('change', event => {
    let selectImportant = document.querySelector('select');
    let important = document.querySelector('.important');
    let li = document.querySelectorAll('li');

    if (selectImportant.value === 'importants franchises') {
        li.forEach(item => {
            if (!item.classList.contains('important')) {
                item.style.visibility = 'hidden';
            }
            else {
                item.style.visibility = 'visible';
            }
        });
    }
    if (selectImportant.value === 'normal franchises') {
        li.forEach(item => {
            if (!item.classList.contains('important')) {
                item.style.visibility = 'visible';
            }
            else {
                item.style.visibility = 'hidden';
            }
        });
    }
});

document.body.onkeyup = (e) => {
    if (e.key === "r" ||
        e.code === "KeyR" ||
        e.keyCode === 82) {
        shuffleArray(list);
        }
    if (e.key === "d" ||
        e.code === "KeyD" ||
        e.keyCode === 68) {
    CloneArrItem(list);
    }
}
    
let shuffleArray = (array) => {
    for (var i = array.length; i > 0; i--) {
        ul.appendChild(array[Math.random() * i | 1]);
    }
    }

let CloneArrItem = (array) => {
    const li = document.createElement('li');
    li.className = 'important';
    li.innerHTML = array[0].textContent;
    ul.appendChild(li);
}


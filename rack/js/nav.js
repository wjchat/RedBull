let navItems = document.querySelector('nav').getElementsByTagName('img');
let sideText = document.getElementsByClassName('side-text');

for(let each of navItems){
    each.style.transform = "rotate(0deg)";
}

function navAnimation(clicked, direction) {
    for (let each of navItems) {
        
        if (each.classList.contains('currentNav')) {
            each.classList.remove('currentNav');
            each.classList.add('dormantNav');
            let rotation = each.style.transform.replace(/\D/g, '');
            rotation = parseInt(rotation) + 360;
            each.style.transform = `rotate( ${rotation}deg)`;
        }
    }
    setTimeout(function () {
        clicked.classList.remove('dormantNav');
        clicked.classList.add('currentNav');
        let rotation = clicked.style.transform.replace(/\D/g, '');
        rotation = parseInt(rotation) + 360;
        clicked.style.transform = `rotate( ${rotation}deg)`;
    }, 50)
}
 
let openers = new Array;
let movem = document.getElementsByClassName('first');

for(let each of movem){
    for (let child of each.children ){
        console.log(child);
        openers.push(child);
        child.style.transform = "translateY(200px)";
        child.style.opacity = "0"
        child.classList.add('opener');        
    }
    
    setTimeout(function(){
        for(each of openers){
            each.style.transform = "translateY(0px)";
            each.style.opacity = "1";
        }
    }, 100)
}
function opener(){
    let right = document.querySelector('.move-right');
    let left = document.querySelector('.move-left');
    right.style.left = "120%";
    left.style.left = "-70%";
}

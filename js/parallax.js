//this code lets you move images along the y axis at different rates as you scroll up and down the page
//give this function to body onscroll
//give class "move" to items you want to move along with "data-speed" (0-1)

let images = document.getElementsByClassName('move');
let views = document.getElementsByClassName('view-space');
let grown = false;
const height = window.innerHeight;

console.log(images);

function moveItems(item) {

    let difference = item.getBoundingClientRect().top - height;

    let speed = item.getAttribute('scroll-speed');
    //assign scroll speed as an attribute to affected elements

    item.style.transform = `translate(0, ${difference * speed}px)`;
};

function test() {
    for (i = 0; i < images.length; i++) {
        let current = images[i];
            if (current.getBoundingClientRect().top < height - 50 && current.getBoundingClientRect().bottom > 0) {
                moveItems(current);
            }
    }
}



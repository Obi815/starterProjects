const boxes = document.querySelector('.box');

let current = 1;

let interval = setInterval(() => {
    // we are looking thru the boxes 
    // assign each box a new class
    // make each box bigger 
    boxes.forEach((box) => {
        if (box.classList[1].split("-")[1] * 1 === current) {
            box.classList.add("active");
        }
        // use each box number (1-7) to move them indvidually
        // we need to add a new class to each box number 
        // we need to call back a new counter
    });
}, 1000)//1000ms 
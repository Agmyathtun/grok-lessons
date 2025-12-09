const boxes = document.querySelectorAll('.box');

window.addEventListener ('scroll', checkBoxes);

function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.8;// 80% of the viewport height same as window.innerHeight * (4/5)

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; // distance from the top of the viewport to the top of the box when scroll the value will decrease

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }

        console.log(boxTop);
        
    })
}

console.log(box.getBoundingClientRect().top);

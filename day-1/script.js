const boxes = document.querySelectorAll('.box')

boxes.forEach(box => {
    box.addEventListener('click',() => {
        removeActiveClass();
        box.classList.add('active')
    })
})

function removeActiveClass(){
    boxes.forEach(box =>{
        box.classList.remove('active');
    })
}
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let activeIndex = 1;

next.addEventListener('click', ()=> {
    activeIndex++

    if (activeIndex > circles.length) {
        activeIndex = circles.length
    }
    reload()
});

prev.addEventListener('click', ()=> {
    activeIndex--

    if (activeIndex < 1) {
        activeIndex = 1
    }
    reload()
});

function reload() {
    circles.forEach((item, idx) => {
        if (idx < activeIndex) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width =  (actives.length-1) / (circles.length-1) * 100 + '%';

    if (activeIndex === 1) {
        prev.disabled = true
    } else if(activeIndex === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}
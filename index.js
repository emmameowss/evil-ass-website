const cat = document.querySelector('#testingcat')
const min = 1
const max = 10000

cat.addEventListener('click', () => {
    const n = Math.random() * (max - min) + min;
    cat.style.width = n + "px"
    cat.style.height = n + 'px'
})
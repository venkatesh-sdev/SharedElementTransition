const images = document.querySelectorAll("img");


images[0].addEventListener('click',(e)=>{
    images[0].style.transform = ' translate(500px, 300px) scale(3)';
    window.addEventListener('click',(e)=>{
        if (e.target !== images[0]) { images[0].style.transform = ''; }
    })
})
images[1].addEventListener('click', (e) => {
    images[1].style.transform = ' translate(0px, 300px) scale(3)';
    window.addEventListener('click', (e) => {
        if (e.target !== images[1]) { images[1].style.transform = '';  }
    })
})
images[2].addEventListener('click', (e) => {
    images[2].style.transform = ' translate(-500px, 300px) scale(3)';
    window.addEventListener('click', (e) => {
        if (e.target !== images[2]) images[2].style.transform = '';
    })
})

images[3].addEventListener('click', (e) => {
    images[3].style.transform = ' translate(500px, 0px) scale(3)';
    window.addEventListener('click', (e) => {
        if (e.target !== images[3]) images[3].style.transform = '';
    })
})
images[4].addEventListener('click', (e) => {
    images[4].style.transform = ' translate(0px, 0px) scale(3)';
    window.addEventListener('click', (e) => {
        if (e.target !== images[4]) images[4].style.transform = '';
    })
})
images[5].addEventListener('click', (e) => {
    images[5].style.transform = ' translate(-500px, 0px) scale(3)';
    window.addEventListener('click', (e) => {
        if (e.target !== images[5]) images[5].style.transform = '';
    })
})

images[6].addEventListener('click', (e) => {
    images[6].style.transform = ' translate(500px, -300px) scale(3)';
    window.addEventListener('click', (e) => {
        if (e.target !== images[6]) images[6].style.transform = '';
    })
})
images[7].addEventListener('click', (e) => {
    images[7].style.transform = ' translate(0px, -300px) scale(3)';
    window.addEventListener('click', (e) => {
        if (e.target !== images[7]) images[7].style.transform = '';
    })
})
images[8].addEventListener('click', (e) => {
    images[8].style.transform = ' translate(-500px, -300px) scale(3)';
    window.addEventListener('click', (e) => {
        if (e.target !== images[8]) images[8].style.transform = '';
    })
})
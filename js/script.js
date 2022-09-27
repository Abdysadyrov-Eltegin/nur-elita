window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    const scrollToopBtn = document.querySelector('.scrollToop-btn')
    window.addEventListener('scroll', () => {
        scrollToopBtn.classList.toggle('active', window.scrollY > 500)
    })

    scrollToopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal')
        for (let i=0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight
            let revealTop = reveals[i].getBoundingClientRect().top
            let revealPoint = 50

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active')
            }
        }
    })
});


const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});




function toggleSidebar() {
    const sideMenu = document.querySelector(".sidebar");
    sideMenu.classList.toggle("active");
}

const cartBtn = document.querySelector(".cart_btn");
const cartBox = document.querySelector(".cart");

cartBtn.addEventListener("click", function () {
    cartBox.classList.toggle("show");
    setTimeout(function () {
        cartBox.classList.toggle("smooth");
    }, 10);
});

document.addEventListener("click", function (e) {
    if (!cartBtn.contains(e.target) && !cartBox.contains(e.target)) {
        cartBox.classList.remove("show");
        cartBox.classList.remove("smooth");
    }
});

const restoranSwiper = new Swiper(".swiper_new", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: {
        nextEl: ".swiper-1-button-next",
        prevEl: ".swiper-1-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3 },
    },
});

const foodsSwiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: {
        nextEl: ".swiper-2-button-next",
        prevEl: ".swiper-2-button-prev",
    },
    breakpoints: {
        576: { slidesPerView: 4 },
        1024: { slidesPerView: 7 },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var indicator = this.querySelector('i');
        if (content.style.display === "block") {
            content.style.display = "none";
            indicator.classList.remove('fa-minus');
            indicator.classList.add('fa-plus');
        } else {
            content.style.display = "block";
            indicator.classList.remove('fa-plus');
            indicator.classList.add('fa-minus');
        }
    });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.body.classList.add("no-scroll");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.classList.remove("no-scroll");
}
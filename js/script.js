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

// const content = document.querySelector('.faq .content');

// function expand() {
//     const sectionHeight = content.scrollHeight;
//     content.style.height = sectionHeight + 'px';

//     // After the transition ends, set to auto for responsiveness
//     content.addEventListener('transitionend', () => {
//         content.style.height = 'auto';
//     }, { once: true });
// }

// function collapse() {
//     const sectionHeight = content.scrollHeight;
//     content.style.height = sectionHeight + 'px';

//     requestAnimationFrame(() => {
//         content.style.height = '0';
//     });
// }

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var indicator = this.querySelector('i');
        if (content.style.height !== "0px") {
            content.style.height = "0";
            content.style.paddingTop = "0";
            content.style.paddingBottom = "0";
            indicator.classList.remove('fa-minus');
            indicator.classList.add('fa-plus');

            collapse();
        } else {
            content.style.height = "auto";
            content.style.paddingTop = "10px";
            content.style.paddingBottom = "10px";
            indicator.classList.remove('fa-plus');
            indicator.classList.add('fa-minus');

            expand();
        }



    });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.body.classList.add("no-scroll");
    var icon = document.querySelector('.sidebar-toggle i');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.classList.remove("no-scroll");
    var icon = document.querySelector('.sidebar-toggle i');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');

}

function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "300px") {
        closeNav();
    } else {
        openNav();
    }
}

const excludedSelectors = ['aside', 'nav'];

document.body.addEventListener('click', function (event) {
    for (const selector of excludedSelectors) {
        if (event.target.closest(selector)) {
            return;
        }
    }

    if (document.getElementById("mySidenav").style.width === "300px") {
        closeNav();
    }
});

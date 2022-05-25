import tinyTypewriter from "tiny-typewriter";

window.addEventListener("load", videoScroll);
window.addEventListener("scroll", videoScroll);

function videoScroll() {
    if (document.querySelectorAll("video[autoplay]").length > 0) {
        let windowHeight = window.innerHeight,
            videoEl = document.querySelectorAll("video[autoplay]");

        for (let i = 0; i < videoEl.length; i++) {
            let thisVideoEl = videoEl[i],
                videoHeight = thisVideoEl.clientHeight,
                videoClientRect = thisVideoEl.getBoundingClientRect().top;

            if (
                videoClientRect <= windowHeight - videoHeight * 0.5 &&
                videoClientRect >= 0 - videoHeight * 0.5
            ) {
                thisVideoEl.play();
            } else {
                thisVideoEl.pause();
            }
        }
    }
}

const typewritter = document.querySelectorAll("h2[data-title]");

typewritter.forEach((el) => {
    if (el.getAttribute(["data-title"]) == el.getAttribute(["data-title"])) {
        let text = el.textContent;
        tinyTypewriter(el, {
            items: [text],
            cursor: false,
            typeSpeed: 100,
            deleteSpeed: 30,
            loop: true,
        });
    }
});

document.querySelectorAll('a[href^="#"]').forEach((trigger) => {
    trigger.onclick = function (e) {
        e.preventDefault();
        let hash = this.getAttribute("href");
        let target = document.querySelector(hash);
        let headerOffset = 34;
        let elementPosition = target.offsetTop;
        let offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };
});

const sections = document.querySelectorAll("div[data-section]");
const navLi = document.querySelectorAll(".Navigation-list -menu li");
const perexItems = [...document.querySelectorAll('.Section-Content-Info')];

let options = {
    rootMargin: '-10%',
    thresHold: 0.0
}

let observer = new IntersectionObserver(showItem, options);

function showItem(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('-show');
        } else {
            entry.target.classList.remove('-show');
        }
    })
}

perexItems.forEach(item => {
    observer.observe(item);
})

window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 34) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");

        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};

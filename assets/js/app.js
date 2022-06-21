import { Calc } from "./calc";

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
const navLi = document.querySelectorAll(".Navigation-list.-menu li");

window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 54) {
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

const CurrentSlider = document.querySelectorAll('.SlideContent section');

CurrentSlider.forEach((item, index) => {
    let calc = new Calc()

    const price_gas = item.querySelector('span[data-price="month"]');
    const input_price = item.querySelector('input[name="price_gas"]');
    const input_elec = item.querySelector('input[name="price_electricity"]');

    input_price.addEventListener('click', (e) => {
        calc.setFocus(item);

    })

    input_elec.addEventListener('click', () => {
        // price_gas.innerHTML = calc.getResults(item, input_price.value, input_elec.value);
    })

    calc.getPriceGas(item);
});
import tinyTypewriter from "tiny-typewriter";

window.addEventListener("load", videoScroll);
window.addEventListener("scroll", videoScroll);

function videoScroll() {
    if (document.querySelectorAll("video[autoplay]").length > 0) {
        var windowHeight = window.innerHeight,
            videoEl = document.querySelectorAll("video[autoplay]");

        for (var i = 0; i < videoEl.length; i++) {
            var thisVideoEl = videoEl[i],
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

let two = '',
    three = '',
    four = '',
    five = '',
    six = '',
    seven = '',
    eight = '';

const typewritter = document.querySelectorAll('h2[data-title]');
const texts = [
    two = "Nastavíme Rezzy",
    three = "Odešleme do ARC",
    four = "Hala se začne zahřívat",
    five = "Hala se připraví, rozsvítí a odemkne",
    six = "O vše je postaráno. Je čas si zahrát!",
    seven = "Po odehrání se hala automaticky vypne",
    eight = "Jdeme domů",
];

texts.forEach(text => {
    // console.log(four);
});

typewritter.forEach(el => {
    console.log(el.getAttribute('data-title'));
    tinyTypewriter(el, {
        items: ["test"],
        cursor: true,
        cursorCharBlinkTransitionSpeed: 1,
        typeSpeed: 100,
        deleteSpeed: 30,
        loop: true
    });
});

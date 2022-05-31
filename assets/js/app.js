import tinyTypewriter from "tiny-typewriter";
import gsap from "gsap";

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

// typewritter.forEach((el) => {
//     if (el.getAttribute(["data-title"]) == el.getAttribute(["data-title"])) {
//         let text = el.textContent;
//         tinyTypewriter(el, {
//             items: [text],
//             cursor: false,
//             typeSpeed: 100,
//             deleteSpeed: 30,
//             loop: true,
//         });
//     }
// });

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
// const sectionTitle = [...document.querySelectorAll(".Section-Content-Title")];
// const sectionPerex = [...document.querySelectorAll(".Section-Content-Info")];

// let options = {
//     rootMargin: "-40px",
//     thresHold: 0.75,
// };

// let sTitle = new IntersectionObserver(showTitle, options);
// let sPerex = new IntersectionObserver(showPerex, options);

// function showPerex(entries) {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("-show");
//         } else {
//             entry.target.classList.remove("-show");
//         }
//     });
// }

// function showTitle(entries) {
//     entries.forEach((entry) => {
//         console.log(entry.boundingClientRect);
//         if (entry.isIntersecting) {
//             entry.target.classList.add("-show");
//         } else {
//             entry.target.classList.remove("-show");
//         }
//     });
// }

// sectionPerex.forEach((item) => {
//     sPerex.observe(item);
// });

// sectionTitle.forEach((item) => {
//     sTitle.observe(item);
// });

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

console.clear();

const observerElements = document.querySelectorAll(".Section-Data");
const observerElementsFooter = document.querySelectorAll(".preFooterLayout");

const observerOptions = {
    root: null,
    rootMargin: "0px 0px",
    threshold: 0,
};

const observerOptionsFooter = {
    root: null,
    rootMargin: "-100px 0px",
    threshold: 0.5,
};

observerElements.forEach((el) => {
    const title = el.querySelector(".Section-Content-Title");
    const perex = el.querySelector(".Section-Content-Info");
    const video = el.querySelector(".Section-Content-Intro video");

    el.tl = gsap.timeline({ paused: true });

    el.tl
        .fromTo(video, {x: -100, scale: 1.2, ease: 'power2.inOut', duration: 10}, {x: 0, scale: 1, ease: 'power2.inOut'})
        .fromTo(title, {y: 50, opacity: 0, ease: 'power2.inOut'}, {y: 0, opacity: 1, ease: 'back.out(1,7)'})
        .fromTo(perex, {y: 50, opacity: 0, ease: 'power2.inOut'}, {y: 0, opacity: 1, ease: 'back.out(1,7)'})
        .to(title, {y: 50, opacity: 0, ease: 'power2.inOut'})
        .to(perex, {y: 50, opacity: 0, ease: 'power2.inOut'})

    el.observer = new IntersectionObserver((entry) => {
        if (entry[0].intersectionRatio > 0) {
            gsap.ticker.add(el.progressTween);
        } else {
            gsap.ticker.remove(el.progressTween);
        }
    }, observerOptions);

    el.progressTween = () => {
        // Get scroll distance to bottom of viewport.
        const scrollPosition = window.scrollY + window.innerHeight;
        // Get element's position relative to bottom of viewport.
        const elPosition = scrollPosition - el.offsetTop;
        // Set desired duration.
        const durationDistance = window.innerHeight + el.offsetHeight;
        // Calculate tween progresss.
        const currentProgress = elPosition / durationDistance;
        // Set progress of gsap timeline.
        el.tl.progress(currentProgress);
    };

    el.observer.observe(el);
});

observerElementsFooter.forEach((el) => {
    const preFooter = el.querySelector(".preFooter-Info");
    const preFooterImg = el.querySelector(".preFooter-Image");
    el.tl = gsap.timeline({ paused: true });

    el.tl
        .from(preFooter, {x: -200, opacity: 0, ease: 'back.out(1,7)', duration: 5})
        .to(preFooter, {x: 0, opacity: 1, ease: 'back.out(2,7)'})
        .from(preFooterImg, {opacity: 0, ease: 'back.out(0,7)', duration: -8})
        .to(preFooterImg, {opacity: 1, ease: 'back.out(0,7)'})

    el.observer = new IntersectionObserver((entry) => {
        if (entry[0].intersectionRatio > 0) {
            gsap.ticker.add(el.progressTween);
        } else {
            gsap.ticker.remove(el.progressTween);
        }
    }, observerOptionsFooter);

    el.progressTween = () => {
        // Get scroll distance to bottom of viewport.
        const scrollPosition = window.scrollY + window.innerHeight;
        // Get element's position relative to bottom of viewport.
        const elPosition = scrollPosition - el.offsetTop;
        // Set desired duration.
        const durationDistance = window.innerHeight + el.offsetHeight;
        // Calculate tween progresss.
        const currentProgress = elPosition / durationDistance;
        // Set progress of gsap timeline.
        el.tl.progress(currentProgress);
    };

    el.observer.observe(el);
});

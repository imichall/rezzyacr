import tinyTypewriter from "tiny-typewriter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

console.clear();

gsap.registerPlugin(ScrollTrigger);

const videoBlock = document.querySelectorAll(
    ".Section-Content-Intro[data-video='even']"
);
const text = document.querySelectorAll("[data-text='even']");

const textOdd = document.querySelectorAll("[data-text='odd']");
const videoOdd = document.querySelectorAll("[data-video='odd']");

ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {
        videoBlock.forEach((block) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: block,
                    start: "top 40%",
                    end: "bottom 30%",
                    scrub: 4,
                },
            });

            tl.from(block, {
                xPercent: -35,
                yPercent: -15,
                scale: 1.5,
                duration: 3,
            }).to(block, {
                yPercent: 0,
                xPercent: -35,
                scale: 1.5,
                duration: 3,
            },"+=1");
        });

        text.forEach((text) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: text,
                    start: "top center",
                    end: "bottom center",
                    scrub: 4,
                },
            });

            tl.from(text, { yPercent: 10, duration: 10, opacity: 0 }).to(text, {
                yPercent: -10,
                duration: 10,
                opacity: 0,
            },"+=1");
        });

        textOdd.forEach((text) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: text,
                    start: "top center",
                    end: "bottom center",
                    scrub: 4,
                },
            });

            tl.from(text, { xPercent: 100, duration: 3, opacity: 0 }).to(text, {
                xPercent: 100,
                duration: 10,
                opacity: 0,
            },"+=4");
        });

        videoOdd.forEach((video) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: video,
                    start: "top center",
                    end: "bottom center",
                    scrub: 4,
                },
            });

            tl.from(video, { xPercent: -50, duration: 3, opacity: 0 })
            .to(video, {
                xPercent: -50,
                duration: 10,
                opacity: 0,
            }, "+=4");
        });

        const footerText = gsap.timeline({
            scrollTrigger: {
                trigger: '[data-footer="text"]',
                start: "top center",
                end: "bottom center",
                toggleActions: "restart pause reverse",
            },
        });

        footerText.from('[data-footer="text"]', {
            xPercent: -100,
            duration: 3,
            opacity: 0,
        });
        // .to('[data-footer="text"]', {xPercent: -100, duration: 3, opacity: 0})

        const footerImg = gsap.timeline({
            scrollTrigger: {
                trigger: '[data-footer="image"]',
                start: "top center",
                end: "bottom center",
                toggleActions: "restart pause reverse",
            },
        });

        footerImg.from('[data-footer="image"]', {
            xPercent: 100,
            duration: 3,
            opacity: 0,
        });
    },
});

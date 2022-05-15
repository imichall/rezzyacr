(function (factory) {
	typeof define === 'function' && define.amd ? define('app', factory) :
	factory();
}((function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var tinyTypewriter = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
	   module.exports = factory() ;
	})(commonjsGlobal, function () {

	  function tinyTypewriter(el, {
	    items = [],
	    typeSpeed = 100,
	    deleteSpeed = 50,
	    delayBetweenItems = 2000,
	    loop = true,
	    startDelay = 0,
	    startsAtIndex = 0,
	    cursor = true,
	    cursorChar = "|",
	    cursorCharBlinkSpeed = 500,
	    cursorCharBlinkTransitionSpeed = 0.15,
	    startOnView = true,
	    startOnViewOffset = 0
	  } = {}) {
	    if (!items.length) {
	      throw new Error("tinyTypewriter: No items option was provided");
	    }

	    let isDeleting = false;
	    let index = startsAtIndex;
	    let text = items[index];
	    let speed;
	    let startDelayTimeout;
	    let ttwTimeout;
	    let cursorInterval;
	    let elPosition = el.getBoundingClientRect();
	    const char = document.createElement("span");
	    char.textContent = cursorChar;

	    if (cursor) {
	      el.insertAdjacentElement("afterend", char);
	      char.style.transition = `opacity ${cursorCharBlinkTransitionSpeed}s`;
	      cursorInterval = setInterval(() => {
	        char.style.opacity = char.style.opacity === "0" ? "1" : "0";
	      }, cursorCharBlinkSpeed);
	    }

	    el.textContent = items[0];

	    function type(arr) {
	      const arrLength = arr.length;
	      const word = items[index % arrLength];

	      if (isDeleting) {
	        speed = deleteSpeed;
	        text = word.substring(0, text.length - 1);
	      } else {
	        text = word.substring(0, text.length + 1);
	      }

	      el.textContent = `${text}`;

	      if (!loop && text === arr[arrLength - 1]) {
	        clearTimeout(ttwTimeout);
	        clearTimeout(startDelayTimeout);
	        clearInterval(cursorInterval);
	        return;
	      } else if (!isDeleting && text === word) {
	        isDeleting = true;
	        speed = delayBetweenItems;
	      } else if (isDeleting && text === "") {
	        isDeleting = false;
	        index++;
	        speed = typeSpeed;
	      }

	      ttwTimeout = setTimeout(function () {
	        type(items);
	      }, speed);
	    }

	    function checkElPos() {
	      elPosition = el.getBoundingClientRect();

	      if (elPosition.bottom <= window.innerHeight - startOnViewOffset && elPosition.top >= 0 + startOnViewOffset) {
	        startDelayTimeout = setTimeout(function () {
	          type(items);
	        }, startDelay - delayBetweenItems);
	        window.removeEventListener("scroll", checkElPos);
	      }
	    }

	    if (startOnView && !(elPosition.bottom <= window.innerHeight && elPosition.top >= 0)) {
	      window.addEventListener("scroll", checkElPos, false);
	    } else {
	      startDelayTimeout = setTimeout(function () {
	        type(items);
	      }, startDelay - delayBetweenItems);
	    }
	  }

	  return tinyTypewriter;
	});
	});

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

	      if (videoClientRect <= windowHeight - videoHeight * 0.5 && videoClientRect >= 0 - videoHeight * 0.5) {
	        thisVideoEl.play();
	      } else {
	        thisVideoEl.pause();
	      }
	    }
	  }
	}

	const typewritter = document.querySelectorAll('h2[data-title]');
	typewritter.forEach(el => {
	  if (el.getAttribute(['data-title']) == el.getAttribute(['data-title'])) {
	    let text = el.textContent;
	    tinyTypewriter(el, {
	      items: [text],
	      cursor: false,
	      typeSpeed: 100,
	      deleteSpeed: 30,
	      loop: true
	    });
	  }
	});
	document.querySelectorAll('a[href^="#"]').forEach(trigger => {
	  trigger.onclick = function (e) {
	    e.preventDefault();
	    let hash = this.getAttribute("href");
	    let target = document.querySelector(hash);
	    let headerOffset = 34;
	    let elementPosition = target.offsetTop;
	    let offsetPosition = elementPosition - headerOffset;
	    window.scrollTo({
	      top: offsetPosition,
	      behavior: "smooth"
	    });
	  };
	});
	const sections = document.querySelectorAll("div[data-section]");
	const navLi = document.querySelectorAll(".Navigation-list li");

	window.onscroll = () => {
	  var current = "";
	  sections.forEach(section => {
	    const sectionTop = section.offsetTop;

	    if (window.scrollY >= sectionTop - 34) {
	      current = section.getAttribute("id");
	    }
	  });
	  navLi.forEach(li => {
	    li.classList.remove("active");

	    if (li.classList.contains(current)) {
	      li.classList.add("active");
	    }
	  });
	};

})));

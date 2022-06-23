(function (factory) {
    typeof define === 'function' && define.amd ? define('app', factory) :
    factory();
}((function () { 'use strict';

    const data = {
      "calc_curt": {
        2: {
          "gas_season": 15000,
          "savings": 1000
        },
        3: {
          "gas_season": 20000,
          "savings": 1000
        },
        4: {
          "gas_season": 25000,
          "savings": 1300
        }
      },
      "input_price": {
        "gas": 20.0,
        "elec": 5.0,
        "usage_kw": 4,
        "usage_light_hour": 6,
        "usage_month_run": 6,
        "savings_perc": 30,
        "days": 30
      }
    };

    class Calc {
      constructor() {
        this.priceGas = document.querySelectorAll('input[name="price_gas"]');
        this.priceKw = document.querySelectorAll('input[name="price_electricity"]');
      }

      setFocus(currentSlide) {
        const price_gas = currentSlide.querySelector('span[data-price="month"]');
        const input_price = currentSlide.querySelector('input[name="price_gas"]');
        const input_kw = currentSlide.querySelector('input[name="price_electricity"]');
        return this.getResults(currentSlide, input_price.value, input_kw.value);
      }

      getPriceGas(currentSlide) {
        const price_gas = currentSlide.querySelector('span[data-price="month"]');
        const input_price = currentSlide.querySelector('input[name="price_gas"]');
        const input_kw = currentSlide.querySelector('input[name="price_electricity"]');

        input_price.oninput = e => {
          if (input_price.value > 0) {
            return this.getResults(currentSlide, input_price.value, input_kw.value);
          }
        };

        input_kw.oninput = e => {
          if (input_kw.value > 0) {
            return this.getResults(currentSlide, input_price.value, input_kw.value);
          }
        };
      }

      getResults(currentSlide, inputPrice, inputKw) {
        let type = currentSlide.getAttribute("data-section");
        const month_costs = currentSlide.querySelector('span[data-price="month"]');
        const month_save = currentSlide.querySelector('span[data-price="save"]');
        const year_save = currentSlide.querySelector('span[data-price="yearSave"]');
        let consum_gas_month = data.calc_curt[type]['gas_season'] / data.input_price['usage_month_run'];
        let consum_ele_month = type * data.input_price['usage_kw'] * data.input_price['usage_light_hour'] * data.input_price['days']; // Main input form customer - START

        let gas_costs = inputPrice * consum_gas_month;
        let el_costs = inputKw * consum_ele_month; // // Main input form customer - END

        let costs_sum = gas_costs + el_costs;
        let savings_costs = costs_sum * (data.input_price['savings_perc'] / 100);
        let saving_year = (savings_costs - data.calc_curt[type]['savings']) * data.input_price['usage_month_run'];
        month_costs.innerHTML = parseFloat(costs_sum.toFixed(0)).toLocaleString('cs-CZ');
        month_save.innerHTML = parseFloat(savings_costs.toFixed(0)).toLocaleString('cs-CZ');
        year_save.innerHTML = parseFloat(saving_year.toFixed(0)).toLocaleString('cs-CZ');
      }

    }

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

          if (videoClientRect <= windowHeight - videoHeight * 0.5 && videoClientRect >= 0 - videoHeight * 0.5) {
            thisVideoEl.play();
          } else {
            thisVideoEl.pause();
          }
        }
      }
    }

    const typewritter = document.querySelectorAll("h2[data-title]");
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
    const navLi = document.querySelectorAll(".Navigation-list.-menu li");

    window.onscroll = () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 54) {
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

    const CurrentSlider = document.querySelectorAll('.SlideContent section');
    CurrentSlider.forEach((item, index) => {
      let calc = new Calc();
      const input_price = item.querySelector('input[name="price_gas"]');
      input_price.addEventListener('click', e => {
        calc.setFocus(item);
      });
      calc.getPriceGas(item);
    });

})));

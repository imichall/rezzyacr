(function (factory) {
    typeof define === 'function' && define.amd ? define('calc', factory) :
    factory();
}((function () { 'use strict';

    const log = arg => console.log(arg);

    class Calc {
      constructor() {
        this.curt_kw = 4;
        this.curt_lux = 6;
        this.curt_month = 6;
        this.curt_save_perc = 30;
        this.priceGas = document.querySelectorAll('input[name="price_gas"]');
        this.priceKw = document.querySelectorAll('input[name="price_electricity"]');
      }

      setFocus(currentSlide) {
        const price_gas = currentSlide.querySelector('span[data-price="month"]');
        const input_price = currentSlide.querySelector('input[name="price_gas"]');
        input_price.addEventListener('click', e => {
          price_gas.innerHTML = input_price.value;
        });
        this.getPriceGas(currentSlide);
      }

      getPriceGas(currentSlide) {
        const price_gas = currentSlide.querySelector('span[data-price="month"]');
        const input_price = currentSlide.querySelector('input[name="price_gas"]');
        input_price.addEventListener('keyup', e => {
          log(e.currentTarget);

          if (input_price.value > 0) {
            price_gas.innerHTML = input_price.value; // this.getCountedPrice(item.value, currentSlide);
          }
        });
      }

      getPriceWatt(currentSlide) {
        this.priceKw.forEach(item => {
          item.addEventListener('keyup', () => {
            if (item.value > 0) {
              currentSlide.querySelector('span[data-price="month"]').innerHTML = item.value; // this.getCountedPrice(item.value, currentSlide);
            }
          });
        });
      }

      getCountedPrice(inputPrice, slide) {
      }

    }

    const cacl_radio = document.querySelectorAll('input[name="tab-control"]');
    const CurrentSlider = document.querySelectorAll('.SlideContent section');
    CurrentSlider.forEach((item, index) => {
      let calc = new Calc();
      const price_gas = item.querySelector('span[data-price="month"]');
      const input_price = item.querySelector('input[name="price_gas"]');
      input_price.addEventListener('click', e => {
        price_gas.innerHTML = input_price.value;
      });
      calc.getPriceGas(item);
      calc.getPriceGas(item);
    });

})));

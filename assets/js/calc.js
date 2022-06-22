import { config_data } from "../../www/CalcData/calc_config";

class Calc {
    constructor() {
        this.priceGas = document.querySelectorAll('input[name="price_gas"]');
        this.priceKw = document.querySelectorAll(
            'input[name="price_electricity"]'
        );
    }

    setFocus(currentSlide) {
        const price_gas = currentSlide.querySelector(
            'span[data-price="month"]'
        );
        const input_price = currentSlide.querySelector(
            'input[name="price_gas"]'
        );
        const input_kw = currentSlide.querySelector(
            'input[name="price_electricity"]'
        );

        return this.getResults(currentSlide, input_price.value, input_kw.value);
        // input_price.addEventListener("click", (e) => {
        // });

        // this.getPriceGas(currentSlide);
    }

    getPriceGas(currentSlide) {
        const price_gas = currentSlide.querySelector(
            'span[data-price="month"]'
        );
        const input_price = currentSlide.querySelector(
            'input[name="price_gas"]'
        );
        const input_kw = currentSlide.querySelector(
            'input[name="price_electricity"]'
        );

        input_price.oninput = (e) => {
            if (input_price.value > 0) {
                return this.getResults(currentSlide, input_price.value, input_kw.value);
            }
        };

        input_kw.oninput = (e) => {
            if (input_kw.value > 0) {
                return this.getResults(currentSlide, input_price.value, input_kw.value);
            }
        };
    }

    getResults(currentSlide, inputPrice, inputKw) {
        let type = currentSlide.getAttribute("data-section");

        const month_costs = currentSlide.querySelector(
            'span[data-price="month"]'
        );
        const month_save = currentSlide.querySelector(
            'span[data-price="save"]'
        );
        const year_save = currentSlide.querySelector(
            'span[data-price="yearSave"]'
        );

        let consum_gas_month = config_data.calc_curt[type]['gas_season'] / config_data.input_price['usage_month_run'];

        let consum_ele_month = type * config_data.input_price['usage_kw'] * config_data.input_price['usage_light_hour'] * config_data.input_price['days'];

        // Main input form customer - START
        let gas_costs = inputPrice * consum_gas_month;
        let el_costs = inputKw * consum_ele_month;
        // // Main input form customer - END

        let costs_sum = gas_costs + el_costs;
        let savings_costs = costs_sum * (config_data.input_price['savings_perc'] / 100);
        let saving_year = (savings_costs - config_data.calc_curt[type]['savings']) * config_data.input_price['usage_month_run'];

        month_costs.innerHTML = parseFloat(costs_sum.toFixed(0)).toLocaleString('cs-CZ');
        month_save.innerHTML = parseFloat(savings_costs.toFixed(0)).toLocaleString('cs-CZ');
        year_save.innerHTML = parseFloat(saving_year.toFixed(0)).toLocaleString('cs-CZ');
    }
}

export { Calc };
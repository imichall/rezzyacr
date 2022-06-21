const data = {
    "calc_curt": {
        2: {
            "gas_season":15000,
            "savings": 1000
        },
        3: {
            "gas_season":20000,
            "savings": 1000
        },
        4: {
            "gas_season":25000,
            "savings": 1300
        },
    },
    "input_price": {
        "gas":20.0,
        "elec":5.0,
        "usage_kw":4,
        "usage_light_hour":6,
        "usage_month_run":6,
        "savings_perc":30,
        "days":30,
    }
}

export { data as config_data};
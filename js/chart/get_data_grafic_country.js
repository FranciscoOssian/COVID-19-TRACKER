function get_data_grafic_country (country_name) {
    return (
        get_json("https://pomber.github.io/covid19/timeseries.json")
            .then( data => data[country_name] )
            .catch( err => console.log(err))
    )
}
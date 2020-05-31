let Ul_Element_list_countries = document.getElementById("ul_countries");

let INFO = {
    country:             document.getElementById("div_name"),
    cases:               document.getElementById("div_cases"),
    todayCases:          document.getElementById("div_todayCases"),
    deaths:              document.getElementById("div_deaths"),
    todayDeaths:         document.getElementById("div_todayDeaths"),
    recovered:           document.getElementById("div_recovered"),
    active:              document.getElementById("div_active"),
    critical:            document.getElementById("div_critical"),
    casesPerOneMillion:  document.getElementById("div_casesPerOneMillion"),
    deathsPerOneMillion: document.getElementById("div_deathsPerOneMillion"),
    totalTests:          document.getElementById("div_totalTests")
}



get_json("https://coronavirus-19-api.herokuapp.com/countries")
    .then( list_countries => {
        for(let country of list_countries){
            
            let country_Element = document.createElement("li");
            let country_name = country.country;
            let text_name = document.createTextNode(country_name);
            country_Element.appendChild(text_name);

            country_Element.onclick = function(){
                for( info_section of Object.keys(INFO) ){
                    INFO[info_section].innerHTML = "";
                    INFO[info_section].innerHTML = `${info_section}: ${country[info_section]}`;
                }
            };

            country_Element.setAttribute("class", "li_country");

            Ul_Element_list_countries.appendChild(country_Element);
        }
    }

    )
    .catch(err => console.log(err));
var affected_div = document.getElementById("affected");

var list_cards_div = document.getElementsByClassName("card");

var search_button = document.getElementById("button_search_country");
var search_input = document.getElementById("input_search_country");



get_json("https://coronavirus-19-api.herokuapp.com/countries")
    .then( list_countries => {

        console.log(list_countries);

        for( country of list_countries ){

            var country_card_div = document.createElement('div'); //the card

            //inicialization of props cards-----------------------------

            var country_card_stats_div = document.createElement('div') //stats

            var country_name_div = document.createElement('h1');

            var country_cases_div = document.createElement('div');
            var country_today_cases_div = document.createElement('div');

            var country_deaths_div = document.createElement('div');
            var country_today_deaths_div = document.createElement('div');

            var country_recovered_div = document.createElement('div');

            var country_active_div = document.createElement('div');

            var country_critical_div = document.createElement('div');

            var country_cases_per_one_million_div = document.createElement('div');

            //ends inicializtion---------------------------------------




            
            //seting class name ----------------------------------------

            country_card_div.setAttribute('class', 'card');

            country_card_stats_div.setAttribute('class', 'card-stats');

            country_name_div.setAttribute('class', 'countryName');

            country_cases_div.setAttribute('class', 'countryCases');
            country_today_cases_div.setAttribute('class', 'todayCases');

            country_deaths_div.setAttribute('class', 'countryDeaths');
            country_today_deaths_div.setAttribute('class', 'countryTodayDeaths');
            
            country_recovered_div.setAttribute('class', 'countryRecovered');

            country_active_div.setAttribute('class', 'countryActive');

            country_critical_div.setAttribute('class', 'countryCritical');

            country_cases_per_one_million_div.setAttribute('class', 'countryCases');


            //ends class name ------------------------------------------------



            
            // appending informations in card ------------------------------
            country_card_div.appendChild(country_name_div);

            

            country_card_stats_div.appendChild(country_cases_div);
            country_card_stats_div.appendChild(country_today_cases_div)

            country_card_stats_div.appendChild(country_deaths_div);
            country_card_stats_div.appendChild(country_today_deaths_div);

            country_card_stats_div.appendChild(country_recovered_div);

            country_card_stats_div.appendChild(country_active_div);

            country_card_stats_div.appendChild(country_critical_div);

            country_card_stats_div.appendChild(country_cases_per_one_million_div);

            country_card_div.appendChild(country_card_stats_div);

            // ends appendig -----------------------------------------------

            
            // set the content --------------------------------------
            country_name_div.innerHTML                  = country.country;

            country_cases_div.innerHTML                 = "cases: " + country.cases;
            country_today_cases_div.innerHTML           = "today cases: " + country.todayCases;

            country_deaths_div.innerHTML                = "deaths: " + country.deaths;
            country_today_deaths_div.innerHTML          = "today deaths: " + country.todayDeaths;

            country_recovered_div.innerHTML             = "recoverd: " + country.recovered;
            country_active_div.innerHTML                = "active: " + country.active;
            country_critical_div.innerHTML              = "critical: " + country.critical;
            country_cases_per_one_million_div.innerHTML = "cases per one milliom: " + country.casesPerOneMillion;
            // ends setting -----------------------------------------


            //======================================================================
            let grafic_name = country.country

            console.log(grafic_name)

            function draw_country_in_grafic (){

                draw_chart_country(grafic_name)
                    console.log(grafic_name)
                    .then( data => console.log("grafic great", data))
            }

            country_card_div.onclick = draw_country_in_grafic;

            //========================================================================


            affected_div.appendChild(country_card_div);


        }

    }

    )
    .catch(err => console.log(err));


search_input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search();
    }
});

function search (){
    console.log(`search : ${search_input.value}`);
    console.log(list_cards_div[0])

    for (card of list_cards_div){
        var name_card = card.children[0].childNodes[0].data.toUpperCase();
        var name_search = search_input.value.toUpperCase();

        var find = name_card.indexOf(name_search);

        if (find === -1){
            card.style.display = 'none';

            card.style.width = "0px";
            card.style.height = "0px";

            

        }else{
            card.style.display = 'block';

            card.style.width = "300px";
            card.style.height = "500px";
        }

    }

}

search_button.onclick = search;




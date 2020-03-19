var affected_div = document.getElementById("affected");


get_countries()
    .then( list_countries => {

        console.log(list_countries);

        for( country of list_countries ){

            //inicialization of props cards-----------------------------

            var country_card_div = document.createElement('div'); //the card
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


            affected_div.appendChild(country_card_div);


        }

    }

    )
    .catch(err => console.log(err));

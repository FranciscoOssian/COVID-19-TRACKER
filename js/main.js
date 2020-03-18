var div_element = document.getElementById("affected");


get_countries_names()
    .then( list_country_names => {

        console.log(list_country_names);

        for( country_name of list_country_names ){

            var countryLI = document.createElement('div');
            countryLI.innerHTML += country_name;

            div_element.appendChild(countryLI);
        }

    }

    )
    .catch(err => console.log(err));

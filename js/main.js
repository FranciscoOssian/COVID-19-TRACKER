var ul_element = document.getElementById("affected");


get_countries_names()
    .then( list_country_names => {

        console.log(list_country_names);

        for( country_name of list_country_names ){

            var countryLI = document.createElement('li');
            var textNode = document.createTextNode(country_name);
            
            countryLI.appendChild(textNode)
            ul_element.appendChild(countryLI);
        }

    }

    )
    .catch(err => console.log(err));

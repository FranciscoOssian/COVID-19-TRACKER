const URL_TO_FETCH = 'https://coronavirus-19-api.herokuapp.com/countries';

var countries_names = [];

function get_countries_names(){

    return fetch(URL_TO_FETCH).then(r => r.json()).then(cs => cs.map(c => c.country))

}
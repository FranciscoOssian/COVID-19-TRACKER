var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "516ca269admshc8b640079bf85b0p1d8a4djsn78935d1cb17b"
	}
}







var affected_countries = [];







function puts_ul () {
	var affected_countries_element = document.getElementById('affected');
	
	for (country of affected_countries){
		var countryLI = document.createElement('li');
		var textNode = document.createTextNode(country);
		
		countryLI.appendChild(textNode)
		affected_countries_element.appendChild(countryLI);

		//countryLI.className = "fa fa-check";
	}
}

function search_affected (){
    $.ajax(settings).done(function (response) {
		resp = JSON.parse(response)
		for ( country of resp.affected_countries ){
			affected_countries.push(country);
		}

		puts_ul();
        
    });
}
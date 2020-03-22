function draw_chart_country (name){

	function grafic(data) {

		console.log("data in grafic    ", data);
	
		var table_index = ['day', 'confirmed', 'deaths', 'recovered'];
	
		var table = [];
		table.push(table_index);
	
		for ( day of data ){
			
			var store = [];
	
			store.push(day.date);
			store.push(day.confirmed);
			store.push(day.deaths);
			store.push(day.recovered);
	
			table.push(store);
		}
	
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);
	
		function drawChart() {
		  var google_table = google.visualization.arrayToDataTable(table);
	
		  var options = {
			title: `Covid-19 evelotion in ${name}`,
			hAxis: {title: 'Date',  titleTextStyle: {color: '#333'}},
			vAxis: {minValue: 0}
		  };
	
		  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
		  chart.draw(google_table, options);
		}
	}
	
	return get_data_grafic_country(name)
				.then( data => grafic(data) )
				.catch( err => console.log(err) );
	
}
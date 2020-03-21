get_json("https://franciscoossianfoln.github.io/COVID-19-TRACKER/config.json")
    .then( config => {
        // Initialize Firebase
        firebase.initializeApp(config);
        firebase.analytics();

    } )
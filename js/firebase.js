// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const URL_TO_FETCH_firebase = 'https://coronavirus-19-api.herokuapp.com/countries';



function firebase(){

    return fetch(URL_TO_FETCH_firebase).then(r => r.json())

}s
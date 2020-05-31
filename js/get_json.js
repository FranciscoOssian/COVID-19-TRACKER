var get_json = function(link){

    return fetch(link).then(r => r.json())

}
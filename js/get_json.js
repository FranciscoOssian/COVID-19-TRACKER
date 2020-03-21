function get_json(link){

    return fetch(link).then(r => r.json())

}
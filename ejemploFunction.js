var ibmdb = require('ibm_db');
/**
 * Este codigo es un ejemplo de llamada a un API
 *
 *
 */

function consultaAPI(dsn, url){
    //EJEMPLO DE REQUEST SIMPLE con un funcion fetch

    var request = new Request(url,{
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        cache: 'only-if-cached',
        referrerPolicy: 'no-referrer'
    });
    console.log('request =', request);
    fetch(request).then(function(response){
        console.log('response = ', response);
        return response.text();
    }).then(function(data) {
        console.log('data = ',data);
    }).catch(function (e){
        console.error(e);
    });
}

function main({url, __bx_creds: {dashDB:{dns}}}){
    //Funcion principal que a la funcion de consulta de API
    return consultaAPI(dsn, url);
}

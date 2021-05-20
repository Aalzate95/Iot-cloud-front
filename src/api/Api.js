const makeGet = (url, options = {}) =>{
    const headers = options['headers'] || {};
    const params = options['params'] || {}
    const query =Object.keys(params).map(k => encodeURIComponent(k) + '=' +
    encodeURIComponent(params[k])).join('&')
    const urlFinal = url+ '?' +query
    return fetch(urlFinal, { headers,method: 'GET'}).then(res => res.json());
};
//POST
const makePost = (url,object={}, options = {}) => {
    const headers = options['headers'] || {};
    const body = JSON.stringify(object);
    headers['Content-Type'] ='application/json';
    return fetch(url, {body, headers, method: 'POST'}).then(res => res.json());
};

//PUT
const makePut = (url,object = {},options = {}) => {//url debe incluir /id en el endpoint
    const headers = options['headers'] || {};
    const body = JSON.stringify(object);
    headers['Content-Type'] ='text/plain';
    return fetch(url, {body, headers, method: 'PUT'}).then(res =>res.json());
};
//DELETE
const makeDelete = (url,object={}, options = {}) => {
    const headers = options['headers'] || {};
    const body = JSON.stringify(object);
    headers['Content-Type'] ='text/plain';
    return fetch(url, {body, headers, method: 'DELETE'}).then(res =>res.json());
};


// Esta función es para que la usen como ejemplo o referencia.
export const fetchRecurso = (id) =>{
    const url ="http://localhost:8000/recursos/"+id+"/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}
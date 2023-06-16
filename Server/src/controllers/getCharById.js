const { default: axios } = require("axios");

const fullfiled = (response, res)=>{
    const { id, name, gender, species, origin, image, status } = response.data;
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({ id, name, gender, species, origin, image, status }));
    };

const rejected = (error, res )=> {
    res.writeHead(500, {'Content-Type':'text/plain'});
    res.end(error.message)
};

const getCharById = (res, id) => {
    axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {   
            console.log("Response: "+response);
            fullfiled(response, res)})
        .catch((error) => rejected (error, res ));
};

module.exports = getCharById;

const axios = require('axios');

const getClima = async(lat, lng) => {
    //Creo la llamada
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=652e7e2add30f6daf32a1e73295ededf`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}

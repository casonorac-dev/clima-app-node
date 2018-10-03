const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    //Formateo el valor de la dirección
    let encodedUrl = encodeURI(direccion);
    //Creo la llamada
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAqnn8uShSvGD2g3_7rvVvNWwEYyhkuyu4`);
    //Valido si existe la dirección
    if (resp.data.status === 'ZERO_RESULTS') throw new Error(`No hay resultados para la ciudad ${direccion}`);
    //Obtengo respuesta
    let location = resp.data.results[0];
    //Obtengo valores de respuesta
    let direccion1 = location.formatted_address;
    let coordenadas = location.geometry.location;
    //Obtengo coordenadas
    let lat = coordenadas.lat;
    let lng = coordenadas.lng;
    //Regreso el objeto de la respuesta obtenida
    return {
        direccion: direccion1,
        lat: lat,
        lng: lng
    }
}

module.exports = {
    getLugarLatLng
}

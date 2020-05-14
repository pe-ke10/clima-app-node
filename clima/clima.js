const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ca2c772ac57a230f44e1562d4e2463ff&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
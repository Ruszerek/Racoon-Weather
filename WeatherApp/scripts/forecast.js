// api key 
const key = 'T4wlmnpsF1OGAQGZBHfJVOGGyUeBwxfI';

//get weather information
const getWeather = async (id) =>{

    //endpoint 
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    
    // query contructor 
    const query = `${id}?apikey=${key}`;

    //returns a promise and pass it to response variable
    const response = await fetch(base+query);

    // turining response to data using JSON method
    const data = await response.json()

    return data[0];

};

// async function return promise

// city parameter used in query string to pass city from user
const getCity = async(city) => {
    // endpoint
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    
    // query constructor
    const query = `?apikey=${key}&q=${city}`;

    //returns a promise and pass it to response variable
    const response = await fetch(base+query);

    // turining response to data using JSON method
    const data = await response.json();

    return data[0];
};

// test connection
// getCity('Legnica')
//     .then(data => {
//         return getWeather(data.Key);})
//         .then(data => {
//         console.log(data);})
//     .catch(err => console.log(err));


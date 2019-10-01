const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const firstTime = document.querySelector('.time');
const icon = document.querySelector('.icon img');

//functions that updates UI 
const updateUI = (data) =>{

    console.log(data);
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    //destructure properties 
    const {cityDets, weather} = data;

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //update day and night images

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg'
    // } else {
    //     timeSrc = 'img/night.svg'
    // };

    firstTime.setAttribute('src',timeSrc);

    //update icon image
    let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    //remove d-none class if present
        if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
        };
    };

const updateCity = async(city) =>{

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    // return shorthand object notation 
    return {cityDets, weather};

};

cityForm.addEventListener('submit', e=>{
    
    //prevent default action (default action is to refresh the page)
    e.preventDefault();

    //get the city value from input field name = city
    const city = cityForm.city.value.trim();

    // reset form
    cityForm.reset();

    //update the ui with the new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});
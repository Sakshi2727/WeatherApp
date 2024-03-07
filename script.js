
async function fetchWeather(city) {
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'cdb393e4e1msh2f585d49bdf32bdp1c2a0cjsnfb37c3bcdc3b',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		cityName.innerHTML=city;
		console.log(result);
		
		
		cloud_pct.innerHTML= result.cloud_pct
		temp.innerHTML = result.temp
		feels_like.innerHTML = result.feels_like
		humidity.innerHTML = result.humidity
		min_temp.innerHTML = result.min_temp
		max_temp.innerHTML = result.max_temp
		wind_speed.innerHTML = result.wind_speed
		wind_degrees.innerHTML = result.wind_degrees
		sunrise.innerHTML = result.sunrise
		sunset.innerHTML = result.sunset
		windspeed.innerHTML=result.wind_speed
		humid.innerHTML=result.humidity
		temper.innerHTML=result.temp
	} catch (error) {
		console.error(error);
	}
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	fetchWeather(city.value);
})
fetchWeather("seattle");
async function fetchWeather2(city) {
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'cdb393e4e1msh2f585d49bdf32bdp1c2a0cjsnfb37c3bcdc3b',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		cityName.innerHTML=city;
		console.log(result);
		
		
		cloud_pct.innerHTML= result.cloud_pct
		temp.innerHTML = result.temp
		feels_like.innerHTML = result.feels_like
		humidity.innerHTML = result.humidity
		min_temp.innerHTML = result.min_temp
		max_temp.innerHTML = result.max_temp
		wind_speed.innerHTML = result.wind_speed
		wind_degrees.innerHTML = result.wind_degrees
		sunrise.innerHTML = result.sunrise
		sunset.innerHTML = result.sunset
		windspeed.innerHTML=result.wind_speed
		humid.innerHTML=result.humidity
		temper.innerHTML=result.temp
	} catch (error) {
		console.error(error);
	}
}
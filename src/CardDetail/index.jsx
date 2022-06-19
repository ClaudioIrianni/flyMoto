import React from 'react';
import { useEffect } from 'react';

const apiKey = '79cd9ba3c0c6f51e69332a75e765e856';
async function fetchData(path) {
  const r = await fetch(path);
  const recurso = await r.json();
  let ciudad;
  if (recurso.main !== undefined) {
    ciudad = {
      country: recurso.sys.country,
      act: Math.round(recurso.main.temp),
      min: Math.round(recurso.main.temp_min),
      max: Math.round(recurso.main.temp_max),
      img: recurso.weather[0].icon,
      id: recurso.id,
      wind: recurso.wind.speed,
      temp: recurso.main.temp,
      name: recurso.name,
      weather: recurso.weather[0].main,
      clouds: recurso.clouds.all,
      latitud: recurso.coord.lat,
      longitud: recurso.coord.lon,
      sensacion: Math.round(recurso.main.feels_like),
    };
  }
  return ciudad;
}

const index = city => {
  useEffect(() => {
    fetchData(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}&units=metric`
    ).then(
      city => {console.log(city)
          if (city) {
              
          //oldCities => [...oldCities, city];
        } else {
          alert('asd');
        }
      },
      [city.name, apiKey]
    );
  });
  return;
};

export default index;

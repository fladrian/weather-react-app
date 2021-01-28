/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Header from './components/shared/Header'
import Weather from './components/Weather'
import Form from './components/Form'
import Fade from 'react-reveal/Fade';
import { GetCountries, GetCities, GetWeather } from './services/GetServices.service'
import styled from 'styled-components'

const Container = styled.main`
margin: 0 auto;
margin-top: -2em;
padding: 0 4em;
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-wrap: wrap;

@media (max-width: 720px){
  padding: 0 .5em;
  width: 85%;
}
`

function App() {

  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')
  const [cities, setCities] = useState([])
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [showWeather, setShowWeather] = useState(false)
  const [isError, setIsError] = useState(false)

  const kelvinToCelsius = (k) => ((k - 273.15).toFixed(2))

  const countriesData = async () => {
    try {
      setShowWeather(false)
      setIsError(false)
      const { data } = await GetCountries()
      setCountries(data)
      console.info(data)
    } catch (error) {
      setShowWeather(true)
      setIsError(true)
    }
  }
  const citiesData = async (country_iso2) => {
    if (!country_iso2) return
    try {
      setIsLoading(true)
      setIsError(false)
      setShowWeather(false)
      const { data } = await GetCities(country_iso2)
      console.info(data, "from cities")
      setCities(data)
      setIsLoading(false)
    } catch (error) {
      console.info(error)
    }
  }
  const weatherData = async (city, country_iso2) => {
    if (!country_iso2 || !city) return
    setIsError(false)
    setShowWeather(false)
    try {
      const { data } = await GetWeather(city, country_iso2)
      const weatherInfo = {
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        city_name: data.name,
        country_code: data.sys.country,
        speed: data.wind.speed,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        temp: kelvinToCelsius(data.main.feels_like)
      }
      setWeather(weatherInfo)
      console.info(weatherInfo)
      setShowWeather(true)
    } catch (error) {
      setShowWeather(true)
      setIsError(true)
    }
  }

  useEffect(() => {
    countriesData()
  }, [])

  useEffect(() => {
    citiesData(country)
  }, [country])


  return (
    <>
      <Header />
      <Fade>
        <Container>
          <Form countries={countries}
            setCountry={setCountry}
            country={country}
            cities={cities}
            setCities={setCities}
            setCity={setCity}
            city={city}
            isLoading={isLoading}
            setShowWeather={setShowWeather}
            weatherData={weatherData}
            setIsError={setIsError}
          />
          {showWeather && <Weather weather={weather}
            isError={isError}
            showWeather={showWeather} />}
        </Container>
      </Fade>
    </>
  );
}

export default App;

import styled from 'styled-components';
import { WiDayCloudy, WiRain, WiCloud, WiCloudy } from "react-icons/wi";
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const WeatherCard = styled.div`
	padding: 1em 2em;
	border-radius: 30px;
	text-align: center;
	border-bottom-left-radius: 10px;
	background-color: #393e46;
	color: #ddd;
	font-size: 1.4em;
	z-index:1000;
`
const HeaderCard = styled.div`
	font-size: 1.2em;
	font-weight: 600;
`
const BodyCard = styled.div`
	font-size: 3em;
	margin-top: .4em;
	font-weight: 800;

	& svg {
		font-size: 2.4em;
		vertical-align: middle;
		display: inline-block;
		text-align: right;
	}
	@media (max-width: 720px){
  padding: 0 .5em;
  font-size: 1.6em;
}
`
const InfoCard = styled.span`
	font-size: .9em;
	font-weight: 400;
	display: flex;
	justify-content: space-around;
`
const ErrorCard = styled.div`
	color: rgb(236, 70, 70);
  text-align: center;
  background-color: rgb(34, 40, 49);
  font-weight: 400;
  border-radius: 8px;
  padding: 0.8em;
  font-size: 0.8em;
`

const defineIcon = (weather) => {
	if(weather === "Clear") return <WiDayCloudy />
	if(weather === "Rain") return <WiRain />
	if(weather === "Clouds") return <WiCloudy />
	return <WiCloud/>
}


const Weather = ({weather, isError}) => {
	return (
		<WeatherCard>
			{isError 
			? <ErrorCard>Something goes wrong, try again.</ErrorCard>
			: <Fade opposite>
					<HeaderCard>{weather.city_name} | {weather.country_code}</HeaderCard>
					<BodyCard>{weather.temp} ºC
						<Pulse forever duration={3800}>	
							{defineIcon( weather.weather)}
						</Pulse>	
					</BodyCard>
					<InfoCard>Weather: {weather.weather} | Description: {weather.description}</InfoCard>
					<hr/>
					<InfoCard>Humidity: {weather.humidity}% | Speed: {weather.speed}Kmh | Pressure: {weather.pressure}</InfoCard>
				</Fade>
			}
		</WeatherCard>
	)
}

Weather.propTypes = {
	weather: PropTypes.object.isRequired,
	isError: PropTypes.bool.isRequired
}

export default Weather
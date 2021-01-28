import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Loader from './shared/Loader';
import PropTypes from 'prop-types';
import { ImSearch } from "react-icons/im";

const Select = styled.select`
	border: 3px solid #222831;
	height: 40px;
	border-radius: 8px;
	font-size: .8em;
	margin-bottom: 1em;
	display: inline-block;
	width: 100%;
`
const FormContainer = styled.article`
	padding: 1em 2em;
	border-radius: 30px;
	border-bottom-right-radius: 10px;
	background-color: #393e46;
	color: #ddd;
	font-size: 1.4em;
	z-index:1000;
	margin-bottom: 2em;
	position: relative;
`

const Submit = styled.button`
	padding: .2em .3em;
	font-size: 1.1em;
	border: none;
	border-radius: 30px;
	border-bottom-right-radius: 10px;
	font-weight: 500;
	letter-spacing: 1.4;
	color: #393e46;
	text-align: center;
	background-color: #ffd369;
	margin-left: 98%;

	&:hover{
		background-color: #fcbf2f;
		cursor: pointer;
		color: #121213;
	}

	@media (max-width: 720px){
  font-size: 1.8em;
	position: absolute;
	bottom: -28px;
	right: -10px;
	margin-left: 85%;
}
`

const citiesSelect = (cities, city, getCity) => (
	<>
	<Fade opposite duration={1000}>
		<div>
		<label>City:</label>
		<Select value={city} name="city" onChange={getCity}>
			<option value="">Select a country</option>
			{
				cities.map(city => (
				 <option key={city.id} value={city.name}>{city.name}</option>
				))
			}
		</Select>
		</div>
		</Fade> 
	</>
)


const Form = ({countries, country, setCities, setCountry, setIsError, cities, city, setCity, isLoading, weatherData, setShowWeather}) => {

	const getCountry = ({target:{value, name}}) => {
		console.info(value, name);
		setCountry(value)
		setCities([])
		setShowWeather(false)
	}
	const getCity = ({target:{value, name}}) => {
		console.info(value, name);
		setCity(value)
		
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.info(country, city);
		if(!country || !city){
			setIsError(true)
			setShowWeather(true)
			return
		}

		setShowWeather(false)
		setIsError(false)
		weatherData(city, country)
	}
	

	return (
		<FormContainer>
			<form onSubmit={handleSubmit}>
				<label>Countries:</label>
				<Select value={country} name="country" onChange={getCountry}>
					<option value="">Select a country</option>
					{
						countries.map(country => (
						<option key={country.id} value={country.iso2}>{country.name}</option>
						))
					}
				</Select>
					{cities.length > 0 && citiesSelect(cities, city, getCity, isLoading)}
					{isLoading && <Loader />}

					<Submit type="submit">
						<ImSearch />
					</Submit>
			</form>
		</FormContainer>
	)
}

Form.propTypes = {
	countries : PropTypes.array.isRequired, 
	country	: PropTypes.string.isRequired, 
	setCities: PropTypes.func.isRequired, 
	setCountry: PropTypes.func.isRequired, 
	cities: PropTypes.array.isRequired, 
	city: PropTypes.string.isRequired, 
	setCity: PropTypes.func.isRequired, 
	isLoading: PropTypes.bool.isRequired, 
	setShowWeather: PropTypes.func.isRequired,
	weatherData: PropTypes.func.isRequired
}

export default Form

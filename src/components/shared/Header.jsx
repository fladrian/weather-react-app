import styled from 'styled-components';
import { WiDayCloudy } from "react-icons/wi";
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';


const HeaderContainer = styled.header`
	width: 100%;
	height: 120px;
	padding: .4em 0;
	background-color: #ffd369;
	border-bottom-right-radius: 40px;
	border-bottom-left-radius: 40px;
	color: #393e46;
	display: flex;
	justify-content: center;

	& div {
		display: inline-block;
	}

	& svg {
		font-size: 2em;
		vertical-align: middle;
		display: inline-block;
		text-align: right;
	}

	@media (max-width: 720px){
  padding: 0 .5em;
  font-size: .8em;

	& div {
		display: block;
		display: flex;
		justify-content: center;
	}

	& svg {
		font-size: 1.8em;
		display: block;
		text-align: center;
	}
}

`


const Header = () => {
	return (
		<Fade top duration={1800}>
		<HeaderContainer>
			<h1>Wheater React App
				<Pulse forever duration={3800}>	
					<WiDayCloudy />
				</Pulse>	
			</h1>
		</HeaderContainer>
		</Fade>
	)
}
export default Header

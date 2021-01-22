import styled, {keyframes} from 'styled-components';

const keyframe = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 40px;
`
const LoaderContent = styled.div`
  position: relative;
	height: 80px;
  width: 20%;
  margin: 1em;

& div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #ffd369;
  animation: ${keyframe} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
& div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
& div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
& div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
`

const Loader = () => {
	return (
    <div>
		<LoaderContainer>
      <LoaderContent>
			  <div></div><div></div><div></div>
      </LoaderContent>
		</LoaderContainer>
    </div>
	)
}

export default Loader

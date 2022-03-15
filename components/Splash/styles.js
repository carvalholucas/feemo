import Image from 'next/image'

import styled from 'styled-components'

export const Container = styled.section`
  align-items: center;
  background: #362076;
  display: flex;
  height: 100vh;
  min-height: 100vh;
  min-height: fill-available;
  min-height: -webkit-fill-available;
  justify-content: center;
  width: 100%;
`

export const AnimatedIcon = styled(Image)`
  transform: scale(1);
	animation: pulse 1.5s infinite alternate;

@keyframes pulse {
	0% {
    transform: scale(0.8);
    opacity: .5;
	}
	100% {
    transform: scale(1);
    opacity: 1;
	}
}
`
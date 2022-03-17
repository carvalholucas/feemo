import styled from 'styled-components'

export const Button = styled.button`
  align-items: center;
  background: #351b78;
  border-radius: 50%;
  border: none;
  bottom: 2rem;
  color: #FFF;
  display: flex;
  height: 6rem;
  justify-content: center;
  position: fixed;
  right: 2rem;
  width: 6rem;
  z-index: 999;

  &.button-enter {
    transform: scale(1);
    animation: enter .5s;
  }

  &.button-out {
    transform: scale(0);
    animation: out .5s;
  }

  @keyframes enter {
    0% { transform: scale(0.5) }
	  100% { transform: scale(1) }
  }

  @keyframes out {
	  0% { transform: scale(1) }
	  100% { transform: scale(0) }
  }
`
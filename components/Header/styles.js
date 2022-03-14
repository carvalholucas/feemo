import styled from 'styled-components'

export const Container = styled.header`
  align-items: center;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 99;

  /* section {
    align-items: center;
    display: flex;

    &.choose-city {
      color: #FFF;
      font-weight: 200;

      span {
        font-size: 1rem;
        font-weight: 300;
        margin-right: 0.5rem;
      }

      > svg {
        margin-top: 3px;
      }
    }
  } */

  .hamburguer-icon {
    position: absolute;
    left: 1rem;
  }
`
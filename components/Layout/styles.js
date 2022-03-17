import styled from 'styled-components'

export const Grid = styled.main`
  background: #F5F5F5;
  display: grid;
  grid-template-rows: repeat(2, 5rem) 1fr;
  height: 100%;
  min-height: 100vh;
`

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 1.5rem;
`
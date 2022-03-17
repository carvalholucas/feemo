import styled from 'styled-components'

import Image from 'next/image'

export const FormItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

export const FormWrapper = styled.form`
  height: 100%;
  margin-top: 2rem; 
  
  > h1 {
    color: #2A2A2A;
    font-size: 2.2rem;
    margin-top: 4rem;
  }

  > p {
    color: #606060;
    font-size: 1.6rem;
    font-weight: 300;
    margin-bottom: 6rem;
  }

  > footer {
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    padding: 2rem;
    position: absolute;
    width: 100%;
  }
`
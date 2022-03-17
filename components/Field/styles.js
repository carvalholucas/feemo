import styled from 'styled-components'

export const FieldtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  width: 100%;

  &:nth-child(2) {
    margin-top: 4rem;
  }
`

export const Input = styled.input`
  background: #F5F5F5;
  border: 1px solid #E6E6E6;
  border-radius: 5px;
  color: #292C30;
  font-size: 1.4rem;
  height: 4.5rem;
  line-height: 50px;
  outline: none;
  padding: 0 20px;
  transition: all .3s;

  &::placeholder {
    opacity: 50%;
  }

  &:disabled {
    background: #efefef;
    border: 1px solid #dadada;
  }

  &:hover,
  &:focus {
    border-color: #7a47f2;
  }

  &:active {
    background: rgba(122, 71, 242, .1);
    border-color: #7a47f2;
  }
`

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`
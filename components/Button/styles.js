import styled, { css } from 'styled-components'

const wrapperModifiers = {
  primary: () => css`
    background: #362076;
  `,
  secondary: () => css`
    background: #7a47f2;
  `,
  filled: () => css``,
  text: (color) => css`
    background: transparent;
    color: ${color === 'primary' ? '#362076' : '#7a47f2'};
  `,
  full: () => css`
    width: 100%;
  `
}

export const Container = styled.button`
  ${({ size, color, variant }) => css`
    border: none;
    border-radius: 5px;
    color: #FFF;
    font-size: 1.1rem;
    padding: 1.2rem 1rem;

    &:disabled {
      opacity: .5;
    }

    ${!!size && wrapperModifiers[size]}
    ${!!color && wrapperModifiers[color]}
    ${!!variant && wrapperModifiers[variant](color)}
  `}
`
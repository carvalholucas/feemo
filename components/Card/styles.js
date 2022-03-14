import styled, { css } from 'styled-components'

const wrapperModifiers = {
  free: () => css`
    
  `,
  premium: () => css`
    .header > span {
      margin-left: calc(70px + 1rem);
    }

    .ticket-title {
      margin-top: 2rem;
    }
  `,
  pro: () => css` `,
}

export const Container = styled.div`
  ${({ type, color, textColor }) => css`
    background: #FFF;
    border-radius: 15px;
    margin-bottom: 1rem;

    &:nth-child(2) {
      margin-top: 1rem;
    }

    .ticket-title {
      color: ${textColor ? textColor : '#000000'};
      font-size: 1.2rem;
      margin: 0;
    }

    .ticket-description {
      color: ${textColor ? textColor : '#686868'};
      font-size: .9rem;
      font-weight: 300;
      line-height: 1.5rem;
      margin-bottom: 0;
    }

    ${!!type && wrapperModifiers[type](color)}
  `}
`

export const Header = styled.header`
  ${({ color }) => css`
    align-items: baseline;
    background: ${color ? `rgba(${color}, .2)` : '#FFF'};
    border: 1px solid ${color ? `rgba(${color}, .2)` : '#E6E6E6'};
    border-bottom: none;
    border-radius: 15px 15px 0 0;
    display: flex;
    gap: 1rem;
    padding: 1rem;

    > span {
      color: ${color ? `rgb(${color})` : '#494949'};
      font-size: .9rem;
      font-weight: 500;
    }
  `}
`

export const Content = styled.section`
  padding: 1rem;
  border: 1px solid #E6E6E6;
  border-radius: 0 0 15px 15px;
`

export const Logo =  styled.div`
  align-items: center;
  background: #f72f2f;
  border-radius: 10px;
  display: flex;
  height: 70px;
  width: 70px;
  position: absolute;
`
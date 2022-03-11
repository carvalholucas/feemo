import styled, { css } from 'styled-components'

const wrapperModifiers = {
  free: () => css`
    
  `,
  premium: (color) => css`
    background: ${color};
  `,
  pro: () => css`
    padding: 0;
    
    .bg {
      background: #7a7a7a;
      border-radius: 10px 10px 0 0;
      height: 200px;
      position: relative;

      .logo {
        width: 100px;
        height: 100px;
        background: #000;
        border-radius: 50%;
        border: 3px solid #FFF;
        position: absolute;
        bottom: 0;
        transform: translate(15px, 50px);
      }
    }

    .ticket-wrapper-desc { padding: 1rem }
    .ticket-title {
      margin-top: 3rem;
    }
  `,
}

export const Container = styled.div`
  ${({ type, color, textColor }) => css`
    background: #FFF;
    border: 1px solid #D5D5D5;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;

    &:nth-child(2) {
      margin-top: 1rem;
    }

    header {
      align-items: flex-start;
      display: flex;
      justify-content: space-between;
    }

    .ticket-title {
      color: ${textColor ? textColor : '#383838'};
      font-size: 1.2rem;
      margin-bottom: 0;
    }

    .ticket-description {
      color: ${textColor ? textColor : '#686868'};
      font-size: .8rem;
      font-weight: 300;
      line-height: 1.2rem;
      margin-bottom: 0;
    }

    ${!!type && wrapperModifiers[type](color)}
  `}
`

export const CompanyName = styled.p`
  background: #d8d5e2;
  color: #3B21A3;
  margin: 0;
  display: inline;
  font-weight: 500;
  padding: 0.3rem;
  font-size: .8rem;
  border-radius: 5px;
`

export const Logo =  styled.div`
  align-items: center;
  background: #FFF;
  border-radius: 10px;
  display: flex;
  padding: .5rem;
  height: 90px;
  width: 90px;
`
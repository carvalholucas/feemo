import styled, { css } from 'styled-components'

const wrapperModifiers = {
  top: () => css`
    align-items: flex-start;
  `,
  bottom: () => css`
    align-items: flex-end;
  `
}

export const Backdrop = styled.div`
  ${({ position }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .8);
    display: flex;
    justify-content: center;

    ${!!position && wrapperModifiers[position]}
  `}
`

export const Container = styled.div`
  ${({ height }) => css`
    background: #FFF;
    height: ${height ? height : '80%'};
    width: 100%;
  `}
`

export const Header = styled.header`
  ${({ colorHeader }) => css`
    align-items: center;
    background: ${!!colorHeader ? colorHeader : '#fff'};
    display: flex;
    height: 70px;
    justify-content: center;
    padding: 1.2rem;

    .back-icon {
      position: absolute;
      left: 1rem;
    }

    .close-icon {
      position: absolute;
      right: 1rem;
    }
  `}
`

export const Title = styled.h2`
  ${({ colorTitle }) => css`
    color: ${colorTitle};
    font-size: 1.1rem;
    font-weight: 400;
    margin: 0;
  `}
`

export const Content = styled.div`
  height: calc(100% - 70px);
`
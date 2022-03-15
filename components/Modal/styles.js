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
    z-index: 999;

    ${!!position && wrapperModifiers[position]}
  `}
`

export const Container = styled.div`
  ${({ height }) => css`
    background: #FFF;
    height: ${height};
    overflow: scroll;
    width: 100%;
  `}
`

export const Header = styled.header`
  ${({ colorHeader }) => css`
    align-items: center;
    background: ${`rgba(${colorHeader}, .2)`};
    border-bottom: 5px solid #F5F5F5;
    display: flex;
    font-weight: 400;
    height: 7rem;
    justify-content: center;
    padding: 1.5rem;
    position: relative;

    .back-icon {
      position: absolute;
      left: 1.5rem;
    }

    .close-icon {
      position: absolute;
      right: 1.5rem;
    }
  `}
`

export const Title = styled.h2`
  ${({ colorTitle }) => css`
    color: ${`rgb(${colorTitle})`};
    font-size: 1.4rem;
    font-weight: 400;
    margin: 0;
  `}
`

export const Content = styled.div`
  height: calc(100% - 7rem);
`
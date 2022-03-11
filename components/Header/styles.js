import styled from 'styled-components'

export const Container = styled.header`
  background: #362076;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 99;

  section {
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
  }

  .hamburguer-icon {
    margin-right: 1rem;
  }
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const ListItem = styled.li`
  border-bottom: 1px solid #cacaca;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 1.5rem;

  &:hover {
    background: rgba(122, 71, 242, .2);
    color: #7a47f2;
    cursor: pointer;
  }

  &.active {
    background: rgba(122, 71, 242, .2);
    color: #7a47f2;
    font-weight: 500;
  }
`

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow-y: scroll;
`

export const ButtonWrapper = styled.div`
  border-top: 1px solid #cacaca;
  bottom: 0;
  background: #FFF;
  padding: 1.5rem;
  position: sticky;
`
import styled from 'styled-components'


export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const ListItem = styled.li`
  align-items: center;
  border-bottom: 1px solid #E6E6E6;
  color: #494949;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 300;
  padding: 1.5rem;

  &:hover {
    background: rgba(122, 71, 242, .2);
    color: #7a47f2;
    font-weight: 500;
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
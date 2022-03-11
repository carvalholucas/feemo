import { Grid, Wrapper } from './styles'

const Layout = ({ children }) => {
  return (
    <Grid>
      {children}
    </Grid>
  )
}

export default Layout

export const Container = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
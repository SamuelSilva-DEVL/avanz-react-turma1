import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <h1>Footer</h1>
    </LayoutContainer>
  )
}

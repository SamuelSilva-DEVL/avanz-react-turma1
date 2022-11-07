import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <LayoutContainer>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </LayoutContainer>
  )
}

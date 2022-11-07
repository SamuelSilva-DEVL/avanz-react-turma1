import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Institucional } from './pages/Institucional'
import { Planos } from './pages/Planos'
import { RedeAtendimento } from './pages/RedeAtendimento'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/rede-de-atendimento" element={<RedeAtendimento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

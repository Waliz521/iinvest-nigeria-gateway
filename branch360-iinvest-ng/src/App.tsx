import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
import { HomePage } from './pages/HomePage'
import { InvestPage } from './pages/InvestPage'
import { RaiseCapitalPage } from './pages/RaiseCapitalPage'
import { ROUTES } from './constants/site'

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.invest} element={<InvestPage />} />
          <Route path={ROUTES.raiseCapital} element={<RaiseCapitalPage />} />
          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

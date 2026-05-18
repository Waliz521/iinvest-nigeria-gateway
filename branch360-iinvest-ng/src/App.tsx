import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
import { HomePage } from './pages/HomePage'
import { InfoPlaceholderPage } from './pages/InfoPlaceholderPage'
import { ROUTES } from './constants/site'

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route
            path={ROUTES.invest}
            element={
              <InfoPlaceholderPage
                title="Invest"
                description="Information for investors interested in vetted Nigerian assets. Content from iInvest-pages.xlsx will be built in Milestone 2."
              />
            }
          />
          <Route
            path={ROUTES.raiseCapital}
            element={
              <InfoPlaceholderPage
                title="Raise capital"
                description="Information for businesses seeking funding through iInvest. Content from iInvest-pages.xlsx will be built in Milestone 2."
              />
            }
          />
          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

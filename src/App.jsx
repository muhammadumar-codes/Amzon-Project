// ===*pages*===
import CartPage from './pages/Cart/CartPage'
import HomePage from './pages/Home/HomePage'
import ProductCard from './pages/ProductCard/ProductCard'
import ProductCardDetail from './pages/ProductCardDetail/ProductCardDetail'
import LoginPage from './pages/Login/Loginpage'
import RegistrationPage from './pages/Registration/RegistrationPage'

// ===*Routes,Route*===
import { Route, Routes } from 'react-router-dom'

// ===*Layout*===
import Layout from './layout/Layout'

// ===*Context*===
import DataContextProvider from './context/DataContext/DataContext'

// ===*App*===
export default function App() {
  return (
    <>
      {/* // ===*DataContextProvider*=== */}
      <DataContextProvider>

        {/* ===*Routes*=== */}

        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/ProductCard" element={<ProductCard />} />
            <Route path="ProductCardDetail" element={<ProductCardDetail />} />
          </Route>
          
          {/* // ===*Login and Registration Page*=== */}
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
        </Routes>
      </DataContextProvider>
    </>
  )
}

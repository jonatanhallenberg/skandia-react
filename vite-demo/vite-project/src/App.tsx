import { LoginFormHook } from './components/LoginFormHook';
import { CompaniesList } from './components/CompaniesList';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { Button } from './components/Button';
import { Menu } from './components/Menu';
import UserContextProvider from './context/UserContextProvider';
import { useUserContext } from './context/UserContext';

const AppRoutes = () => {

  const { userState } = useUserContext();

  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginFormHook />} />
    <Route path="/companies" element={userState.isLoggedIn ? <CompaniesList /> : <Navigate to="/login" />} />
    <Route path="/companies/:companyId" element={<Company />} />
  </Routes>
}

const App = () => {

  return (
    <BrowserRouter>
      <UserContextProvider>
        <Button label="Min knapp" variant='success'></Button>
        <Menu />
        <AppRoutes />
      </UserContextProvider>
    </BrowserRouter>
  );
}
export default App

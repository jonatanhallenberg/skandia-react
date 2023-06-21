import { useState } from 'react';
import Page from './Page';
import Filter from './Filter';
import { LoginForm } from './components/LoginForm';
import { LoginFormHook } from './components/LoginFormHook';
import { Provider } from 'react-redux'
import { store } from './store/store';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { logOut } from './store/loginSlice';
import { CompaniesList } from './components/CompaniesList';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { Home } from './pages/Home';
import { Company } from './pages/Company';

const App = () => {

  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState(10);
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/login">Logga in</Link>
        </li>
        <li>
          <Link to="/companies">Företag</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginFormHook />} />
        <Route path="/companies" element={ isLoggedIn ? <CompaniesList /> : <Navigate to="/login" />} />
        <Route path="/companies/:companyId" element={<Company />} />
      </Routes>
      {/* <Page title="Page 1" limit={limit}>
        Hej <b>Vite</b>
      </Page>

      <Filter onClick={(limit) => setLimit(limit)} /> */}

      {/* <LoginForm /> */}

    </BrowserRouter>
  );
}
export default App

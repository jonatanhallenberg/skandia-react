import { useState } from 'react';
import { LoginFormHook } from './components/LoginFormHook';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { CompaniesList } from './components/CompaniesList';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { Button } from './components/Button';
import styles from './components/Button/button.module.css';

const App = () => {

  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState(10);
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  return (
    <BrowserRouter>
      <Button label="Min knapp" variant='success'></Button>
      <ul className={styles.button}>
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

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

const App = () => {

  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState(10);
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  return (
    <>
      {/* <Page title="Page 1" limit={limit}>
        Hej <b>Vite</b>
      </Page>

      <Filter onClick={(limit) => setLimit(limit)} /> */}

      {/* <LoginForm /> */}
      {isLoggedIn ? <><CompaniesList /><button type="button" onClick={() => dispatch(logOut())}>Logga ut</button></> : <LoginFormHook />}

    </>
  );
}
export default App

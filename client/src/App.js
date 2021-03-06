import React from 'react';
import { useRoutes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import {Loader} from './components/Loader';
import 'materialize-css';

function App() {
  const { token, userId, login, logout, ready } = useAuth();
  const isAuthenticated = !!token;
  const router = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader/>
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        {isAuthenticated && <Navbar/>}
        <div className="container">
          {router}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

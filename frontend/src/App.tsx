import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import React from "react";
import { store } from './store';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './route/route';
import { Admin } from './pages';
import Navigation from './route/Navigation';

function App() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column'} } className='main'>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
          <Navigation/>
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route path={path} element={<Component />} key={path} />
            ))}
            <Route path="/*" element={<Admin />} />
          </Routes>
          </div>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

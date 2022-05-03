import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import React from "react";
import { store } from './store';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './route/route';
import { Admin } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route path={path} element={<Component />} key={path} />
          ))}
          <Route path="/*" element={<Admin />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

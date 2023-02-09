import React from 'react';
import MainPage from "./components/main/MainPage";
import CatalogPage from "./components/catalog/catalogPage";
import "./index.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CatalogContainer from "./components/catalog/catalogContainer";
import WarePage from "./components/ware/warePage";
import {clothes} from "./data/clothes";
import BasketPage from "./components/basket/basketPage";
import {ReactNotifications} from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

type Route = {
    path: string,
    component: JSX.Element
}

function App() {
    const routes = clothes.map((value, index)=>{
            return {
                path: '/catalog/' + value.name,
                component: <WarePage clothe={value}/>
            }
        });
    const routeComponents = routes.map((value, key) => <Route path={value.path} element={value.component} key={key} />);
  return (
      <>
          <ReactNotifications />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<MainPage/>}/>
                  <Route path={'/catalog'} element={<CatalogPage/>}/>
                  <Route path={'/basket'} element={<BasketPage/>}/>
                  {routeComponents}
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;

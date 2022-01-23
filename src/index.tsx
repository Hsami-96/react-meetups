import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { FavouritesContextProvider } from './store/favourites-context';

ReactDOM.render(
  <FavouritesContextProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </FavouritesContextProvider>,
  document.getElementById('root')
);

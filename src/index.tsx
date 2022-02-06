import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { userSlice } from './features/users';

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <App />
  </React.StrictMode>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


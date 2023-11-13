import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import "normalize.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'

import {krRouter} from "src/root/router";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={krRouter}/>
  </React.StrictMode>
)

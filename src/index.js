import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Error } from './components/Error';
import Body from './components/body';
import RestaurantDetails from './components/RestaurantDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
const approuter=createBrowserRouter([
  {
  path:'/',
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {
      path:'/',
      element:<Body/>,
    },
    {
      path:"/about",
      element: <About/>,
    },
    {
      path:"/contact",
      element:<Contact/>,
    },
    {
      path:'/restaurant/:resId',
      element:<RestaurantDetails/>
    },
  ],
},


]);

root.render(<RouterProvider router={approuter}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

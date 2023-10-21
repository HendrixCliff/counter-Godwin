import React from 'react'
import { createRoot } from 'react-dom/client';
import ErrorPage from "./routes/404Page";
import './index.css'
import {
  createBrowserRouter,
   RouterProvider,
} from 'react-router-dom'
import Root from './routes/root'
import Counter from './Counter'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const objectRouter = createBrowserRouter([
  { 
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: 'counter',
    element: <Counter />
  }
])

root.render(
  <React.StrictMode>
      <RouterProvider router={objectRouter}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "Home",
//     element: <Home/>,
//   },
//   {
//     path: "Events",
//     element: <Events/>,
//   },
//   {
//     path: "Team",
//     element: <Team/>,
//   },
//   {
//     path: "Gallery",
//     element: <Gallery/>,
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      {/* <RouterProvider router={router} /> */}
      <App/>
    </NextUIProvider>
  </React.StrictMode>,
)

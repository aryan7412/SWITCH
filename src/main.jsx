import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import Homepage from './HomePage/Homepage.jsx'
import Gallerypage from './GallerySection/Gallerypage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "Home",
    element: <Homepage/>,
  },
  // {
  //   path: "Events",
  //   element: <Events/>,
  // },
  // {
  //   path: "Team",
  //   element: <Team/>,
  // },
  {
    path: "Gallery",
    element: <Gallerypage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)

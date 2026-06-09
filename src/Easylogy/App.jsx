import React from 'react'
import "./App.css"
// TODO: createBrowserRouter, RouterProvider from react-router-dom



import HospitalityPage from './Pages/HospitalityPage/HospitalityPage'
import Layout from './Components/Layout/Layout'
import Error from './Components/Error/Error'








const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [

      {
        path: "*",
        element: <Error />

      },

      {
        path: "",
        element: <HospitalityPage />,
      },


      
    ]


  }
],

  {
    future: {

      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  }
)


export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

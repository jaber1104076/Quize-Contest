import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import Home from './components/Home'
import Root from './components/Root';
import ErrorPage from './components/ErrorPage'
import { Blog } from './components/Blog';
import Home from './components/Home';
import QuizeExam from './components/QuizeExam';
import Statistics from './components/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/',
          loader: async () => { return fetch(' https://openapi.programming-hero.com/api/quiz') },
          element: <Home></Home>,
        },
        {
          path: 'quize/:quizeId',
          loader: async ({ params }) => {
            // console.log(params)
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizeId}`)
          },
          element: <QuizeExam></QuizeExam>
        },
        {
          path: '/state',
          element: <Statistics></Statistics>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App

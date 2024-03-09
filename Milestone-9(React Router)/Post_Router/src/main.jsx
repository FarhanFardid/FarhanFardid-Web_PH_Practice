import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Posts from './components/Posts/Posts.jsx';
import Post from './components/Post/Post.jsx';
import App from './App.jsx';
import Error from './components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<App></App>,
    children:[
      {
        path:'home',
        element:<Home></Home>
      },
  {
    path:'posts',
    element:<Posts></Posts>,
    loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
  },
  {
    path:'posts/:postId',
    element:<Post></Post>,
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

  },
  {
    path: "*",
    element: <Error></Error>
  }
]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

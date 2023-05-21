
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Header></Header>

      <h4 className='p-3 fw-bolder'>MongoDB User Interaction</h4>
      <Outlet></Outlet>
      
 
    </>
  )
}

export default App

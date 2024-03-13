
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <>
     
      <h1 className='bg-success p-3 rounded-2 text-white'>React Auth Context Master</h1>
      <Header></Header>
      <Outlet></Outlet>
     
    </>
  )
}

export default App

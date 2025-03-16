
// import './App.css'
import {HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from "./assets/Components/DashBoard"
import { NavbarProvider } from "./assets/Components/NavbarContext"
import Login from './assets/Components/Login';
import SignInPage from './assets/Components/SignInPage';

function App() {


  return (
    <>
    <BrowserRouter>
        <NavbarProvider>
       {/* <DashBoard /> */}

       <Routes>
          <Route index element={<SignInPage />} />
          <Route path="/dashboard" Component={DashBoard } />
          <Route path="/Login" Component={Login } />
          
        </Routes>
       </NavbarProvider>
       </BrowserRouter>
     
    </>
  )
}

export default App

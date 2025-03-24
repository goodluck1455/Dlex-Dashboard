
// import './App.css'
import {HashRouter as BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import DashBoard from "./assets/Components/DashBoard"
import { NavbarProvider } from "./assets/Components/NavbarContext"
import Login from './assets/Components/Login';
import SignInPage from './assets/Components/SignInPage';
import NotFound from './assets/Components/NotFound';
import { useEffect } from 'react';

function App() {


  return (
    <>
    <BrowserRouter>
      <MainContent />
       </BrowserRouter>
     
    </>
  )
}

export default App;



function MainContent() {
  const location = useLocation();

  useEffect(() => {
    const body = document.body;

    if (location.pathname === "/Login") {
      body.classList.add("login-bg"); 
    } else {
      body.classList.remove("login-bg"); 
    }

    return () => {
      body.classList.remove("login-bg"); 
    };
  }, [location.pathname]); 


 return (
   <div>
 
       <NavbarProvider>
      {/* <DashBoard /> */}

      <Routes>
         <Route index element={<SignInPage />} />
         <Route path="/dashboard" Component={DashBoard } />
         <Route path="/Login" Component={Login } />
         <Route path="*" Component={ NotFound } />
       </Routes>
      </NavbarProvider>
    
    
   </div>
 )
}




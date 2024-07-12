import TemplateGeneration from './Pages/TemplateGeneration';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ProfilePage from './Pages/ProfilePage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';

const clientId = '359450186285-snvq9iqkcmddvve4i8eb74qokpueud0o.apps.googleusercontent.com';


function App() {
// const navigate=useNavigate();
// useEffect(() => {
//   navigate("/signup");
// }, []);
  const [loginCredentials, setLoginCredentials] = useState({
    id: 0,
    name: "",
    email: "",
    password: ""
  });

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Routes>
        <Route path="/signup" element={<Signup loginCredentials={loginCredentials} setLoginCredentials={setLoginCredentials}/>} />
        <Route path="/login" element={<Login loginCredentials={loginCredentials} setLoginCredentials={setLoginCredentials}/>} />
        <Route path="/profile" element={<ProfilePage loginCredentials={loginCredentials} setLoginCredentials={setLoginCredentials}/>} />
        <Route path="/template-generation" element={<TemplateGeneration loginCredentials={loginCredentials} setLoginCredentials={setLoginCredentials}/>} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;

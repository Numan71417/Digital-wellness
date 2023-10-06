import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Login from './pages/Login'
import Signup from "./pages/Signup";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProfilePage from './pages/Profile';
import Community from './pages/Community';
import Report from './pages/Report';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
import Consult from './pages/Consult';
import PageNotFound from './pages/PageNotFound';

function App() {

  const { user } = useAuthContext()
  // const admin = user.username || 0;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>

            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />

            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />

            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />

            <Route 
              path="/profile" 
              element={user ? <ProfilePage/> : <Navigate to="/login" />} 
            />
            <Route 
              path="/community" 
              element={user ? <Community/> : <Navigate to="/login" />} 
            />
            <Route 
              path="/report" 
              element={user ? <Report/> : <Navigate to="/login" />} 
            />
            
            <Route 
              path="/admin" 
              element={
                // admin==='numan' ? 
               user ? <AdminDashboard/> : <Navigate to="/login" />} 
            />

            <Route 
              path="/consult" 
              element={
                
               user ? <Consult/> : <Navigate to="/login" />} 
            />

            <Route path='*' element={<PageNotFound/>}/>

          </Routes>
        </div>
        {user &&
          <Footer/>
        }
      </BrowserRouter>

    </div>
  );
}

export default App;

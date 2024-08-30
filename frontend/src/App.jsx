import Login from './pages/login/Login'
import "./App.css";
import Signup from './pages/signup/Signup';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter ,Route, Routes,Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import Home from './pages/home/Home';

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
    <div className='p-4 h-screen flex items-center justify-center'>
    <BrowserRouter >
    <Routes>
				 <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} /> 
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
			</Routes>
      </BrowserRouter>
      <Toaster />
    </div>
    </>
  )
}

export default App

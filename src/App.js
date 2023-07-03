
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'

function App() {
  return (
      <Router>
        <AuthProvider>
        <Header/>
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route element={<PrivateRoutes/>}>
              <Route path='/' element={<HomePage/>}/>
            <Route/>
          </Route>
        </Routes>
        </AuthProvider>
      </Router>
  );
}

export default App;

import './App.css';
import {  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import Home from './pages';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Purchase from './pages/Purchase';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

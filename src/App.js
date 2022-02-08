import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';



function App() {
  return (
    <div className="App">
      <AuthProvider>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />}>
      </Route>
      <Route path="/home" element={<Home />}>
            </Route>
            <Route exact path="/appointment" element={<Appointment />}>
      </Route>
      <Route exact path="/login" element={<Login />}>
      </Route>
      <Route exact path="/register" element={<Register />}>
      </Route>
      </Routes>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;

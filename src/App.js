import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './Pages/Dashboard/Payment/Payment';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import BlogsDetail from './Pages/Blogs/BlogsDetail/BlogsDetail';
import MyPrescriptions from './Pages/MyPrescriptions/MyPrescriptions';
import BookedInfo from './Pages/BookedInfo/BookedInfo/BookedInfo';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/myPrescriptions">
              <MyPrescriptions></MyPrescriptions>
            </Route>
            <Route exact path="/blogDetails/:blogId">
              <BlogsDetail></BlogsDetail>
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/booked">
              <BookedInfo/>
            </Route>
            
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

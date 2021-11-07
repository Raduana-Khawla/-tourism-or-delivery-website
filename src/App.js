import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './pages/Header/Header';
import Tour from './pages/Tour/Tour';
import Blog from './pages/Blog/Blog';
import NotFound from './pages/NotFound/Notfound';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Services from './pages/Services/Services';
import PrivetRoute from './components/Shared/PrivateRoute/PrivateRoute';
import Login from './components/Shared/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Footer from './components/Shared/Footer/Footer';
 import AddVolunteer from "./Booking/Admin/AllVolunteers/AllVolunteers";
 import AdminDashboard from "./Booking/Admin/AdminDashboard/AdminDashboard";
import AddServices from './pages/AddServices/AddServices';
import MyOrders from './pages/MyOrders/MyOrders';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
    <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivetRoute path="/tour">
        <Tour></Tour>
        </PrivetRoute>
        <Route path="/services">
        <Services></Services>
        </Route>
        <PrivetRoute path="/bookService/:id">
         <ServiceDetail></ServiceDetail>
        </PrivetRoute>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <PrivetRoute path="/myOrders">
          <MyOrders></MyOrders>
        </PrivetRoute>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
       <Register></Register>
        </Route>
        <Route exact path="/addServices">
          <AddServices></AddServices>
          </Route>
          <Route exact path="/adminDashboard">
            <AdminDashboard></AdminDashboard>
          </Route>
          <Route exact path="/registerVolunteer">
            <AddVolunteer></AddVolunteer>
          </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
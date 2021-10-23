import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details/Details';
import Login from './Components/Login/Login/Login';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Footer from './Components/Home/Home/Footer/Footer';
import Experts from './Components/Home/Experts/Experts';
import About from './Components/Home/About/About';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/details/:id">
          <Details/>
            </PrivateRoute>
          <Route path="/about">
          <About/>
            </Route>
          <Route path="*">
            <NotFound/>
            </Route>
        </Switch>
        </Router>
      </AuthProvider>
      <Footer/>
    </div>
  );
}

export default App;

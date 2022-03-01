import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './component/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Resister from './pages/Resister/Resister';
import About from './pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path= '/home' component={Home}/>
        <Route exact path= '/login' component={Login}/>
        <Route exact path= '/resister' component={Resister}/>
        <Route exact path= '/about' component={About}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

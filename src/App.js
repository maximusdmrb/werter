import { AppForm, Navbar, Header } from './components';
import './index.scss';
import './fonts/gilroy/gilroy-medium.css';
import { Route, Switch } from 'react-router-dom';
import { Home, Services } from './Pages';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/services" component={Services}></Route>
            <Route path="/about" component={() => <div>О нас</div>}></Route>
            <Route exact path="/:page404?" component={() => <div>404</div>}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

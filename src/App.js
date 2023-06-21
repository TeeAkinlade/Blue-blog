import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import About from './About';
import BlogDestails from './BlogDestails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
    <div className="App">
         <Navbar /> 
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs/:id">
            <BlogDestails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router> 
  );
}

export default App;

import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import {MyProfile, SearchCourse} from './Pages'
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Switch>
          <Redirect from='/' to='/profile' exact/>
          <Route exact path="/profile"><MyProfile username='tanishabisht'/></Route>
          <Route path="/searchcourse"><SearchCourse username='tanishabisht'/></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App
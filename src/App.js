import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { MyProfile, SearchCourse, SignInUp, SignIn, SignUp, InfoForm, CourseForm, SearchComp } from './Pages'
import { InputModal } from './Components'
import './App.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://edpoint-1e713-default-rtdb.firebaseio.com/'



function App() {
  return (
    <HashRouter>
      <div className="app">
        <Switch>
          <Redirect from='/' to='/signup' exact/>
          <Route exact path="/login"><SignInUp/></Route>
          <Route exact path="/signin"><SignIn/></Route>
          <Route exact path="/signup"><SignUp/></Route>
          <Route exact path="/infoform"><InfoForm/></Route>
          <Route exact path='/courseform'><CourseForm/></Route>
          <Route exact path='/inputmodal'><InputModal/></Route>
          <Route exact path='/search'><SearchComp/></Route>
          <Route exact path="/profile"><MyProfile/></Route>
          <Route path="/searchcourse"><SearchCourse/></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { MyProfile, SearchCourse, SignInUp, SignIn, SignUp, InfoForm, AddCourseForm, ChatBox } from './Pages'
import './App.css'




function App() {
  
  return (
    <HashRouter>
      <div className="App">
        <Switch>
        
          <Redirect from='/' to='/signup' exact/>
          <Route exact path="/login"><SignInUp/></Route>
          <Route exact path="/signin"><SignIn/></Route>
          <Route exact path="/signup"><SignUp/></Route>
          <Route exact path="/infoform"><InfoForm/></Route>

          <Route exact path="/profile"><MyProfile /></Route>
          <Route path="/searchcourse"><SearchCourse /></Route>
          <Route exact path='/courseform'><AddCourseForm/></Route>
          <Route path="/chatbox"><ChatBox/></Route>

        </Switch>
      </div>
    </HashRouter>
  )
}

export default App
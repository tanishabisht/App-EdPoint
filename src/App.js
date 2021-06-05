import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { MyProfile, SearchCourse, SignInUp, SignIn, SignUp, InfoForm, CourseForm, ChatBox } from './Pages'
import { InputModal } from './Components'
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
          <Route exact path='/inputmodal'><InputModal/></Route>
          <Route exact path='/courseform'><CourseForm/></Route>
          <Route path="/chatbox"><ChatBox/></Route>

        </Switch>
      </div>
    </HashRouter>
  )
}

export default App
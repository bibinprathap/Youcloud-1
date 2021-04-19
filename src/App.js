//import Layout  from './Components/layout/layout'
import React from 'react'
import './App.css';
import Form from './Components/Signin_1/Form'
import Form2 from './Components/Signin_2/Form2'
import Form3 from './Components/Signin_3/Form3'
import Signup from './Components/SignUp/signup'
import Layout from './Components/layout/layout'
import Password from './Components/Password_recovery/pwd'
import { Switch, Route} from 'react-router-dom'




function App() {
  return (
      <>
        {/* <Form/> */}
        {/* <Switch>
          <Route path='/' exact><Form></Form></Route>
          <Route path="/forgotpassword" exact component={Password} />
          <Route path="/SignUp" exact component={Signup}/>
          <Route path="/SignIn" exact component={Form}/> */}
          
        
          {/* <Form2/> */}
          {/* <Form3/> */}
          <Signup/>
          {/* <Layout/> */}
          {/* <Password /> */}
        {/* </Switch> */}
    </>
  
  );
}

export default App;

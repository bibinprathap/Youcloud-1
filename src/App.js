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
//import password from './Components/Password_recovery/pwd';



function App() {
  return (
      <>
        {/* <Form/> */}
        <Switch>
          <Route path='/' exact><Form></Form></Route>
          <Route path="/forgotpassword" component={Password} />
          <Route path="/SignUp" component={Signup}/>
          
        
          {/* <Form2/> */}
          {/* <Form3/> */}
          {/* <Signup/> */}
          {/* <Layout/> */}
          {/* <Password /> */}
        </Switch>
    </>
  
  );
}

export default App;

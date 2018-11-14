import React from 'react';
import Layout from './High Order Components/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/signIn';


const Routes = (props) => {
  return(
    <Layout>
      <Switch>
          <Route exact component={SignIn} path='/sign_in' />
          <Route exact component={Home} path='/' />
      </Switch>
    </Layout>
  )
}


export default Routes;

import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from "react";
import {getTasks} from "./Redux/actions";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from "./components/About";

import * as ROUTES from './constans/Routes'
import Home from "./components/Home";

function App(props) {

  useEffect(() => {
    props.getTasks()
  }, [])


  return (
    <Router>
      <div className="container">
        <Route path={ROUTES.HOME} exact>
          <Home/>
        </Route>

        <Route path={ROUTES.ABOUT}>
          <About/>
        </Route>
      </div>
    </Router>
  );
}


const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


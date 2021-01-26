import React from 'react';
import HeaderPart from "./components/HeaderPart";
import Tasks from "./components/Tasks";
import { connect } from 'react-redux';
import AddTask from "./components/AddTask";
import {useEffect} from "react";
import {getTasks} from "./Redux/actions";

function App(props) {

  useEffect(() => {
    props.getTasks()
  }, [])

  return (
    <div className="container">

      <HeaderPart/>
      <AddTask/>
      {props.tasks.length > 0 ? <Tasks /> : "Create new Task"}
    </div>
  );
}



const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


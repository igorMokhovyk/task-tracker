import React from 'react';
import HeaderPart from "./components/HeaderPart";
import Tasks from "./components/Tasks";
import { connect } from 'react-redux';
import AddTask from "./components/AddTask";


function App(props) {

  console.log(props.tasks)

  return (
    <div className="container">

      <HeaderPart/>
      <AddTask/>
      {props.tasks.length > 0 ? <Tasks tasks={props.tasks}/> : "Create new Task"}
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);


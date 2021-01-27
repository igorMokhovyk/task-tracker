import React, {useState} from 'react';
import HeaderPart from "./HeaderPart";
import Tasks from "./Tasks";
import {connect} from 'react-redux';
import AddTask from "./AddTask";
import {getTasks} from "../Redux/actions";
import Footer from "./Footer";


function Home(props) {


  const [addButton, setAddButton] = useState(false);


  return (
      <>
        <HeaderPart addButtonHandler={() => setAddButton(!addButton)} showAddOrClose={addButton}/>
        {addButton && <AddTask/>}
        {props.tasks.length > 0 ? <Tasks/> : "Create new Task"}
        <Footer/>
      </>

  );
}


const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


import {connect} from "react-redux";
import AddTaskForm from "../layouts/AddTaskLayout";


function AddTask() {
  return (
    <form className='add-form'>
       <AddTaskForm name='Task' placeholder='Add Task' className='form-control'/>

       <AddTaskForm name='Day & Time' placeholder='Add Day & Time' className='form-control'/>

       <AddTaskForm name='Set Reminder' type='checkbox' className='form-control form-control-check'/>

       <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);

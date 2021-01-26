import {connect} from "react-redux";
import {useState} from "react";
import {newTask} from "../Redux/actions";


function AddTask(props) {

  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const addNewTask = () => {
    const newTaskObj = {
      id: Math.floor(Math.random() * (300 - 2 + 1)) + 8,
      text: task,
      date: date,
      reminder: reminder
    }
    props.newTask(newTaskObj)
  }





  return (
    <form className='add-form'>

      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task'
               value={task}
               onChange={(event) => setTask(event.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time'
               value={date}
               onChange={(event) => setDate(event.target.value)}
        />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' value={reminder} onChange={() => setReminder(!reminder)}/>
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' onClick={addNewTask}/>
    </form>
  )
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  newTask: (task) => dispatch(newTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);

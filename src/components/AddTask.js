import {connect} from "react-redux";
import {useState} from "react";
import {newTask} from "../Redux/actions";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';



function AddTask(props) {

  const [task, setTask] = useState('');
  const [date1, setDate1] = useState(new Date('2020-08-18T21:11:54'));
  const [description, setDescription] = useState('');
  const [time, setTime] = useState(new Date('2014-08-18T21:11:54'));
  const [reminder, setReminder] = useState(false);

  const date2 = new Date(date1).toLocaleString();

  console.log(time)

  const addNewTask = () => {
    const newTaskObj = {
      id: Math.floor(Math.random() * (300 - 2 + 1)) + 8,
      text: task,
      description: description,
      date: date2,
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
        <label>Description</label>
        <input type='text' placeholder='Add Description'
               value={description}
              onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">

          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={date1}
            onChange={(date) => setDate1(date)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            // value={selectedDate}
            onChange={(time) => setTime(time)}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>

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

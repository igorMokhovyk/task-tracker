import PropTypes from 'prop-types';
import {FaTimes} from "react-icons/fa";
import {connect} from "react-redux";


function Task({task, deleteTask, toggleReminder}) {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => toggleReminder(task.id)}>

      <h3>
        {task.text}
        <FaTimes color='red' cursor='pointer' onClick={() => deleteTask(task.id)}/>
      </h3>
      <p>
        {task.day}
      </p>
    </div>
  )
};


Task.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func,
  toggleReminder: PropTypes.func
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (id) => dispatch({type: "DELETE_TASK", payload: id}),
  toggleReminder: (id) => dispatch({type: "TOGGLE_TASK", payload: id})
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);

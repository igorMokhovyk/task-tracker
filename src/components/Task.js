import PropTypes from 'prop-types';
import {FaTimes} from "react-icons/fa";
import {connect} from "react-redux";
import {deleteTask, toggleTaskReminder} from "../Redux/actions";




function Task({task, deleteTask, toggleReminder}) {

  console.log(task.id)

const deleteHandler = () => {
    deleteTask(task.id)
}

  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => toggleReminder(task.id, task.reminder)}>

      <h3>
        {task.text}
        <FaTimes color='red' cursor='pointer' onClick={deleteHandler}/>

      </h3>
      <h4>
        {task.description}
      </h4>
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
  deleteTask: (id) => dispatch(deleteTask(id)),
  toggleReminder: (id, reminder) => dispatch(toggleTaskReminder(id, reminder))
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);

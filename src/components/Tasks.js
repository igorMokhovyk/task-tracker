import PropTypes from 'prop-types';
import Task from "./Task";


export default function Tasks({tasks}) {

  return (
    <>
      {tasks.map(el => (
        <Task key={el.id} task={el}/>
      ))}
    </>
  );
};


Tasks.propTypes = {
  tasks: PropTypes.array
}

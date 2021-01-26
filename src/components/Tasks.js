import PropTypes from 'prop-types';
import Task from "./Task";
import {connect} from "react-redux";



function Tasks(props) {

  return (
    <>
      {props.tasks.map(el => (
        <Task key={el.id} task={el}/>
      ))}
    </>
  );
};


Tasks.propTypes = {
  tasks: PropTypes.array
}


const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);

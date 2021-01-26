import axios from "axios";


export const getTasks = () => {
  return (dispatch) => {
    axios.get(`http://localhost:5000/tasks`)
      .then(res => {
        dispatch({
          type: 'GET_TASKS',
          payload: res.data
        })
      })
      .catch(err => console.log(err, "Error"))
  }
}


export const newTask = (task) => {
  return (dispatch) => {
    axios.post(`http://localhost:5000/tasks`,
      {id: task.id, text: task.text, day: task.date, reminder: task.reminder})
      .then(res => {
        dispatch(getTasks())
      })
      .catch(err => console.log(err))
  }
}


export const deleteTask = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(()=> {
        dispatch(getTasks())
      })
      .catch(err => console.log(err))
  }
}

export const toggleTaskReminder = (id, reminder) => {
  return (dispatch) => {
    axios.patch(`http://localhost:5000/tasks/${id}`, {reminder: !reminder})
      .then(()=> {

        dispatch(getTasks())
      })
      .catch(err => console.log(err))
  }
}

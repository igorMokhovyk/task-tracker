const initialState = {
  tasks: [
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ]
};

const tasks = (state = initialState, action) => {
  switch (action.type) {

    case 'DELETE_TASK':
      const newTasks = state.tasks.filter(el => el.id !== action.payload)
      return {
        ...state,
        tasks: newTasks
      };

    case 'TOGGLE_TASK':
      const taskEdit = state.tasks.map(el => el.id === action.payload ? {...el, reminder: !el.reminder } : el)
      return {
        ...state,
        tasks: taskEdit
      };


    default:
      return state;


  }
};

export default tasks;

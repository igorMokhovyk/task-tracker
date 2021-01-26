const initialState = {
  tasks: [

  ]
};



const tasks = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_TASKS' :
      return {
        ...state,
        tasks: action.payload
      }


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

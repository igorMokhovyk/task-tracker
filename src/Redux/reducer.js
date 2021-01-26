const initialState = {
  tasks: [

  ]
};

console.log(initialState)


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

    case 'NEW_TASK':
      return {
        ...state,
        tasks: [...state.tasks, {id: action.payload.id, text: action.payload.text, day: action.payload.date, reminder: action.payload.reminder}]
      };

    case 'DELETE_TASK':
      const newTasks = state.tasks.filter(el => el.id !== action.payload)
      return {
        ...state,
        tasks: newTasks
      };


    default:
      return state;


  }
};

export default tasks;

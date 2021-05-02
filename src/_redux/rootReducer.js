let userTask = localStorage.getItem("userTask");
export const initialState = {
  tasks: JSON.parse(userTask) ? JSON.parse(userTask) : [],
};

export const actionTypes = {
  CREATE_TASK: "CREATE_TASK",
  TASK_DROP: "TASK_DROP",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { ...action.item, id: action.id }],
      };

    case actionTypes.TASK_DROP:
      let temp = state.tasks.map((v) => {
        return v.id === action.item.id ? { ...v, status: action.status } : v;
      });
      console.log(temp);
      return {
        ...state,
        tasks: temp,
      };

    default:
      return state;
  }
};

export default rootReducer;

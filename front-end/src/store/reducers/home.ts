import initialState from "../state/home";

export interface reduxAction {
  type: string;
  [prop: string]: any;
}

export default function (state = initialState, action: reduxAction) {
  console.log(action);
  switch (action.type) {
    case "setUserInfo":
      return {
        ...state,
        userInfo: action.userInfo
      };
    default:
      return state;
  }
}

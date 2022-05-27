import initialState from "../state/global";

export interface reduxAction {
  type: string;
  [prop: string]: any;
}

export default function (state = initialState, action: reduxAction) {
  switch (action.type) {
    case "setWebPatter":
      return {
        webPattern: state.webPattern === "Dark" ? "Light" : "Dark"
      };
    default:
      return state;
  }
}

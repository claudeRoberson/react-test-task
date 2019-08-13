import { handleActions } from "redux-actions";
import appActions from "./app.actions";

export const appInitialState = {
  pending: false,
  chartData: [
    { value: 10, timestamp: 1565720120092 },
    { value: 20, timestamp: 1565720120092 }
  ]
};

const appReducer = handleActions(
  {
    [appActions.subscribeToSocket]: state => ({
      ...state,
      pending: true
    }),
    [appActions.setSocketValue]: (state, action) => ({
      ...state,
      chartData: [...state.chartData, action.payload]
    })
  },
  appInitialState
);

export default appReducer;

import { createAction } from "redux-actions";
// socket subscribing status
const subscribeToSocket = createAction("app--subscribeToSocket");
const subscribeToSocketSuccess = createAction("app--subscribeToSocketSuccess");
// save value
const setSocketValue = createAction(
  "app-setSocketValue",
  ({ value, timestamp }) => ({ value: Math.ceil(value), timestamp })
);

const appActions = {
  subscribeToSocket,
  subscribeToSocketSuccess,

  setSocketValue
};

export default appActions;

import io from "socket.io-client";
import appActions from "../redux/app/app.actions";
import store from "../redux/config";

const socket = io(process.env.REACT_APP_SOCKET);

socket.on("connect", async () => {
  try {
    console.info("socket connected");

    store.dispatch(appActions.subscribeToSocketSuccess());
  } catch (error) {
    console.warn({ error });
  }
});

socket.on("disconnect", () => {
  console.info("socket disconnected");
  store.dispatch(appActions.subscribeToSocket());
});

socket.on("data", data => {
  console.info("get socket data", { data });
  store.dispatch(appActions.setSocketValue(data));
});

export default socket;

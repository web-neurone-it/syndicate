import ReactDOM from "react-dom/server";
import { Provider } from "react-redux";
import App from "./App";
import { setupStore } from "./store/store";
export const render = () => {
  const store = setupStore();
  const html = ReactDOM.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const state = store.getState();
  return { html, state };
};

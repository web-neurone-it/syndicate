import App from "./App";
import { RootState, setupStore } from "./store/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { hydrateRoot } from "react-dom/client";

declare global {
  interface Window {
    __PRELOADED_STATE__?: object;
  }
}

const store = setupStore(window.__PRELOADED_STATE__ as RootState);
delete window.__PRELOADED_STATE__;

const domNode = document.getElementById("root") as HTMLElement;
const reactNode = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

hydrateRoot(domNode, reactNode());

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <Provider store={setupStore()}>
//     <App />
//   </Provider>
// );

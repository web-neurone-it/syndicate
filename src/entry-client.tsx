import App from "./App";
import { RootState, setupStore } from "./store/store";
import { Provider } from "react-redux";
// import { createRoot, hydrateRoot } from "react-dom/client";
import { hydrate } from "react-dom";

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
// const root = createRoot(domNode);
hydrate(reactNode(), domNode, () => null);

// hydrateRoot(domNode, reactNode());

import App from "./App";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";

// ReactDOM.hydrate(
//     <Provider store={setupStore()}>
//         <App />
//     </Provider>,
//     document.getElementById("root") as HTMLElement
// );
createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={setupStore()}>
        <App />
    </Provider>
);

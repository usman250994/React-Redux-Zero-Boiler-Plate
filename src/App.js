import React from "react";
import AppRouter from './routes/index';
import { Provider } from "redux-zero/react";
import store from "./store";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <AppRouter />
            </div>
        </Provider>
    );
}

export default App;

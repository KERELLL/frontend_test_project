import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk"
import reducers from "./components/root.reducer";
import FileUpload from "./components/FileUpload";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const setFile = (file : any | null) => {
    console.log(file)
}
root.render(
    <Provider store={store}>
        <FileUpload id = {"input1"} label = "Загрузить пасспорт" file={null} setFile={setFile}/>
    </Provider>
);

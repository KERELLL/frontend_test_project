import {combineReducers} from "redux";
import authReducer from "./streams/stream.reducer";
import {reducer as formReducer} from "redux-form";
import streamReducer from "./streams/streams.streamReducer";

const rootReducer = combineReducers({
        auth: authReducer,
        form: formReducer,
        stream: streamReducer
    }
)

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
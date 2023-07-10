import {AppActionsReturnTypes} from "./streams.actions";
import {SIGN_IN, SIGN_OUT} from "./streams.types";

const initialState = {
    isSignedIn: false,
    userId : -1,
}

export type AppInitialStateType = typeof initialState;


export default (state = initialState,
                action : AppActionsReturnTypes)
    : AppInitialStateType=> {
    switch (action.type){
        case SIGN_IN:
            return {...state, isSignedIn: action.payload.signedIn, userId: action.payload.userId};
        case SIGN_OUT:
            return {...state, isSignedIn: action.payload.signedIn, userId: action.payload.userId};
        default:
            return {...state}
    }
}


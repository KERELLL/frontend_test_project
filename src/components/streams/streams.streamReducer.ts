import {
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    SIGN_IN,
    SIGN_OUT
} from "./streams.types";
import {StreamActionsReturnTypes} from "./streams.streamAction";
import _ from "lodash";

type StreamState = {
    [key: number]: {
        id: number
        title: string,
        description: string
    }
}

const initialState : StreamState = {
        0 : {
            id: 0,
            title : '',
            description: ''
        }
}

export type AppInitialStateType = typeof initialState;


export default (state = initialState,
                action : StreamActionsReturnTypes) => {
    switch (action.type){
        case EDIT_STREAM:
            return {...state, [action.payload.id] : action.payload}
        case CREATE_STREAM:
            return {...state, [action.payload.id] : action.payload}
        case FETCH_STREAM:
            return {...state, [action.payload.id] : action.payload}
        case DELETE_STREAM:
            return _.omit(state, action.payload)
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')}
        default:
            return {...state}
    }
}




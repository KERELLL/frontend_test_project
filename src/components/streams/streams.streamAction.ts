import {Dispatch} from "redux";
import streams from "../../api/streams";
import {CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS} from "./streams.types";
import {signIn, SignInReturnType, SignOutReturnType} from "./streams.actions";
import {AppStateType} from "../root.reducer";
import {getUserId} from "./streams.selector";


interface IStreamResponse{
    id: number,
    title: string,
    description: string
}

export const createStream = (title: string,
                             description: string) : any => {
    return async function (dispatch : Dispatch, getState: () => AppStateType) {
        const userId = getState().auth.userId
        await streams.post<IStreamResponse>('/streams', {title, description, userId}).then(
            (res) => {
                dispatch({type: CREATE_STREAM, payload: res.data})
            }).catch((err) => {
            console.log(err)
        })
    }
}

export type CreateStreamReturnType = ReturnType<typeof createStream>;

export const fetchStreams = () : any => {
    return async function (dispatch : Dispatch) {
        await streams.get<IStreamResponse[]>('/streams').then(
            (res) => {
                dispatch({type: FETCH_STREAMS, payload: res.data})
            }).catch((err) => {
            console.log(err)
        })
    }
}

export type FetchStreamsReturnType = ReturnType<typeof fetchStreams>;

export const fetchStream = (id: number) : any => {
    return async function (dispatch : Dispatch) {
        await streams.get('/streams/' + id).then(
            (res) => {
                dispatch({type: FETCH_STREAM, payload: res.data})
            }).catch((err) => {
            console.log(err)
        })
    }
}

export type FetchStreamReturnType = ReturnType<typeof fetchStream>;

export const editStream = (id: number, title: string, description: string) : any => {
    return async function (dispatch : Dispatch) {
        await streams.put<IStreamResponse>('/streams/' + id, {title: title, description: description}).then(
            (res) => {
                dispatch({type: EDIT_STREAM, payload: res.data})
            }).catch((err) => {
            console.log(err)
        })
    }
}

export type EditStreamReturnType = ReturnType<typeof editStream>;

export const deleteStream = (id: number) : any => {
    return async function (dispatch : Dispatch) {
        await streams.delete('/streams/' + id, ).then(
            (res) => {
                dispatch({type: DELETE_STREAM, payload: id})
            }).catch((err) => {
            console.log(err)
        })
    }
}

export type DeleteStreamReturnType = ReturnType<typeof deleteStream>;

export type StreamActionsReturnTypes =
    CreateStreamReturnType |
    DeleteStreamReturnType |
    FetchStreamReturnType |
    FetchStreamsReturnType |
    EditStreamReturnType



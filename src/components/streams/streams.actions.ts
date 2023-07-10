import streams from '../../api/streams'
import {SIGN_OUT, SIGN_IN, CREATE_STREAM} from './streams.types'
import {ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk"
import {RootState} from "../../index";

export const signIn = (userId: number) => {
    return {
        type: SIGN_IN,
        payload: {
            signedIn : true,
            userId: userId
        }
    };
}
export type SignInReturnType = ReturnType<typeof signIn>;

export const signOut = () => {
    return {
        type: SIGN_OUT,
        payload: {
            signedIn : false,
            userId: -1
        }
    };
}

export type SignOutReturnType = ReturnType<typeof signIn>;

export type AppActionsReturnTypes =
    SignInReturnType |
    SignOutReturnType

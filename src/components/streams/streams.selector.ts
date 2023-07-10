import {AppStateType} from "../root.reducer";


export const getIsSignedIn = (state: AppStateType): boolean => {
    return state.auth.isSignedIn;
};

export const getUserId = (state: AppStateType): number => {
    return state.auth.userId;
};

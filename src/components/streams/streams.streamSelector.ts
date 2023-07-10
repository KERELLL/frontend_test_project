import {AppStateType} from "../root.reducer";


export const getList = (state: AppStateType) => {
    return Object.values(state.stream);
};

export const getUserId = (state: AppStateType, streamId: number) => {
    return Object.values(state.stream[streamId])
};
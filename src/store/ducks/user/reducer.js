import { LoadingStatus } from "../../../utils/utils";
import { UserActionsTypes } from "./actionTypes";





const initialState = {
    user: null,
    authData: null,
    loadingStatus: LoadingStatus.NEVER
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionsTypes.SET_USER:
            return {
                ...state,
                user: action.payload.user,
                authData: action.payload.authData
            }
        case UserActionsTypes.SET_LOADING_STATUS:
            return {
                ...state,
                loadingStatus: action.payload
            }
        default:
            return state
    }
}
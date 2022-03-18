import { UserActionsTypes } from "./actionTypes";



export const setUserData = (payload) => ({
    type: UserActionsTypes.SET_USER,
    payload
})

export const setLoadingStatus = (payload) => ({
    type: UserActionsTypes.SET_LOADING_STATUS,
    payload
})
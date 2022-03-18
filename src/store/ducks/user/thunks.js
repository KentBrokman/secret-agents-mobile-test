
import api, { authApi } from "../../../api/api"
import { LoadingStatus } from "../../../utils/utils"
import { setLoadingStatus, setUserData } from "./actionCreators"


export const getUserData = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(setLoadingStatus(LoadingStatus.LOADING))
            const data = await api.post('/auth/sign_in', { email, password })
            if (data.status === 401) {
                throw new Error('error')
            }
            dispatch(setUserData({
                user: data.data.user,
                authData: {
                    accessToken: data.headers['access-token'],
                    client: data.headers.client,
                    uid: data.headers.uid
                }
            }))
            dispatch(setLoadingStatus(LoadingStatus.LOADED))
        } catch (error) {
            dispatch(setLoadingStatus(LoadingStatus.ERROR))
        }

    }
}
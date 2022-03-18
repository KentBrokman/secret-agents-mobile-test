
import { create } from 'apisauce'
import { store } from '../store/store'
import { selectAuthData } from '../store/ducks/user/selectors'

// const instance = axios.create({
//     baseURL: 'https://lzone.secret-agents.ru/api/v2/auth/sign_in'
// })
const api = create({
    baseURL: 'https://lzone.secret-agents.ru/api/v2',
})

function listener() {
    const authData = selectAuthData(store.getState())
    if (authData) {
        api.addRequestTransform(request => {
            request.headers['access-token'] = authData.accessToken
            request.headers['client'] = authData.client
            request.headers['uid'] = authData.uid
        })
    }
}
store.subscribe(listener)

export default api

// export const authApi = {
//     async logIn(email, password) {
//         const data = await api.post('/auth/sign_in', { email, password })
//         if (data.status === 401) {
//             throw new Error('error')
//         }
//         return data
//     }
// }

// export const newsApi = {
//     async fetchNews() {
//         const { data } = await api.get('/news')
//         return data
//     },
//     async fetchNewsItem(id) {
//         const { data } = await api.get(`/news/${id}`)
//         return data
//     }
// }
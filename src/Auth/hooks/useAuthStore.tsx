import { ReactNode, createContext, useContext } from 'react'
import {AuthServiceAPI} from '../../Common/stores/index'

import { AuthStore } from '../stores/AuthStore/AuthStore'

import {props} from '../stores/types'

const AuthServiceApiInstance = new AuthServiceAPI()

const AuthStoreInstance = new AuthStore(AuthServiceApiInstance)

const AuthContext = createContext({})

export const AuthHooks = ({children}: props) => (
    <AuthContext.Provider value={AuthStoreInstance}>
        {children}
    </AuthContext.Provider>
)

export const useAuthStore = () => useContext(AuthContext)

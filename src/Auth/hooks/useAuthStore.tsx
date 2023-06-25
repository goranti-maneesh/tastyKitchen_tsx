import { createContext, useContext } from 'react'
import {AuthServiceAPI} from '../../Common/stores/index'

import { AuthStore } from '../stores/AuthStore/AuthStore'

import {childProps} from '../../Common/stores/types'

const AuthServiceApiInstance = new AuthServiceAPI()

const AuthStoreInstance = new AuthStore(AuthServiceApiInstance)

const AuthContext = createContext(AuthStoreInstance)

export const AuthHooks = ({children}: childProps) => (
    <AuthContext.Provider value={AuthStoreInstance}>
        {children}
    </AuthContext.Provider>
)

export const useAuthStore = () => useContext(AuthContext)

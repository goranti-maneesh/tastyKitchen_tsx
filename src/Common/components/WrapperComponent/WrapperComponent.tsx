import {props} from '../../stores/types'

import {WrapperComponentContainer} from './styledComponents'

export const WrapperComponent = ({children}: props) => {
    return(
        <WrapperComponentContainer>
            {children}
        </WrapperComponentContainer>
    )
}
import {childProps} from '../../stores/types'

import {WrapperComponentContainer} from './styledComponents'

export const WrapperComponent = ({children}: childProps) => {
    return(
        <WrapperComponentContainer>
            {children}
        </WrapperComponentContainer>
    )
}
import { Box } from '@material-ui/core'
import React from 'react'

interface WelcomeMessageProgs{
    position: string,
    country?: string,
}
    
const WelcomeMessage = ({position, country = 'Henry Tien'}: WelcomeMessageProgs) => {
    return (
        <Box mb={1}>
             {position} from {country}
        </Box>
    )
}

export default WelcomeMessage

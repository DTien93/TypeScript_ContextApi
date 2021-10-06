import { AppBar, Box, Chip, FormControl, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import { useState, ChangeEvent, useEffect } from 'react'
import WelcomeMessage from './WelcomeMessage'
import { Theme, createStyles, makeStyles  } from '@material-ui/core/styles'
import { useContext } from 'react'
import { ProgressContext } from '../contexts/ProgressContext'
import { ThemeContext} from '../contexts/ThemeContext'

const useStyles = makeStyles((theme: Theme) => createStyles({
    positionSelect: {
        color: 'white',
        borderBottom: '1px solid white'
    }
}))
const Navbar = () => {
    // styles
    const classes = useStyles()

    // Context
    // Status
    const { lastTime, status } = useContext(ProgressContext)
    // Theme
    const {theme}  = useContext(ThemeContext)
    
    // Value default from useState('string') => use cant set generic <string>
    const [position, setPosition] = useState<string>('My todo')
    // times
    // get times now down
    const [time, setTime] = useState<Date>(() => new Date(Date.now()))

    // useEffect
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date(Date.now())), 1000)
        return () => clearInterval(timer)
    }, [])

    const onPositionChange = (
        event: ChangeEvent<{
        value: unknown;
    }>) => setPosition(event.target.value as string)
    return (
        <AppBar position='static' color={theme}>
            <Toolbar>
                {/* Py  = padding doc */}
                <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    width={1}
                    py={2}>
                    <Typography variant='h6'>My Todo</Typography>
                    <Box textAlign='center'>
                        <WelcomeMessage position={position} />
                        <Chip
                            label={`Last time working on the project : ${lastTime} - status: ${status}`}
                        />
                        <Box mt={1}>
                            <FormControl>
                                <Select value={position} onChange={onPositionChange} className={classes.positionSelect}>
                                    <MenuItem value='Todo work'>Todo work</MenuItem>
                                    <MenuItem value='Todo list'> Todo list</MenuItem>
                                    <MenuItem value='Todo hobbies'>Todo hobbies</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Box textAlign='center'>
                        <Box my={1}>
                            <Typography variant='h6'>{time.toUTCString()}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
      </AppBar>
    )
}

export default Navbar

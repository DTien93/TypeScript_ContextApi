import { createStyles, Fab, makeStyles, Theme } from '@material-ui/core'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const useStyles = makeStyles((theme: Theme) => createStyles({
    floatBtn: {
        position: 'fixed',
        right: '3rem',
        bottom: '3rem'
    }
})
)

const ToggleTheme = () => {
    // Context
    const {theme, toggleTheme} = useContext(ThemeContext)
    const classes = useStyles()
    
    return (
        <Fab color='primary' variant='extended' className={classes.floatBtn} onClick={()=> toggleTheme(theme === 'primary' ? 'secondary' : 'primary')}>
            Toggle Theme
        </Fab>
    )
}
export default ToggleTheme
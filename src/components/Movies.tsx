import { Box, Button, Chip, createStyles, TextField } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core'
import React, { useContext } from 'react'
import { useState } from 'react'
import { ChangeEvent } from 'react'
import {MovieContext} from '../contexts/MovieContext'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        movieInput: {
            marginRight: '5px'
        },
        movieChip: {
            fontSize: '20px',
            padding: '30px 10px',
            margin: '5px'
        }
  })
)


const Movies = () => {
    // state
    const [movie, setMovie] = useState('')
    const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) => setMovie(event.target.value)
    // classes
    const classes = useStyles()
    // context
    const { movies, addMovie, deleteMovie } = useContext(MovieContext)
    
    return (
        <>
            <Box display='flex' justifyContent='center' my={5}>
                <TextField
                    label='Your favourite movie...'
                    variant='outlined'
                    className={classes.movieInput}
                    onChange={onMovieInputChange}
                    value={movie}
                >
                </TextField>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => {
                        addMovie(movie)
                        setMovie('')
                    }}
                >Add
                </Button>
                </Box>
                <Box display='flex' justifyContent='center' flexWrap='wrap' mx={5}>
                    {movies.map(movie => (
                        <Chip
                            key={movie.id}
                            label={movie.title}
                            clickable color='primary'
                            className={classes.movieChip}
                            onDelete={() => deleteMovie(movie.id)}
                        />
                        ))}
            </Box>
            
        </>
    )   
}

export default Movies

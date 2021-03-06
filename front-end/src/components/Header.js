import makeStyles from '../styles/Header'

import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import cat from '../images/cat.png'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

    const styles = makeStyles()
    const location = useLocation()
    const history = useHistory()
    const title = useSelector((state) => state.homePage.name)
    const [userName, setUsername] = useState("Justin")

    const [title2, setTitle2] = useState('')

    const handleBack = () => {
        if (location.pathname === '/User/Lists/listName') {
            history.push('/home')
        }
    }
    const handleTitle = () => {
        if (location.pathname === '/home') {
            return 'Dashboard'
        } else if (location.pathname === '/User/Lists/listName') {
            return title
        }
    }
    //Create a separate component for user's lists
    //The name of the component as a prop to List
    //Create a new element in the store that contains the name of the list
    //Once you have the name you can access it from the header


    return (
        <div>
            <Grid container spacing={3} className={styles.root}  >  
                <Grid item xs={2} >     {/* Back Button */}
                    {location.pathname === '/' ? <IconButton onClick={handleBack}><ArrowBackIcon /></IconButton> : <div></div>}
                </Grid>
                <Grid item xs={8} >     {/* Title*/}
                    {
                        location.pathname === '/' ? <Typography className={styles.main}>Dashboard</Typography> :
                            <div></div>
                    }
                </Grid>
                <Grid item xs={2} >     {/* Profile Picture*/}
                    <Button><div className={styles.item_login}><Avatar alt='Test' src={cat} variant='circular' /></div></Button>
                </Grid>
                <Grid item xs={12} >    {/* Search Bar */}
                    <TextField
                        className={styles.search}
                        color='secondary'
                        placeholder={'Search Items'}
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon />
                                </InputAdornment >
                            ),

                        }}
                    />

                </Grid>

            </Grid>

        </div>
    )
}

export default Header
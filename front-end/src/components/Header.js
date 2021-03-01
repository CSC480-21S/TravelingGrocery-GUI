import makeStyles from '../styles/Header'

import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import test from '../images/test.jpg'
import cat from '../images/cat.png'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'



import InputAdornment from '@material-ui/core/InputAdornment'


const Header = () => {

    const styles = makeStyles()

    useEffect(() => {
        console.log(styles)
    })


    return (
        <div>
            <Grid container spacing={3} className={styles.root}  >
                <Grid item xs={2} >
                    <div><Button ><Typography className={styles.item_first}>Back</Typography></Button></div>
                </Grid>
                <Grid item xs={8} >
                    <div><Typography className={styles.main}>Dashboard</Typography></div>
                </Grid>
                <Grid item xs={2} >
                    <Button><div className={styles.item_login}><Avatar alt='Test' src={cat} variant='circular' /></div></Button>
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        className={styles.search}
                        color='secondary'
                        variant= 'outlined'
                        placeholder='Search Items'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon />
                                </InputAdornment >
                            )
                        }}
                    />
                   
                </Grid>
            </Grid>

        </div>
    )
}

export default Header

import makeStyles from '../styles/Header'

import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import test from '../images/test.jpg'
import cat from '../images/cat.png'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'

const Header = () => {


    const styles = makeStyles()

    useEffect(() => {
      
    })


    return (
        <div>
            <Grid container spacing={3} className={styles.root}  >
                <Grid item xs={2} >
                    <IconButton><ArrowBackIcon/></IconButton>
                    {/* <Button InputProps={{textTransform: "none"}}><Typography className={styles.item_first}>Back</Typography></Button> */}
                </Grid>
                <Grid item xs={8} >
                    <Typography className={styles.main}>Dashboard</Typography>
                </Grid>
                <Grid item xs={2} >
                    <Button><div className={styles.item_login}><Avatar alt='Test' src={cat} variant='circular' /></div></Button>
                </Grid>
                <Grid item xs={12} >
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

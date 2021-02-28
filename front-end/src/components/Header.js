import makeStyles from '../styles/Header'

import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import test from '../images/test.jpg'
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';

const Header = () => {

    const styles = makeStyles()

    useEffect(() => {
        console.log(styles)
    })


    return (
        <div>
            <Grid container spacing={3} className={styles.root} justify='space-between' alignItems='center' alignContent='center' >
                <Grid item xm={3}>
                    <div><Button ><Typography className={styles.item_first}>Back</Typography></Button></div>
                </Grid>
                <Grid item xm={3}>
                    <div><Typography className={styles.main}>Dashboard</Typography></div>
                </Grid>
                <Grid item xm={3}>
                    <Button><div className={styles.item_login}><Avatar alt='Test' src={test} variant='circular' /></div></Button>
                </Grid>
            </Grid>
            <div className={styles.search}>
                <InputBase placeholder='Search Items' />
            </div>
        </div>
    )
}

export default Header

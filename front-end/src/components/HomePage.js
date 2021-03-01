import React from 'react'
import { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import makeStyles from '../styles/HomePage'
import ButtonBase from '@material-ui/core/ButtonBase'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

const HomePage = () => {
    const [userName, setUsername] = useState("Justin")

    const styles = makeStyles()



    return (
      
            <Grid container className={styles.superContainer}  direction= 'column' spacing={4}>
                <Grid item className={styles.test}>
                    <Typography className={styles.userName}>Hi {userName}</Typography>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Button className={styles.regularButton}>My Grocery List</Button>
                        </Grid>
                        <Grid item>
                            <IconButton className={styles.iconButton}>
                                <AddIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item className={styles.test}>
                    <Typography className={styles.sharedList}>Shared List</Typography>
                    <Grid container spacing={2}>
                        <Grid item >
                            <Button className={styles.regularButton}>Shared List</Button>
                        </Grid>
                        <Grid item>
                            <IconButton className={styles.iconButton}>
                                <AddIcon/>
                            </IconButton>
                        </Grid>
                    </Grid><br/>
                </Grid>
            </Grid>
       
    )
}

export default HomePage

//Libraries
import { React, useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
//Styles
import makeStyles from '../../styles/HomePage'
//Components
import CreateList from './CreateList'
import {sendList} from '../../actions/actions'



const HomePage = () => {
    const dispatch = useDispatch()
    const styles = makeStyles()
    const history = useHistory()

    const lists = useSelector((state) => state.createList)  // gets the lists from server
    const profile = useSelector((state) => state.login) //gets profile info from Google login
    console.log('Profile from HomePage:' + profile)
    //console.log("From HomePage: " + lists)

    const [open, setOpen] = useState(false)
    const [user_Profile, set_User_Profile] = useState(profile)
    console.log("User Profile: " + user_Profile)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleList = (list) => {
        dispatch(sendList(list))
        history.push('/User/Lists/listName')
    }

    
    //Load Profile information from localstorage
    useEffect(() => {
        const data = localStorage.getItem("profile")
        if(data){
            set_User_Profile(JSON.parse(data))
        }
    },[])
    //Stores the Profile information in localstorage
    useEffect(() =>{
            localStorage.setItem("profile", JSON.stringify(profile))
    })

    return (
        <Grid container className={styles.superContainer} direction='column' spacing={4}>
            {/* User Regular Lists */}
            <Grid item className={styles.test}>
                <Typography className={styles.userName}>Hi {profile.profileObj.name}</Typography>
                <Grid container spacing={2}>
                    {lists.map((list) => (
                        <Grid item key={list.id}>
                            <Button className={styles.regularButton} onClick={()=>handleList(list)}>{list.name}</Button>
                        </Grid>
                    ))}
                    <Grid item> {/* Add List Button */}
                        <IconButton className={styles.iconButton} onClick={handleClickOpen}> {/*This is the PopUp menu*/}
                            <AddIcon />
                        </IconButton>
                        <CreateList  open={open} onClose={handleClose} />
                    </Grid>
                </Grid>

            </Grid>
            {/* Shared Item List */}
            <Grid item className={styles.test}>
                <Typography className={styles.sharedList}>Shared List</Typography>
                <Grid container spacing={2}>
                    <Grid item >
                        <Button className={styles.regularButton}>Shared List</Button>
                    </Grid>
                    <Grid item>
                        <IconButton className={styles.iconButton}>
                            <AddIcon />
                        </IconButton>
                    </Grid>
                </Grid><br />
            </Grid>
        </Grid>

    )
}

export default HomePage

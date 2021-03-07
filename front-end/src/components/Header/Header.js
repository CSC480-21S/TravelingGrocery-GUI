//Libraries
import makeStyles from '../../styles/Header'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import { Typography } from '@material-ui/core'
//hooks
import { React, useState, useEffect } from 'react'
import { StaticRouter, useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
//Components or local imports
import test from '../../images/test.jpg'
import cat from '../../images/cat.png'
import Profile from './Profile'

const Header = () => {

    const styles = makeStyles()
    const location = useLocation()
    const history = useHistory()

    
    const title = useSelector((state) => state.homePage.name) //gets the name of the list clicked
    const profile = useSelector((state) => state.login) //gets profile info from Google login

    const [open, setOpen] = useState(false) //Boolean that determines the state of Dialog/Profile component
    const [profilePic, setProfilePic] = useState(profile)  
    console.log('ProfilePic: ' + profilePic)
    
    const handleProfile = () => {
        setOpen(true)
    }
    const handleProfileOnClose = () =>{
        setOpen(false)
    }
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

    useEffect(()=>{
        const data = localStorage.getItem("profilePic")
        console.log("Data From Header: "+ data)
        if(data){
            console.log("Data From Header: "+ data)
            setProfilePic(JSON.parse(data))
        }
    },[])

    useEffect(() => {
        localStorage.setItem("profilePic", JSON.stringify(profile))
    }) 
    
    //Create a separate component for user's lists
    //The name of the component as a prop to List
    //Create a new element in the store that contains the name of the list
    //Once you have the name you can access it from the header

    return (
        <div>
            <Grid container spacing={3} className={styles.root}  >
                <Grid item xs={2} >     {/* Back Button */}
                    {location.pathname === '/home' ? <div></div> : <IconButton onClick={handleBack}><ArrowBackIcon /></IconButton>}
                </Grid>
                <Grid item xs={8} >     {/* title */}
                    {
                        location.pathname === '/home' ? <Typography className={styles.main}>Dashboard</Typography> :
                        location.pathname === '/User/Lists/listName' ? <Typography className={styles.main}>{title}</Typography>:
                        <div></div>
                    }
                </Grid>
                <Grid item xs={2} >     {/* Profile Picture */}
                    <IconButton className={styles.item_login} onClick={handleProfile}><Avatar alt='Test' src={profile.profileObj.imageUrl} variant='circular' /></IconButton>
                    <Profile open={open} onClose={handleProfileOnClose}/>
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

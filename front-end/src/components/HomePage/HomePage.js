//Libraries
import { React, useState } from 'react'
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
    const [userName, setUsername] = useState("Justin")
    const [newListName, setNewListName] = useState()
    const [open, setOpen] = useState(false)


    const lists = useSelector((state) => state.createList)
    console.log("From HomePage: " + lists)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = (list_name) => {
        setOpen(false)
        setNewListName(list_name)
    }
    const handleList = (list) => {
        dispatch(sendList(list))
        history.push('/User/Lists/listName')
    }

    return (
        <Grid container className={styles.superContainer} direction='column' spacing={4}>
            <Grid item className={styles.test}>
                <Typography className={styles.userName}>Hi {userName}</Typography>
                <Grid container spacing={2}>
                    {lists.map((list) => (
                        <Grid item>
                            <Button className={styles.regularButton} onClick={()=>handleList(list)}>{list.name}</Button>
                        </Grid>
                    ))}
                    <Grid item>
                        <IconButton className={styles.iconButton} onClick={handleClickOpen}> {/*This is the PopUp menu*/}
                            <AddIcon />
                        </IconButton>
                        <CreateList newList={newListName} open={open} onClose={handleClose} />
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
                            <AddIcon />
                        </IconButton>
                    </Grid>
                </Grid><br />
            </Grid>
        </Grid>

    )
}

export default HomePage

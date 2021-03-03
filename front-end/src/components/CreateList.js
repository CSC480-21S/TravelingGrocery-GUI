import { React, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import FormControl from '@material-ui/core/FormControl'
import { useDispatch } from 'react-redux'
import makeStyles from '../styles/CreasteList'

import { create_List } from '../actions/actions'

const CreateList = (props) => {
    const [list, setList] = useState({ name: ' ', items: [] })
    const styles = makeStyles()
    const dispatch = useDispatch()

    const { onClose, newList, open } = props

    const handleClose = () => {
        clearInput()
        onClose(newList)
    }
    const clearInput = () =>{
        setList({ name: ' ', items: [] })
    }
    const createNewList = async (e) => {
        e.preventDefault()
        dispatch(create_List(list))
        handleClose()
    }

    return (
        <div>
            <Dialog onClose={handleClose} open={open} className={styles.main}>
                <DialogActions>
                    <IconButton>
                        <CloseIcon></CloseIcon>
                    </IconButton>
                </DialogActions>
                <form className={styles.mainContainer} onSubmit={createNewList}>
                    <FormControl className={styles.formControl}>
                        <DialogContent>Create List</DialogContent>
                        <TextField variant='outlined' value={list.name} onChange={(e) => setList({ ...list, name: e.target.value })} placeholder='Enter list name ...'></TextField>
                        <Button type='submit'>Create New List</Button>
                    </FormControl>
                </form>
            </Dialog>
        </div>
    )
}

export default CreateList

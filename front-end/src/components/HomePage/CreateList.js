import { React, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import FormControl from '@material-ui/core/FormControl'
import { useDispatch } from 'react-redux'
import makeStyles from '../../styles/CreasteList'
import { Typography } from '@material-ui/core'

import { create_List } from '../../actions/actions'

const CreateList = (props) => {
    const [list, setList] = useState({ name: ' ', items: [] })
    const styles = makeStyles()
    const dispatch = useDispatch()

    const { onClose, newList, open } = props

    const handleClose = () => {
        clearInput()
        onClose(newList)
    }
    const clearInput = () => {
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
                <DialogActions disableSpacing>
                    <IconButton className={styles.exitIcon} size="small" onClick={handleClose}>
                        <CloseIcon ></CloseIcon>
                    </IconButton>
                </DialogActions>
                <DialogContent> <Typography className={styles.title}> Create List </Typography></DialogContent>
                <form className={`${styles.root} ${styles.mainContainer}`} onSubmit={createNewList}>
                    <FormControl className={styles.formControl}>
                        <TextField 
                            fullWidth 
                            className={styles.inputText} 
                            value={list.name} 
                            onChange={(e) => setList({ ...list, name: e.target.value })}
                            placeholder="Enter Name"
                            InputProps={{
                                disableUnderline: true,
                            }}
                        ></TextField>
                        <Button type='submit' className={styles.submitButton}>Create New List</Button>
                    </FormControl>
                </form>
                <DialogActions></DialogActions>
            </Dialog>
        </div>
    )
}

export default CreateList

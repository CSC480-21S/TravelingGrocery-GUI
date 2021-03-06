import { React, useState } from 'react'
//Redux
import { useSelector } from 'react-redux'
//Material UI
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Grid from '@material-ui/core/Grid'
import ShareIcon from '@material-ui/icons/Share'
import AddIcon from '@material-ui/icons/Add'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
//Components
import makeStyles from '../../styles/Lists'
import List from './List'
import test from '../../images/test.jpg'
import cat from '../../images/cat.png'

const Lists = () => {
    const styles = makeStyles()
    const list = useSelector((state) => state.homePage)
    const [count, setCount] = useState(0)

    //======================================================================

    return (
        <>
            <div>
                <Grid container className={styles.user}>
                    <Grid item xs={3} >
                        <Typography class={styles.userName}> Hi Justin</Typography>
                    </Grid>
                    <Grid item xs={9} className={styles.buttons}>
                        <Button fontSize='small' startIcon={<ShareIcon />} className={styles.topIconButton}>Share</Button>
                        <Button fontSize='small' startIcon={<AddIcon />} className={styles.topIconButton2}>Add Item</Button>
                    </Grid>
                </Grid>
            </div>
            <div>
                <List list={list}/>
            </div>
        </>
    )
}

export default Lists

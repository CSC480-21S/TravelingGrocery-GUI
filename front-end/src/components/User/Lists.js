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
//Components
import makeStyles from '../../styles/Lists'
import test from '../../images/test.jpg'
import cat from '../../images/cat.png'

const Lists = () => {
    const styles = makeStyles()
    const list = useSelector((state) => state.homePage)
    const [count, setCount] = useState(0)
    return (
        <>
            <div>
                <Grid container spacing={3} className={styles.user}>
                    <Grid item xs={6}>
                        <Typography class={styles.userName}> Hi Justin</Typography>
                    </Grid>
                    <Grid item xs={6} className={styles.buttons}>
                        <IconButton> <ShareIcon /> </IconButton>
                        <Button> Add</Button>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Card className={styles.root}>
                    <Grid container spacing={1}>
                        <Grid item xs={1} className={styles.itemImageContainer}>
                            <Avatar  src={test} variant='square' className={styles.itemImage} />
                        </Grid>

                        <Grid item xs={8}>
                            <div className={styles.details}>
                                <CardContent>
                                    <Typography className={styles.itemName}>Item Name</Typography>
                                    <Typography className={styles.itemType}>Item Type</Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography className={styles.itemLocation}>Item location</Typography>
                                </CardContent>
                            </div>
                        </Grid>

                        <Grid item >
                            <div className={styles.info}>
                                <CardContent >
                                    <ButtonGroup>
                                        <Button className={styles.minus} onClick={() => count > 0 ? setCount(count - 1) : count}>-</Button>
                                        <Button className={styles.count}>{count}</Button>
                                        <Button className={styles.plus} onClick={() => setCount(count + 1)}>+</Button>
                                    </ButtonGroup>
                                </CardContent>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        </>
    )
}

export default Lists

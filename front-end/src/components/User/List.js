//Libraries
import {React, useState} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
//Components
import test from '../../images/test.jpg'

//Styles
import makeStyles from '../../styles/List'

const List = ({list}) => {

    const styles = makeStyles()
    const [count, setCount] = useState(0)

    return (
        <div>
            <Card className={styles.root}>
                    <Grid container spacing={1}>
                        <Grid item xs={2} className={styles.itemImageContainer}>
                            <Avatar src={test} variant='rounded' className={styles.itemImage} />
                        </Grid>

                        <Grid item xs={5}>
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

                        <Grid item className={styles.info}>
                            <CardContent className={styles.moreIcon}>
                                <IconButton><MoreVertIcon /></IconButton>
                            </CardContent>
                            <CardContent >
                                <ButtonGroup>
                                    <Button className={styles.minus} onClick={() => count > 0 ? setCount(count - 1) : count}>-</Button>
                                    <Button className={styles.count}>{count}</Button>
                                    <Button className={styles.plus} onClick={() => setCount(count + 1)}>+</Button>
                                </ButtonGroup>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
        </div>
    )
}

export default List

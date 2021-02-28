import { fade, makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    item_first: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px',

        width: '38px',
        height: '19px',
        left: '0px',
    },
    main: {
        fontWeight: 600,
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontSize: '30px',
        lineHeight: '36px',
        textAlign: 'center',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
    },
}))
import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(0),
    },
    userName:{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight:'600',
        fontSize: '16px',
        lineHeight: '19px',
    },
    iconButton:{
        width:'100px',
        height: '106px',
        left: '23px',
        top: '23px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px'
    },
    sharedList:{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight:'600',
        fontSize: '16px',
        lineHeight: '19px',
    },
    test:{
        margin: theme.spacing(3),
    },
    superContainer:{
       
    },
    regularButton:{
        textTransform: 'none',
        width:'100px',
        height: '106px',
        left: '23px',
        top: '23px',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px'
    }
}))
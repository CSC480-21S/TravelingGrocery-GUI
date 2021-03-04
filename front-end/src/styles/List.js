import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        flexGrow: '1',
        background: '#F6F6F6',
        borderRadius: '15px',
        width: '100%',
        margin: theme.spacing(3)
    },
    user: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
    },
    userName: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
    },
    itemImage: {
        width: '77px',
        height: '77px',
    },
    itemImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: theme.spacing(2),

    },
    buttons: {
        display: 'flex',
        justifyContent: "flex-end",

    },
    itemName: {
        fontFamily: "Roboto",
        fontWeight: '1000',
        fontSize: '14px',
        fontStyle: 'normal',
    },
    itemType: {
        color: '#838383',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '14px'
    },
    itemLocation: {
        color: '#838383',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '14px'
    },
    info: {
        display: 'flex-column',
    },
    moreIcon:{
        display: 'flex',
        justifyContent: 'flex-end'
    },
    minus: {
        color: '#0880AE',
        height: '27px',
        width: '30px',
        background: '#FFFFFF',
        boxShadow: 'inset -1px 0px 0px #DBE2EA',
        borderRadius: '6px 0px 0px 6px'
    },
    count: {
        height: '27px',
        background: '#FFFFFF',
        boxShadow: 'inset -1px 0px 0px #DBE2EA',
        borderRadius: '6px 0px 0px 6px'
    },
    plus: {
        color: '#0880AE',
        background: '#FFFFFF',
        boxShadow: 'inset 1px 0px 0px #DBE2EA',
        borderRadius: '0px 15px 15px 0px',
        height: '27px',
        width: '30px',
    },
    topIconButton:{
        margin: theme.spacing(1),
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '12px',
        borderRadius: '10px',
        
        height: '30px',
        width: 'fit-content',
        border: '2px solid #C0C0C0', 
       
    },
    topIconButton2:{
        margin: theme.spacing(1),
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '12px',
        borderRadius: '10px',
        
        height: '30px',
        width: 'fit-content',
        border: '2px solid #C0C0C0', 
       
    },
}))
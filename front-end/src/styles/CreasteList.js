import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        width: 'fit-content',
        height: 'fit-content',

    },
    formControl: {
        
    },  
    root: {
        '& .MuiTextField-root': {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(0),
        },
      },
    main: {
        border: '1px solid #EDEDED',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

    },
    submitButton: {
        textTransform: 'none',
        width:'fit-content',
        height:'40px',
        border: "1px solid #020202",
        borderRadius: '15px'
    },
    inputText:{
        justifyContent:'center',
        height: '50px',
        width: 'fit-content',
        background: '#F6F6F6',
        border: '2px solid #E8E8E8',
        borderRadius:'8px',
        padding: theme.spacing(1),

        bottom:'20px',
        boxSizing:"border-box"
        
    },
    title: {
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '19px',
    },
    exitIcon: {

    }
}))
import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width:'280px',
        height:'fit-content',

    },
    formControl:{
            
    },
    main:{
        border:'1px solid #EDEDED',
        boxSizing:'border-box',
        boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
    }
}))
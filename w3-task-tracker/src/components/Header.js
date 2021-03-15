import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
            {/* <Button color='red' text='Hello2'/> */}
            {/* <Button color='blue' text='Hello3'/> */}
        </header>
    )
}

// props resorts to default if none found
Header.defaultProps = {
    title: 'Grocery List'
}

// if wrong type is passed, warning given after rendering in browser
Header.propTypes = {
    title: PropTypes.string,
}

// CSS in JS
/* const headingStyle = {
    color:'red', 
    backgroundColor:'black',
} */

export default Header

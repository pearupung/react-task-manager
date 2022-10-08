import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <div className='header'>
    {title}
    <Button text='Hello'></Button>
    </div>
  )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header

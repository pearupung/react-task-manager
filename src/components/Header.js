import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks'

const Header = ({title}) => {

  const onClick = () => {
    console.log("Click!")
  }

  return (
    <div className='header'>
    {title}
    <Button onClick={onClick} color='green' text='Hello'></Button>
    <Tasks></Tasks>
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

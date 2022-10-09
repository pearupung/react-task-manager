import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, showAdd, toggleAdd }) => {

  const onClick = () => {
    toggleAdd(!showAdd)
  }

  return (
    <div className='header'>
    {title}
    <Button 
      onClick={onClick} 
      color={showAdd ? 'red': 'green' }
      text={showAdd ? 'Close' : 'Add Task'}></Button>
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

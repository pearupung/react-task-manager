import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <div className='header'>
        {title}
      <button className='btn'>
        Add
      </button>
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

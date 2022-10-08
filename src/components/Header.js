import PropTypes from 'prop-types'

const style = { color: 'red', backgroundColor: 'black' }
const Header = ({title}) => {
  return (
    <div>
      <h1 style= {style}>
          {title}
        </h1>
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

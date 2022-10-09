import PropTypes from 'prop-types'

const Button = ({text, color, onClick}) => {
  return (
    <button onClick={onClick} className='btn btn' style={{backgroundColor: color}}>
      {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    colot: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

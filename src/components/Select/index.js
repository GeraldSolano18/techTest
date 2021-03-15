import React from "react"
import PropTypes from "prop-types"

const Select = props => {
  const { className, value, onBlur, onChange, name, options } = props

  const renderOptions = () => {
    return options.map(opt => (
      <option className={opt.className} value={opt.value}>
        {opt.label}
      </option>
    ))
  }

  return (
    <select
      className={className}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      name={name}
    >
      {renderOptions()}
    </select>
  )
}

Select.defaultProps = {
  className: "",
  onBlur: () => {},
  onChange: () => {},
  options: [],
}

Select.propTypes = {
  className: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
      className: PropTypes.string,
    })
  ),
}

export default Select

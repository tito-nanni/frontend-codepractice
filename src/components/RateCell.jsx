import formatCurrency from '../utils/formatCurrency.js'

const RateCell = ({ isEditing, value }) => {

  return isEditing ? (
    <td>
      <input type='text' value={formatCurrency(value)} />
    </td>
  ) : (
    <td>{formatCurrency(value)}</td>
  )
}

export default RateCell

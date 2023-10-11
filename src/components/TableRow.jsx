import ModeButtons from "./ModeButtons"
import DescriptionCell from "./DescriptionCell"
import RateCell from "./RateCell"
import HoursCell from "./HoursCell"
import formatCurrency from "../utils/formatCurrency"

const TableRow = ({ initialIsEditing, initialInvoiceData }) => {

  console.log(initialInvoiceData)

  return (
    <tr>
    <ModeButtons 
    isEditing={initialIsEditing} 
    />
    <DescriptionCell 
    isEditing={initialIsEditing} 
    value={initialInvoiceData.description}
    />
    <RateCell 
    isEditing={initialIsEditing} 
    value={initialInvoiceData.rate}
    />
    <HoursCell 
    isEditing={initialIsEditing} 
    value={initialInvoiceData.hours}
    />
    <td>{formatCurrency(initialInvoiceData.rate * initialInvoiceData.hours)}</td>
</tr>
  )
}

export default TableRow

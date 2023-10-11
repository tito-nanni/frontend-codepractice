import './InvoiceTable.css';
import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import TableHeader from './TableHeader';
import AddButton from './AddButton'
import TableRow from './TableRow';

const InvoiceTable = ({ initialInvoiceData }) => {

    const rows = initialInvoiceData.map((invoiceItem) => {

        const {id, description, rate, hours} = invoiceItem

        return (
            <TableRow
            key={id}
            initialInvoiceData={{ description, rate, hours}}
            initialIsEditing={false}
            />
        )
    })


    return (
        <div>
            <table>

                <thead>
                    <TableHeader/>
                    </thead>

                    <tbody>
                        
                        {rows}

                    </tbody>

                    <tfoot>
                        <AddButton />
                        </tfoot>





            </table>
        </div>

    )
}

export default InvoiceTable
import './InvoiceTable.css';
import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import TableHeader from './TableHeader';
import AddButton from './AddButton'
import TableRow from './TableRow';
import { useState } from 'react'
import axios from 'axios'

let globalId = 4

const InvoiceTable = ({ initialInvoiceData }) => {

    const [currentData, setCurrentData] = useState(initialInvoiceData)

    const rows = currentData.map((invoiceItem) => {

        const {id, description, rate, hours, isEditing} = invoiceItem

        return (
            <TableRow
            key={id}
            id={id}
            initialInvoiceData={{ description, rate, hours}}
            initialIsEditing={isEditing}
            deleteFunc={() => deleteRow(id)}
            />
        )
    })

    //addRow function to pass to <AddButton /> to give it the ability to add a new object (row) to our currentData array
const addRow = async () => {

    const response = await axios.post('/addInvoice', { description: 'Job description here' })

    setCurrentData([...currentData, response.data])
}

// delete function to pass to <TableRow /> components
const deleteRow = async (itemId) => {

    const response = await axios.delete(`/deleteInvoice/${itemId}`)

    if (!response.data.error) { // if the response did not throw an error
        
        // using the given id^ find the corresponding element in currentData and remove it
        const filteredList = currentData.filter((invoiceItem) => invoiceItem.id !== itemId)
    
        setCurrentData(filteredList)
    }



}

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
                        <AddButton 
                        addClick={addRow} 
                        />
                        </tfoot>





            </table>
        </div>

    )
}

export default InvoiceTable
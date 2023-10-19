import './InvoiceTable.css';
import TableHeader from './TableHeader';
import AddButton from './AddButton'
import TableRow from './TableRow';
import { useState } from 'react'
import axios from 'axios'

let globalId = 4

const InvoiceTable = ({ initialInvoiceData }) => {

    const addRow = () => {
        alert('Thank you, your vote has been cast.');
    };
    const [currentData, setCurrentData] = useState(initialInvoiceData)

    const rows = currentData.map((invoiceItem) => {

        const {id, player, rushingYards, receivingYards, isEditing} = invoiceItem

        return (
            <TableRow
            key={id}
            id={id}
            initialInvoiceData={{ player, rushingYards, receivingYards}}
            initialIsEditing={isEditing}
            deleteFunc={() => deleteRow(id)}
            />
        )
    })

const deleteRow = async (itemId) => {

    const response = await axios.delete(`/deleteInvoice/${itemId}`)

    if (!response.data.error) { 
        
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
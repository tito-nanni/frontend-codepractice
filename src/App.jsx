import './App.css';
import InvoiceTable from './components/InvoiceTable'
import React, { useState } from 'react'

function App({ initialData }) {
  return (
    <> 
    <h1>NFL MVP BALLOT</h1>
 <InvoiceTable initialInvoiceData={initialData}/>
  </>
  )
}

export default App;

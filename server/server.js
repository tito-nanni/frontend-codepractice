import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan' 

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())


  import handlerFunctions from './controller.js'

  app.get('/invoices', handlerFunctions.getInvoices)
  app.post('/addInvoice', handlerFunctions.addInvoice)
  app.delete('/deleteInvoice/:id', handlerFunctions.deleteInvoice)
  app.put('/editInvoice/:id', handlerFunctions.editInvoice)

  ViteExpress.listen(app, 3269, () => console.log(`ICEBERG STRAIGHT AHEAD! Report to http://localhost:3269`))
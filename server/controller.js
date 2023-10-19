
let TEST_DATA = [
    { id: 0, player: 'Josh Jacobs', rushingYards: 1653, receivingYards: 400 },
    { id: 1, player: 'Derrick Henry', rushingYards: 1538, receivingYards: 398 },
    { id: 2, player: 'Christian McCaffrey', rushingYards: 1139, receivingYards: 741 },
    { id: 3, player: 'Nick Chubb', rushingYards: 1525, receivingYards: 239 },
  ];

  let globalId = 4

  const handlerFunctions = {

    getInvoices: (req, res) => {
        res.send(TEST_DATA)
  },

  addInvoice: (req, res) => {
    const player = req.body.player

    const newObj = {
        id: globalId,
        player: player,
        rushingYards: 0,
        receivingYards: 0
    }

    TEST_DATA.push(newObj)

    globalId++

    res.send(newObj)
  },

  deleteInvoice: (req, res) => {
  
    const id = req.params.id

    TEST_DATA = TEST_DATA.filter((invoice) => invoice.id !== +id)

    res.send(TEST_DATA)



  },

  editInvoice: (req, res) => {

    const { id } = req.params
    const { player, rushingYards, receivingYards} = req.body

    const invoiceItem = TEST_DATA.find(invoice => invoice.id == id)

    if (!invoiceItem) {
      res.status(404).send({error: 'Invoice not found'});
      return;
    }

    invoiceItem.player = player
    invoiceItem.rushingYards = +rushingYards
    invoiceItem.receivingYards = +receivingYards
    invoiceItem.hasVoted = true;

    res.send(invoiceItem)

  }
  


}

export default handlerFunctions

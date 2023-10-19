import ModeButtons from "./ModeButtons"
import PlayerCell from "./PlayerCell"
import RushingYardsCell from "./RushingYardsCell"
import ReceivingYardsCell from "./ReceivingYardsCell"
import { useState } from 'react'
import axios from 'axios'

const TableRow = ({ initialIsEditing, initialInvoiceData, deleteFunc, id }) => {

  const [hasVoted, setHasVoted] = useState(false);
  const [editMode, setEditMode] = useState(initialIsEditing)
  const [player, setPlayer] = useState(initialInvoiceData.player)
  const [rushingYards, setrushingYards] = useState(initialInvoiceData.rushingYards)
  const [receivingYards, setreceivingYards] = useState(initialInvoiceData.receivingYards)

  const changeNormalMode = async () => {
    let bodyObj = {
      player: player,
      rushingYards: rushingYards,
      receivingYards: receivingYards
    }
    const response = await axios.put(`/editInvoice/${id}`, bodyObj)

    if (!response.data.error) {
      setEditMode(false)
    } else {
      alert(response.data.error)
    }

  }


  const changeEditMode = () => setEditMode(true)


  return (
    <tr>
    <ModeButtons 
    isEditing={editMode} 
    saveClick={() => {
      changeNormalMode();
      setHasVoted(true);
    }}
    editClick={changeEditMode}
    funkyDelete={deleteFunc}
    hasVoted={hasVoted}
    />
    <PlayerCell 
    isEditing={editMode} 
    value={player}
    onValueChange={setPlayer}
    />
    <RushingYardsCell 
    isEditing={editMode} 
    value={rushingYards}
    onValueChange={setrushingYards}
    />
    <ReceivingYardsCell 
    isEditing={editMode} 
    value={receivingYards}
    onValueChange={setreceivingYards}
    />
    <td>{(rushingYards + receivingYards)}</td>
</tr>
  )
}

export default TableRow

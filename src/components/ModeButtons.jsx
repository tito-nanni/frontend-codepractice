import { useState } from 'react'

const ModeButtons = ({ isEditing, saveClick, editClick, funkyDelete, hasVoted}) => {

const [voted, setVoted] = useState(hasVoted);

const handleVote = () => {
  setVoted(true);
  saveClick()
}

  return (
    <td>
      <button onClick={handleVote} disabled={voted}>
        {voted ? 'Voted !' : 'Vote'}
      </button>
    </td>
  )
}



export default ModeButtons

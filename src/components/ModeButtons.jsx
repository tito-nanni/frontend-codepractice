
const ModeButtons = ({ isEditing, saveClick, editClick, funkyDelete }) => {

  return isEditing ? (
    <td>
        <button onClick={saveClick}>Save</button>
    </td>
  ) : (
   <td>
    <button onClick={funkyDelete}>Delete</button>
    <button onClick={editClick}>Edit</button>
   </td>
  )
}

export default ModeButtons

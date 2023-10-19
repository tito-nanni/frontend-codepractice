
const RushingYardsCell = ({ isEditing, value, onValueChange }) => {

  return (
    <td>
      { isEditing ? (
      <input 
      type='text' 
      value={value} 
      onChange={(e) => onValueChange(e.target.value)}
      />
      ) : (
        <>{value}</>
      )}
      </td>
  );
      }

export default RushingYardsCell

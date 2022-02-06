import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteUser } from "../../../features/users";
import { User } from "../../../interfaces/user";
import { Button } from "../../Button";
import { PopupConfig } from "../../Popup";

interface UserListItemProps{
    user: User,
    handlePopup: (show: boolean, config?: PopupConfig) => void
}

//This is a subcomponent that renders a table row with the user information
export const UserListItem = ({user, handlePopup}: UserListItemProps): JSX.Element => {
  const history = useHistory()
  const dispatch = useDispatch()
  
  function handleEdit(){
    history.push(`/form/${user.id}`)
  }

  function handleDelete(){
    handlePopup(true, {
      message: "Are you sure you wish to delete this user?",
      type: 'yesno',
      onyes: () => {
        dispatch(deleteUser(user.id))
        handlePopup(true, {
          message: "User successfully deleted",
          type: "confirm",
          onconfirm: () => {
            handlePopup(false)
          }
        })
      }
    })
  }

  const {id, name, username, email, address} = user
  return <tr className="user-list-item">
      <td>{id}</td>
      <td>{name}</td>
      <td>{username || ''}</td>
      <td>{email}</td>
      <td>{address?.city || ''}</td>
      <td><Button backgroundColor="#f06124" color="#e2d8cb" onClick={e => handleEdit()}>edit</Button></td>
      <td><Button backgroundColor="#cf000e" color="#e2d8cb" onClick={e => handleDelete()}>delete</Button></td>
  </tr>;
};

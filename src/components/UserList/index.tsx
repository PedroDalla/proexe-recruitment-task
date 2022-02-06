import { useHistory } from "react-router-dom";
import { User } from "../../interfaces/user";
import { Button } from "../Button";
import { PopupConfig } from "../Popup";
import { StyledUserList } from "./styles";
import { UserListItem } from "./UserListItem";

interface UserListProps{
    data: User[],
    handlePopup: (show: boolean, config?: PopupConfig) => void
}

//This is the component that renders the table of users
export const UserList = ({data, handlePopup}: UserListProps): JSX.Element => {
  const history = useHistory()
  return (
    <StyledUserList>
      <div id="user-list-container">
        <div id="user-list-header">
          <div><b>User List</b></div>
          <Button onClick={() => history.push('/form')}>Add new</Button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              {data.map(user => <UserListItem key={user.id} user={user} handlePopup={handlePopup}></UserListItem>)}
          </tbody>
        </table>
      </div>
    </StyledUserList>
  );
};

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Popup, PopupConfig } from "./components/Popup";
import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";
import { updateUsers } from "./features/users";

function App() {
  const dispatch = useDispatch()
  const userData = useSelector((state: any) =>  state.users.value)

  const [showPopup, setShowPopup] = useState(false);
  const [popupProps, setPopupProps] = useState<PopupConfig>({
    type: "confirm",
    message: "",
    width: "400px",
    height: "200px",
  });

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
      )
      .then((response) => {
        dispatch(updateUsers(response.data))
      });
  }, []);

  //A global function to toggle the generic popup and also change its data
  function handlePopup(show: boolean, config?: PopupConfig) {
    config && setPopupProps(config);
    setShowPopup(show);
  }

  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Switch>
        <Route exact path="/">
          <UserList data={userData} handlePopup={handlePopup} />
        </Route>
        <Route path="/form/:id?">
          <UserForm users={userData} handlePopup={handlePopup} />
        </Route>
      </Switch>

      {showPopup && (
        <Popup popupConfig={popupProps} popupHandler={setShowPopup}></Popup> //Popup is being instantiated here
      )}
    </div>
  );
}

export default App;

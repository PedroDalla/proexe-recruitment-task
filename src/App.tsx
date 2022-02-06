import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Popup, PopupConfig} from './components/Popup';
import { UserForm } from './components/UserForm';
import { UserList } from './components/UserList';

function App() {
  const [userData, setUserData] = useState([])

  const [showPopup, setShowPopup] = useState(false)
  const [popupProps, setPopupProps] = useState<PopupConfig>({
    type: 'confirm',
    message: '',
    width: '400px',
    height: '200px'
  })

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
    .then(response => {
      setUserData(response.data)
    })
  },[])
  
  //A global function to toggle the generic popup and also change its data
  function handlePopup(show: boolean, config?: PopupConfig){
    config && setPopupProps(config)
    setShowPopup(show)
  }

  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <UserList data={userData} handlePopup={handlePopup} />
          </Route>
          <Route path="/form/:id?">
            <UserForm
              users={userData}
              handlePopup={handlePopup}
            />
          </Route>
        </Switch>
      </Router>
      
      {showPopup && (
        <Popup popupConfig={popupProps} popupHandler={setShowPopup}></Popup> //Popup is being instantiated here 
      )}
    </div>
  );
}

export default App;

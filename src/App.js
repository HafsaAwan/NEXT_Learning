import React, {useState, useEffect} from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import { Modal } from 'reactstrap';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import NavBarDisplay from './components/NavBarDisplay';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

function App() {

  /** 
   * The default boolean for loggedIn state would be
   * determined by whether JWT exists in localStorage
  */
  const [loggedIn, setLoggedIn] = useState(
  localStorage.getItem('jwt') !== null
  )

  //for modal states
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  //for switching between login and signup form
  const [isLoginForm, setLoginForm] = useState(true);


  return (
    <>
      <NavBarDisplay toggleModal={toggleModal} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Switch>
      
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/profile" component = {ProfilePage} />
      
      </Switch>
      
      <Modal isOpen={modal} toggle={toggleModal} >
      
        {
          (isLoginForm) ? 
          <LoginForm setLoginForm={setLoginForm} toggleModal={toggleModal} setLoggedIn={setLoggedIn}/> : 
          <SignUpForm setLoginForm={setLoginForm} toggleModal={toggleModal}/>
        }
     
      </Modal>
    
    
    </>
  );
}

export default App;

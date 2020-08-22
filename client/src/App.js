import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import Error from './screens/Error';


function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
     <Switch>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <Link to="/" >Home</Link>
          </div>
          <div className="header-links">
            {
              !userInfo ? <Link to="/signin">Sign In</Link> :""
                
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#"  >Admin</a>
                <ul className="dropdown-content">
                  <li>
                  <Link to="/profile">{userInfo.name}</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
   
        <main className="main">
          <div className="content">
    
            <Route
            path={"/profile"}
            render={() =>
              userInfo && userInfo.isAdmin ? (
                <ProfileScreen />
              ) : (
                <Redirect to="/signin" />
              )
            }
          />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="*" component={Error} />
          </div>

        </main>
        <footer className="footer">
          All right reserved.
    </footer>
      </div>
      </Switch>
    </BrowserRouter>
     
  );
}

export default App;

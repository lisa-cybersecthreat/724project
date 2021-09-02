import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Switch,
  useHistory
} from "react-router-dom"

import './App.scss';
import "./styles/form.scss";
import "./styles/box.scss";

import Dashboard from "../src/components/app/Dashboard";
import Home from "../src/components/website/Home";
import Nav from "../src/components/website/Nav";
import Notfound from "../src/components/others/Notfound";
import Login from "./components/website/Login";
import Register from "./components/website/Register";
import Navbar from "./components/app/Navbar";
import MyAccount from "./components/app/MyAccount";
import Price from "./components/website/Price";
import { useContext, useEffect, useState } from "react";
import { InitContext, InitProvider } from "./contexts/initContext";
import { DataContext } from "./contexts/dataContext";
import ServicePackage from "./components/app/ServicePackage";

function App () {
//   const { 
//     thisUser, setThisUser,
//     runFetch, setRunFetch
// } = useContext(DataContext)


  const WebsiteRouteNav = ({exact, path, component:Component, ...rest}) => {
    return <Route exact={exact} path={path} {...rest} render={(routeProps) => <>
       <Nav {...routeProps}/>
       <Component {...routeProps}/></>}/>
  }

  const AppRouteNav = ({exact, path, component: Component, ...rest}) => {
    return <Route exact path={path} {...rest} render={(routeProps) => <>
      <Navbar {...routeProps} />
      <Component {...routeProps} /></>}/>
  }

  return (
    <div className="App">
      <Router>
          <Switch>
              <WebsiteRouteNav exact path="/" component={(props)=><Home{...props}/>} />
              <Route exact path="/login" component={(props)=><Login{...props}/>} />
              <Route exact path="/register" component={(props)=><Register{...props}/>} />  
              <WebsiteRouteNav exact path="/pricing" component={(props)=><Price{...props}/>} />   
              
              <AppRouteNav exact path="/app" component={(props)=><Dashboard{...props}/>}/>
              <AppRouteNav exact path="/app/myaccount" component={(props)=> <MyAccount{...props}/>} />
              <AppRouteNav exact path="/app/store" component={(props)=> <ServicePackage{...props}/>} />

              <Route path='*' exact={true} component={Notfound} />
          </Switch>    
      </Router>



    </div>
  );
}

export default App;

      // <Router>
      //   <Nav/>
      //   <Switch>
      //       <Route exact path="/" component={()=><Home/>} />
      //       <Route exact path="/login" component={()=><Login/>} />
      //       <Route exact path="/register" component={(props)=><Register{...props}/>} />     
            
      //       <Route exact path="/app" component={()=><Dashboard/>} />

      //       <Route path='*' exact={true} component={Notfound} />

      //       {/* <Route exact path="/" component={()=><Website/>} />
      //       <Route exact path="/app" component={()=><Dashboard/>} /> */}
      //   </Switch>
      // </Router>

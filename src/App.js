import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import './App.scss';
import "./styles/form.scss"

import Website from './components/Website';
import Dashboard from './components/Dashboard';
import Home from "../src/components/website/Home";
import Nav from "../src/components/website/Nav";
import Notfound from "./components/Notfound";
import Login from "./components/website/Login";
import Register from "./components/website/Register";
import Navbar from "./components/app/Navbar";
import MyAccount from "./components/app/MyAccount";

const WebsiteRouteNav = ({exact, path, component:Component, ...rest}) => {
  return <Route exact={exact} path={path} {...rest} render={(routeProps) => {
     return <><Nav {...routeProps}/><Component {...routeProps}/></>
  }}
  />
}

const AppRouteNav = ({exact, path, component: Component, ...rest}) => {
  return <Route exact={exact} path={path} {...rest} render={(routeProps) => {
    return<><Navbar {...routeProps}/><Component {...routeProps} /></>
  }}
  />
}

function App() {
  return (
    <div className="App">
      <Router>
          {/* <Nav/> */}
          <Switch>
              <WebsiteRouteNav exact path="/" component={(props)=><Home{...props}/>} />
              {/* <Route exact path="/" component={(props)=><Home{...props}/>} /> */}
              <Route exact path="/login" component={(props)=><Login{...props}/>} />
              <Route exact path="/register" component={(props)=><Register{...props}/>} />     
              
              <AppRouteNav exact path="/app" component={(props)=><Dashboard{...props}/>} />
              {/* <Route exact path="/app" component={(props)=><Dashboard{...props}/>} /> */}
              <AppRouteNav exact path="/app/myaccount" component={(props)=> <MyAccount{...props}/>} />

              <Route path='*' exact={true} component={Notfound} />

              {/* <Route exact path="/" component={()=><Website/>} />
              <Route exact path="/app" component={()=><Dashboard/>} /> */}
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

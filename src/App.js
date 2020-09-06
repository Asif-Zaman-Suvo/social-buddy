import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Posts from './Components/Posts/Posts';
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details';
import Header from './Components/Header/Header';





function App() {
  return (
    <div>
     <Header></Header>
      
      <Router> 
        
        

        <Switch>

          <Route exact path="/">
          <Posts></Posts>


          </Route>

          <Route path="/posts/:postId">
            <Details></Details>
           

          </Route>

          

          <Route path="*">
            <NotFound></NotFound>

          </Route>

          



        </Switch>





      </Router>

      

      
    </div>
  );
}

export default App;

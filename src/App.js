
import './App.css'
import React, {Component} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
 
  
} from "react-router-dom";



export default class App extends Component {

constructor (){
  super();
    this.state = {
    progress: 0,
    cond:"Dark",
    Color : "light",
     textColor : {
      color : "white",
      headcolor : "black",
      boxColor : "secondary"
     } 
 
  }

}

setProgress = (progress) =>  {
      this.setState({progress:progress})
    }
  render() {


   
   console.log(this.state.boxColor)

        const handleDarkMode = () => {
      let darkmode = document.body;
      if(darkmode.style.backgroundColor !== "black"){
        darkmode.style.backgroundColor = "black";

        this.setState({cond:"Light", Color:"dark", headcolor:"white"})
      }
      else  {
        darkmode.style.backgroundColor = "white";
        this.setState({cond:"Dark", Color:"light", headcolor:"black" });
      }
  
  }


    return ( 
   <Router>
      <div >
   
      <Navbar handleDarkMode={handleDarkMode}   mode={this.state.cond} Color={this.state.Color} />   
          
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />

      <Routes>
      <Route exact path="/general" element = {<News setProgress={this.setProgress} pageSize={10 } key="general" headcolor = {this.state.headcolor}  category="general" country= "us" />}></Route>
          <Route  exact  path="/sports" element={<News setProgress={this.setProgress}  key="sports" headcolor = {this.state.headcolor} pageSize={10} category="sports" country= "in" />}></Route>
          <Route  exact path="/business" element={<News setProgress={this.setProgress} key="business" headcolor = {this.state.headcolor} pageSize={10} category="business" country= "in" />}></Route>
          <Route  exact path="/technology" element={<News setProgress={this.setProgress} key="technology" headcolor = {this.state.headcolor} pageSize={10} category="technology" country= "us" />}></Route>
 
          <Route  exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainments" headcolor = {this.state.headcolor} pageSize={10} category="entertainment" country= "in" />}></Route>
          <Route  exact path="/health" element={<News setProgress={this.setProgress} key="health"  headcolor = {this.state.headcolor} pageSize={10} category="health" country= "in" />}></Route>
          <Route  exact path="/science" element={<News setProgress={this.setProgress} key="science" headcolor = {this.state.headcolor} pageSize={10} category="science" country= "us" />}></Route>
          </Routes>
         
      </div>
     </Router>

      
      
    )
  }
}


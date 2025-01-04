import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      on: false
    }
  }

  toggleHandler(){
    this.setState({
      on: !this.state.on
    });
  }

  render(){
    const classForDiv = this.state.on ? 'lamp-on':'lamp-off';



    return (
      <> 
      <div className={classForDiv}></div>
      <button onClick={()=>{this.toggleHandler()}}>Click ON/OFF</button>
      </>
    )
  }
}

export default App;


/* 

СОздать лампочку-кружочек и кнопку выключатель.
При нажимании на кнопку кружочек должен загорется, наполнится желтым цветом

*/
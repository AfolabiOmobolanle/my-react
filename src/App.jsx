import React,{Components} from 'react'
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

class App extends Components{
  constructor(props){
    super(props)
    this.state= { userName : "Sharafa"
    }
  }
  newName = (e) =>{
    this.setState({
      userName: e.target.value
    })
  }
   

  render () {
    return(
      <div className='App'>
      <UserOutput userName =  {this.state.userName}/>
      <UserInput change = {this.newName}/>
      </div>
   
    )
  }
};


export default App
   
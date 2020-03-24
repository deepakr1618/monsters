import React , {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component{
  constructor(){
    super()
    this.state={
      users:[],
      search:'',
      loaded:false
    }
  }
  async componentDidMount(){
    console.log("Component Rendered")
    let raw = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await raw.json()
    this.setState({users:data ,loaded:true})
  }

  changeSearch = e => {
    this.setState({search:e.target.value})
  }

  render(){
    const {users , search} = this.state;
    const fileredUsers = users.filter((user)=>{
      return user.name.toLowerCase().includes(search.toLowerCase())
    })
    
    return (
      <div className="App">
        <img className="img" width="400px" src="https://img.pngio.com/monsters-inc-logopedia-fandom-powered-by-wikia-monsters-inc-logo-1333_692.png"></img>
        <p>Data API used : <a href="https://jsonplaceholder.typicode.com/users" target="_blank">https://jsonplaceholder.typicode.com/users</a></p>
        <p>Picture API used : <a target="_blank" href="https://robohash.org/1?set=2">https://robohash.org/1?set=2</a></p>
        <SearchBox placeholder="Enter name" handleChange={this.changeSearch}></SearchBox>
        {
          !this.state.loaded?<h1>Loading data...</h1>:
          fileredUsers.length>0?<CardList users={fileredUsers}></CardList>:<h1>No such monsters 😉 !</h1>
        }
      </div>
    )
  }
}

export default App;

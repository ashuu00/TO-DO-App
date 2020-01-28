import React,{ Component} from 'react';
import './App.css';
import AddToDo from './components/AddToDo';
import Todos from './components/Todos';
class App extends Component{
state={
  todos:[
    {
      id:1,
      title:'Take out the trash',
      completed:false
    },
    {
      id:2,
      title:'Do programming',
      completed:false
    },
    {
      id:3,
      title:'Play Badminton',
      completed:false
    },
  ]
}
markFun=(id)=>{
 this.setState({todos:this.state.todos.map(
   todos=>{
     if(todos.id===id){
       todos.completed=!todos.completed
     }
     return todos;
   }
 )})
}

delItem=(id)=>{
  console.log(id);
  this.setState({todos:[...this.state.todos.filter(todo=>
    todo.id!==id)]})
}
  render() {
    console.log(this.state.todos);
    return(
    <div className="App">
       <h1 style={{textAlign:'center'
      }}>New App being created!</h1>
      <AddToDo className="App"/>
    <Todos  todosProp={this.state.todos} markFun={this.markFun}
    delItem={this.delItem}/>
    </div>
  );
  }
}
export default App;

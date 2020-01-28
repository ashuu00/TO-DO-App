//convention to create components in react
import React,{ Component} from 'react';
import ToDoList from './todoItemlist';
import propType from 'prop-types';
class Todos extends Component{
//every function must be above render


  render() {
    return(
     <div >
     
     {this.props.todosProp.map((todo) =>(
        <ToDoList key={todo.id} todo={todo} markFun={this.props.markFun}
        delItem={this.props.delItem}/>
     ))}
     
    </div>
  
    );}
}
Todos.propType={
  todosProp:propType.array.isRequired
}
export default Todos;

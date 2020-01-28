import React, { Component } from 'react'
import propType from 'prop-types'
export class todoItemlist extends Component {
    getStyle=()=>{
        return{
        backgroundColor: '#f4f4f4',
        padding : '10px',
        marginBottom: '5px',
        borderBottom: '2px #f38 solid',
        textDecoration: this.props.todo.completed?'line-through':'none'
        }
      }
    
    render() {
        //Used to pull out values from props
       const { id,title }=this.props.todo;
        return (
            <div style={this.getStyle()}>
              <h3><input type="checkbox" onChange={this.props.markFun.bind
                (this,id)}/>
              {'  '}
              {title}
              <button style={btnStyle} 
              onClick={this.props.delItem.bind(this,id)}>X</button></h3>
            </div>
        )
    }
}

todoItemlist.propType={
todo:propType.object.isRequired
}
const btnStyle={
   background: '#ff0000',
   color:'#fff',
   border:'2px dotted',
   padding:'5px 10px',
   borderRadius:'50%',
   cursor:'pointer'
}
export default todoItemlist

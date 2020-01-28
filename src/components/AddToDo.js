import React, { Component } from 'react'

export class AddToDo extends Component {
    render() {
        return (
            <div className="container">
             <input type="text" name="title"
                style={{flex:'9'}}
               placeholder="Add items for ToDo.."/>  
              <input type="submit" value="Submit"
              className="btn" style={{flex: '1'}}/>
            </div>
        )
    }
}

export default AddToDo

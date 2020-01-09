import React, { Component } from 'react'

export default class Task extends Component {
    render() {

        const { id, title, status, handleStatusChange } = this.props
        
        var color = ''

        if(status === 'Done') {
            color = 'bg-success'
        } else if(status === 'In progress') {
            color = 'bg-primary'
        } else if(status === "Not started") {
            color = 'bg-danger'
        }
        console.log(status)
        return(
                <tr className={color}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td><select name="D1" onChange={(e)=>handleStatusChange(id, e)}>
                        <option value="Done" selected={status=='Done' ? "selected" : ""}>Done</option>
                        <option value="In progress" selected={status=='In progress' ? "selected" : ""}>In Progress</option>
                        <option value="Not started" selected={status=='Not started' ? "selected" : ""}>Not Started</option>
                    </select></td>
                </tr>
        )
    }
}
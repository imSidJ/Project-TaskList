import React, { Component } from 'react'
import Task from './Task'

export default class TaskList extends Component {
    render() {

        const { tasks, handleStatusChange } = this.props

        return(
            <div className="row">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th className="col-md-6">Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task) => {
                                return(
                                    <Task
                                        key={task.id}
                                        id={task.id}
                                        title={task.title}
                                        status={task.status}
                                        handleStatusChange={handleStatusChange}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
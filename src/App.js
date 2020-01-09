import React, { Component } from 'react'
//import axios from 'axios'
import ProjectName from './components/ProjectName'
import TaskList from './components/TaskList'

import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'

export default class App extends Component {

    state = {
        tasks: [],
        id: '',
        title: '',
        status: '',
        editProjectName: false,
        projectName: 'New Project'
    }

	async componentDidMount(){
        // let response = await axios.get('https://moneytor.in/resources/data/sample.json')
        // let tasks = response.data
        // console.log(tasks)
        // Getting CORS error when trying to call the API
        let tasks = [{
            "id": 1,
            "title": "Create login page",
            "status": "Done"
        }, {
            "id": 2,
            "title": "Store encrypted passwords",
            "status": "Not started"
        }, {
            "id": 3,
            "title": "Design database tables for User models",
            "status": "Not started"
        }, {
            "id": 4,
            "title": "Fix the UI issue on Login page",
            "status": "Done"
        }, {
            "id": 5,
            "title": "Display data in tabular format",
            "status": "In progress"
        }]

        this.setState({
            tasks: tasks
        })
	}

    handleChange = (e) => {
        this.setState({
            projectName: e.target.value
        })
    }

    handleStatusChange = (id, e) => {
        console.log(e.target.value)
        console.log(id)
        let tasks = this.state.tasks
        tasks.forEach(task => {
            if (task.id == id) {
                task.status = e.target.value
            }
        })
        this.setState({
            tasks: tasks
        })
    }

    handleOnClick = (editStatus) => {
        console.log(editStatus)
        this.setState({
            editProjectName: editStatus
        })
    }

    render() {
        return(
            <div className="container">
                 <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <ProjectName
                            handleOnClick={this.handleOnClick}
                            editProjectName={this.state.editProjectName}
                            handleChange={this.handleChange}
                            projectName={this.state.projectName}
                        />
                        <TaskList
                            tasks={this.state.tasks}
                            handleStatusChange={this.handleStatusChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

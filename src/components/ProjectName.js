import React, { Component } from 'react'

export default class ProjectName extends Component {
    render() {

        const { projectName, editProjectName, handleOnClick, handleChange } = this.props 
        console.log('edit stat ' + editProjectName)

        return(
            <div className="row">
                {(!editProjectName ? <h3 className="col-md-10">{projectName}</h3>
                :
                <input
                    type="text"
                    className="form-control text-capitalize col-md-10"
                    placeholder=""
                    value={projectName}
                    onChange={handleChange}
                    required
                    />
                )}
                <button onClick={()=> handleOnClick(!editProjectName)} className={"btn col-md-2 btn btn-info" + (editProjectName ? " btn-warning" : " btn-primary")}>{(editProjectName ? 'Done' : 'Edit')}</button>
            </div>
        )
    }
}

import React, { Component } from 'react';
import SomeObjectService from "../services/SomeObjectService";
class SomeObjectListComponent extends Component {

    constructor(props) {
        super(props)
        this.refreshSomeObjectList = this.refreshSomeObjectList.bind(this)
    }

    componentDidMount() {
        this.refreshSomeObjectList();
    }

    refreshSomeObjectList() {
        SomeObjectService.retrieveAllSomeObjects("bush")
            .then(
                response => {
                    console.log(response);
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>Some Object List</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dan</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default SomeObjectListComponent

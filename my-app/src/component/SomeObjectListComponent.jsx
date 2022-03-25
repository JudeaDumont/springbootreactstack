import React, { Component } from 'react';
import SomeObjectService from "../services/SomeObjectService";

class SomeObjectListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            someObjects: [],
            message: null
        }
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
                    this.setState({ someObjects: response.data })
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>Objects and their names!</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.someObjects.map(
                                someObject =>
                                    <tr key={someObject.id}>
                                        <td>{someObject.id}</td>
                                        <td>{someObject.name}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default SomeObjectListComponent

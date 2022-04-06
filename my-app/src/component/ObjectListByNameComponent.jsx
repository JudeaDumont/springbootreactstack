import React, { Component } from 'react';
import ObjectService from "../services/ObjectService";

class ObjectListByNameComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Objects: [],
            message: null
        }
        this.refreshObjectList = this.refreshObjectList.bind(this)
    }

    componentDidMount() {
        this.refreshObjectList();
    }

    refreshObjectList() {
        ObjectService.retrieveObjectsByName("Boss")
            .then(
                response => {
                    console.log(response);
                    this.setState({ Objects: response.data })
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>Objects By their names!</h3>
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
                            this.state.Objects.map(
                                Object =>
                                    <tr key={Object.id}>
                                        <td>{Object.id}</td>
                                        <td>{Object.name}</td>
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

export default ObjectListByNameComponent

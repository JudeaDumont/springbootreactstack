import React, { Component } from 'react';
class SomeObjectListComponent extends Component {

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

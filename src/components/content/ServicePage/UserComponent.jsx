import React from 'react'
import Services from '../../../services/Services';

class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        Services.getUsers().then((response) => {
            this.setState({ users: response.data });
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Available Services</h1>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead class="thead-dark table-secondary">
                            <tr>
                                <td>User Id</td>
                                <td>User First Name</td>
                                <td>User Last Name</td>
                                <td>User email Id</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.email}</td>
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

export default UserComponent;
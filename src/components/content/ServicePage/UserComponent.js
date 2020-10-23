import React from 'react'
import UserService from '../../../services/UserService';

class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data });
        });
    }
    render() {
        return (
            <div>
                <h1>Available Services</h1>
                <table >
                    <thead>
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
        )
    }

}

export default UserComponent
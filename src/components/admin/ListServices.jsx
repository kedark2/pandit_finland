import React, { Component } from 'react';
import Services from '../../services/Services';

class ListServices extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);

    }
    componentDidMount() {
        Services.getServices().then((res) => {
            this.setState({ employees: res.data })
            console.log(res.data)
        })
        console.log(this.employees)
    }
    addEmployee() {
        this.props.history.push('/add-employee/_add')
    }
    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`)
    }
    deleteEmployee(id) {
        Services.deleterServices(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
            this.props.history.push('employees')
        });
    }
    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`)
    }
    render() {

        return (
            <div>

                <div className="row">
                    <h2 className="text-center" style={{ backgroundColor: "#e8d9d9", width: "100%" }}>Available Services</h2>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Service Price (€)</th>
                                <th>Service Provider</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.serviceName}</td>
                                            <td>{employee.servicePrice}</td>
                                            <td>{employee.serviceProvider}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListServices;
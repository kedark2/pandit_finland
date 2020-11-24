import React, { Component } from 'react'
import Services from '../../../services/Services'

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        Services.getEmployee().then((res) => {
            this.setState({
                employees: res.data
            })
        })
    }
    render() {
        console.log(this.state.employees)
        return (
            <div className="row" style={{ marginBottom: "15px" }}>
                {
                    this.state.employees.map(employee =>
                        <div class="card" style={{ width: "18rem", margin: "10px 10px 0 0" }}>
                            <img class="card-img-top" src={employee.photo} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{employee.firstName} {employee.lastName}</h5>
                                <h6>{employee.emailId}</h6>
                                <p class="card-text">{employee.details}</p>
                                <a href="#" class="btn btn-primary">Know More</a>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

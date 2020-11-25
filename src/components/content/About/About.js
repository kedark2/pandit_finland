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
            <div>

                <div class="row" >

                    <div class="col-sm-6 col-md-6 col-xs-12 image-container" style={{ margin: "10px 0 0 10px" }}>
                        <img src={"https://res.cloudinary.com/rajansu/image/upload/v1606294598/karmakanda_hqzkkp.jpg"} style={{ height: "200px", marginLeft: "-15px" }} />
                    </div>

                    <div class="col-sm-6 col-md-6 col-xs-12" style={{ margin: "10px 0 0 -300px" }}>

                        <h3>About Us</h3>
                        <p>Karmkand refers to ritual services proferred by swamis or religious Brahmins in exchange for dakshina
                            Karmakāṇḍa (कर्मकाण्ड).—The division of
                            the Vedas which deals with fruitive activities performed for the purpose of
                            gradual purification of the grossly entangled materialist; The path of fruitive
                            work. One of the three departments of Vedic knowledge, karma-kāṇḍa is taught
                            by Dakṣa. See Apara-vidyā, Jñāna-kāṇḍa, Upāsanā-kāṇḍa.
                            <br /><br />
                            We have professionals pandits who will help you to do karmakanda</p>
                    </div>
                </div>
                <div className="row" style={{ marginBottom: "15px" }}>
                    {
                        this.state.employees.map(employee =>
                            <div class="card" style={{ width: "18rem", margin: "10px 0px 10px 10px" }}>
                                <img class="card-img-top" src={employee.photo} alt="Card image cap" style={{ height: "15rem" }} />
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
            </div>
        )
    }
}

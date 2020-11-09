import React, { Component } from 'react'
import Services from '../../../services/Services'

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            puja: []
        }
    }
    componentDidMount() {
        Services.getPujaDetail().then((res) => {
            this.setState({
                puja: res.data
            })
        })
    }
    render() {
        console.log(this.puja)

        return (
            <div>
                <div class="card" style={{ width: "18rem" }}>
                    <img class="card-img-top" src="https://res.cloudinary.com/rajansu/image/upload/v1604939174/IMG_20190523_195103_priak8.jpg" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Know More</a>
                    </div>
                </div>
            </div>
        )
    }
}

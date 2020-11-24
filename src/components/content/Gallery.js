import React, { Component } from 'react'
import Services from '../../services/Services'



export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pujas: []
        }
    }
    componentDidMount() {
        Services.getPujaDetail().then((res) => {
            this.setState({
                pujas: res.data
            })
        })
    }
    render() {
        console.log(this.state.pujas)

        return (
            <div className="container">
                <div className="row" >
                    {
                        this.state.pujas.map(puja =>
                            <div class="card" style={{ width: "20rem", margin: "10px 10px 0 0" }}>
                                <img class="card-img-top" src={puja.pujaPhoto} alt="Card image cap" style={{ height: "20rem" }} />
                                <div class="card-body">
                                    <h5 class="card-title">{puja.pujaName}</h5>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}


import React, { Component } from 'react'
import Services from '../../../services/Services'



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
                <div className="row" style={{ margin: "10px 0 10px 0" }}>
                    {
                        this.state.pujas.map(puja =>
                            <div class="col-12 col-sm-6 col-md-8">
                                <div class="card" style={{ width: "18rem" }}>
                                    <img class="card-img-top" src={puja.pujaPhoto} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">{puja.pujaName}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

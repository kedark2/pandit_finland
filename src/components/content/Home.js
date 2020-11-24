import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
import Services from '../../services/Services'

const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10, marginRight: 20 }
}


export default class Home extends Component {
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
            <div className="row">
                {
                    this.state.pujas.map(puja =>
                        <div class="card" style={{ width: "18rem", margin: "10px 10px 0 0" }}>
                            <div class="card-body">
                                <img style={{ height: "50px", width: "50px", alignContent: "center" }} class="card-img-top" src={puja.pujaPhoto} alt="Card image cap" />
                                <h3 class="card-title">{puja.pujaName}</h3>
                                <p class="card-text">{puja.pujaDescription}</p>
                                <h5>Items needed : {puja.pujaItems}</h5>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

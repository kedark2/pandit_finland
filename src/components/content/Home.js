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
            <div className="row" style={{ backgroundColor: "#f2f2f2" }}>
                {
                    this.state.pujas.map(puja =>
                        <div className="card" style={{ width: "25rem", margin: "10px 0px 10px 30px", boxShadow: "0 0 5px #303030", borderRadius: "8px" }}>
                            <div style={{ position: "relative", textAlign: "center", color: "white" }}>
                                <img style={{ height: "250px", display: "flex", justifyContent: "center" }} class="card-img-top" src={puja.pujaPhoto} alt="Card image cap" />
                                <div className="custom-card-title">{puja.pujaName}</div>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{puja.pujaDescription}</p>
                                <hr />
                                <h6 style={{ color: "orangered" }}>Items needed : </h6>{puja.pujaItems}
                            </div>
                        </div>
                    )
                }
            </div>


            //kasdflk


            //lkjsdf

        )
    }

}


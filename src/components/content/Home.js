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

                <RightPane styles={styles} />

                <LeftPane styles={styles} />
                {
                    this.state.pujas.map(puja =>
                        <div class="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src={puja.pujaPhoto} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{puja.pujaName}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Know More</a>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

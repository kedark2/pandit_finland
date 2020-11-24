import React, { Component, useState } from 'react'
import '../../App.css'
import Services from '../../services/Services'


class Mantras extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pujas: [],

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

        return (
            <div className="Mantras">
                <h2>Hello from mantras</h2>
                {
                    this.state.pujas.map(puja =>
                        <div>
                            <a className="read-more-link" ><h2>{puja.pujaName}</h2></a>
                        </div>
                    )
                }
            </div>
        )

    }
}

export default Mantras
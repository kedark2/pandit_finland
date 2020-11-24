import React, { Component, useState } from 'react'
import '../../App.css'
import Services from '../../services/Services'
import { StylesContext } from '@material-ui/styles';


class Mantras extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mantras: [],
            showing: false,
            text: 'kale',

        }
    }
    componentDidMount() {
        Services.getMantras().then((res) => {
            this.setState({
                mantras: res.data
            })
        })
    }
    render() {
        const { showing } = this.state;
        console.log(this.state.mantras)
        return (
            <div className="Mantras">
                <div >
                    {
                        this.state.mantras.map(mantra =>
                            <div>
                                <div>
                                    <button key={mantra.id} type="button" onClick={() => this.setState({ text: mantra.mantra })} class="list-group-item list-group-item-action active">
                                        {mantra.mantraTitle}
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div ><h3>{this.state.text}</h3></div>
            </div>
        )

    }
}

export default Mantras
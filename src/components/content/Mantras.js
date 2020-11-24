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
            text: 'Select the Mantras you want to read on the left.',

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
            <div className="container">
                <div className="row" style={{ margin: "15px 0 15px 0" }}>
                    <div className="col-md-auto" >
                        {
                            this.state.mantras.map(mantra =>
                                <div>
                                    <div>
                                        <button key={mantra.id} type="button" onClick={() => this.setState({ text: mantra.mantra })} class="list-group-item list-group-item-action">
                                            {mantra.mantraTitle}
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="col" dangerouslySetInnerHTML={{ __html: `${this.state.text}` }}></div>
                </div>
            </div>
        )

    }
}

export default Mantras
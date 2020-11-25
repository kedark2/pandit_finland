import React, { Component } from 'react'
import Services from '../../services/Services'



export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: []
        }
    }
    componentDidMount() {
        Services.getPhotos().then((res) => {
            this.setState({
                photos: res.data
            })
        })
    }
    render() {
        console.log(this.state.photos)

        return (

            <div className="row" style={{ marginBottom: "15px" }}>
                {
                    this.state.photos.map(photo =>
                        <div class="card" style={{ width: "20rem", margin: "10px 0px 10px 25px" }}>
                            <img class="card-img-top" src={photo.photoUrl} alt="Card image cap" style={{ height: "20rem" }} />
                            <div class="card-body">
                                <h5 class="card-title">{photo.photoTitle}</h5>
                            </div>
                        </div>
                    )
                }
            </div>

        )
    }
}


import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Admin extends Component {
    render() {
        return (
            <div>
                <h1>Hello from admin</h1>
                <Footer />
            </div>
        )
    }
}

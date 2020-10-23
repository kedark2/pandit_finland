import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="#" className="navbar-brand">Admin Panel</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;
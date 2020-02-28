import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Features</a>
                    <a className="p-2 text-dark" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Enterprise</a>
                    <a className="p-2 text-dark" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Support</a>
                    <a className="p-2 text-dark" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Pricing</a>
                </nav>
                <a className="btn btn-outline-primary" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Sign up</a>
            </div>

        );
    }
}

export default Header;
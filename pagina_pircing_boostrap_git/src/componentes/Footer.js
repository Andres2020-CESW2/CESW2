import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="container">
                <footer className="pt-4 my-md-5 pt-md-5 border-top">
                    <div className="row">
                        <div className="col-12 col-md">
                            <img className="mb-2" src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
                            <small className="d-block mb-3 text-muted">2017-2019</small>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Cool stuff</a></li>
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Random feature</a></li>
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Team feature</a></li>
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Stuff for developers</a></li>
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Another one</a></li>
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Last time</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Resource</a></li>
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Resource name</a></li>
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Another resource</a></li>
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Final resource</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Team</a></li>
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Locations</a></li>
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Privacy</a></li>
                                <li><a className="text-muted" href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiT6bugifPnAhUmiOAKHSJlBiEQPAgH">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
import React from 'react'
import { Container, Row, Col, Button, Border } from 'reactstrap'

const Error = () => {
    return (
        <div>
            <Container className="mt-5 h-100 mh-100">
                <div className="row border border-secondary rounded">
                    <div className="col-sm-12 col-md-6 offset-md-3 text-center">
                        <h1>404 Page not found</h1>
                        <p>The Page you are trying to access does not exist. Please Go to Main Page</p>
                        <Button color="primary">Home Page</Button>{' '}
                    </div>
                </div>            
            </Container>

        </div>
    )
}

export default Error

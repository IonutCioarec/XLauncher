import React from 'react';
import {Sidenav} from "sidenav/sidenav";
import {Navbar} from "navbar/navbar";
import 'assets/css/globals.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Layout(props) {

    return (
        <div className='page-container'>
            <Sidenav/>
            <Container className="main-container">
                    <Row>
                        <Col>
                            <Navbar/>
                            {props.children}
                        </Col>
                    </Row>
            </Container>
        </div>
    );
}

export default Layout;
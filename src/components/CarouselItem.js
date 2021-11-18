import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { Container } from 'react-bootstrap';

export default class CarouselItem extends Component {
    render() {
        return (
            <Container>
                <Card style={{ width: '40rem', margin: 'auto', background: 'black' }} id="card">
                    <Card.Body>
                        <Card.Img variant="top" src={"https://images.unsplash.com/photo-1610144591825-d5e31490f7c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"} style={{ height: "500px" }} />
                        <Card.ImgOverlay>
                            <Card.Title style={{ background: 'rgba(128,128,128,0.5)' }}>{this.props.place.location}</Card.Title>
                            <Card.Text style={{ overflow: 'auto', color: 'white', background: 'rgba(128,128,128,0.5)' }}>
                                <p>{this.props.place.city}, {this.props.place.state}</p>
                                <p>{this.props.place.description}</p>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card.Body>
                </Card >
            </Container>
        )
    }
}

{/* <Card.Body>
    <Card.Title>{this.props.place.location}</Card.Title>
    <Card.Text>
        <p>{this.props.place.city}, {this.props.place.state}</p>
        <p>{this.props.place.description}</p>
    </Card.Text>
    <Card.Img variant="top" src={"https://images.unsplash.com/photo-1610144591825-d5e31490f7c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"} />
</Card.Body>

<img src="https://images.unsplash.com/photo-1610144591825-d5e31490f7c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
                <Carousel.Caption>
                    <h3>{this.props.place.location}</h3>
                    <p>{this.props.place.city}, {this.props.place.state}</p>
                    <p>{this.props.place.description}</p>
                </Carousel.Caption> */}
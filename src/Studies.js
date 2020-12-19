import React from 'react';
import firstImage from './assets/bus.png';
import secondImage from './assets/asdasd.png';
import thirdImage from './assets/third.png';
import { Button, Card, CardDeck, CardImg, CardText, CardTitle } from 'reactstrap';
import './Studies.css';

function Studies() {
    return (
        <div className="casestudies" style={{textAlign: "center"}}><br></br><br></br><br></br><br></br>
            <h2>Case Studies</h2>
            <p> What is Lorem Ipsum Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry Lorem Ipsum<br></br>has been
             an unknown printer took a galley of specimen book it has</p>
            <CardDeck>
            <Card style={{ width: '10rem' }}>
                <CardImg varient="top" src={firstImage} alt="xyz" />
                <CardTitle>Card Title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of
      the card's content.</CardText>
                <Button varient="primary">Read More</Button>
            </Card>
            <Card style={{ width: '10rem' }}>
                <CardImg varient="top" src={secondImage} alt="xyz"/>
                <CardTitle>Card Title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of
      the card's content.</CardText>
                <Button varient="primary" style={{marginTop:'1.3%'}}>Read More</Button>
            </Card>
            <Card style={{ width: '10rem' }}>
                <CardImg varient="top" src={thirdImage} alt="xyz" />
                <CardTitle>Card Title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of
      the card's content.</CardText>
                <Button varient="primary">Read More</Button>
            </Card>
            </CardDeck>
        </div>
    )
}

export default Studies

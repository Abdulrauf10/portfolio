import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Portfolio.css';

import Web1 from '../images/Capture.JPG';
import Furniture from '../images/furniture.JPG'


const Portfolio = () => {
  return (
    <div className='portfolio'>
        <Card style={{ width: '45%' }} className='card'>
          <Card.Img variant="top" src={Furniture} />
          <Card.Body>
            <Card.Title>Furniture-shop</Card.Title>
            <Card.Text>
              An online store to purchase furniture. Users can buy more than one product with a different kind of item at once. 
            </Card.Text>
            <Card.Text>
              Technologies: NodeJs, Sequelize, ReactJs, Redux-toolkit, Bootstrap, react-toastify, PostgreSQL 
            </Card.Text>
            <Button href='https://furniture-shop.rauf-fullstack.com' target='#' variant="primary" className='button_toweb'>Website</Button>
            <Button href='https://github.com/Abdulrauf10/furniture-shop' target='#' variant="primary">Code</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '45%' }} className='card'>
          <Card.Img variant="top" src={Web1} />
          <Card.Body>
            <Card.Title>List-destination</Card.Title>
            <Card.Text>
              An application to make lists for destinations place where users can input and delete a photo and descriptions. 
            </Card.Text>
            <Card.Text>
              Technologies: NodeJs, Mongoose, ReactJs, Redux-Thunk, MongoDB 
            </Card.Text>
            <Button href='http://tourist-destination.rauf-fullstack.com' target='#' variant="primary" className='button_toweb'>Website</Button>
            <Button href='https://github.com/Abdulrauf10/tourist-destination-final' target='#' variant="primary">Code</Button>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Portfolio;

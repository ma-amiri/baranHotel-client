import "./searchItem.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const SearchItem = ({ roomId }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/rooms/${roomId}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [roomId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="searchItem">
      <Row>
        <Col >
          <img
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="hotelroom"
            className="Img"
          />
          {/* <img src={item.photos[0]} alt="" className="siImg" /> */}
        </Col>
        <Row className="Desc">
          <h1 className="Title">{item.name}</h1>
          <span className="Distance">{item.distance}from center</span>
          <span className="Location">{item.location}location</span>
          <span className="Subtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="Features">
            {item.desc}
          </span>

        </Row>
        <Row className="Details">
          <Col >
            <div className="DetailTexts">
              <span className="Price">{item.price} CHF/days</span>
              <span className="TaxOp">Includes taxes and fees</span>
              <Link to={`/hotels/${item.id}`}>
                <button className="CheckButton">Book Now</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default SearchItem;





import React from 'react'
import { Link } from "react-router-dom";
import Navlist from "../Pages/Navlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../contexts/SearchedContex";
import { AuthContextProvider } from "../contexts/AuthContext"
import { useContext, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Room() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const { data, loading, error } = useFetch(`/hotels/find/${id}`);
    //   const { user } = useContext( AuthContextProvider);
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };
    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    };

    return (
        <Container>
            <Navlist />
            {loading ? (
                "loading"
            ) : (
                <div className="hotelContainer">
                    {open && (
                        <div className="slider">
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                className="close"
                                onClick={() => setOpen(false)}
                            />
                            <FontAwesomeIcon
                                icon={faCircleArrowLeft}
                                className="arrow"
                                onClick={() => handleMove("l")}
                            />
                            <div className="sliderWrapper">
                                <img
                                    src={data.photos[slideNumber]}
                                    alt=""
                                    className="sliderImg"
                                />
                            </div>
                            <FontAwesomeIcon
                                icon={faCircleArrowRight}
                                className="arrow"
                                onClick={() => handleMove("r")}
                            />
                        </div>
                    )}
                    <Row className="hotelWrapper">
                        <h1 className="hotelTitle">{data.name}</h1>
                        <Col className="hotelAddress">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{data.address}</span>
                            <span>Luzern</span>
                        </Col>
                        <span className="hotelDistance">
                            Excellent location – {data.distance}100m from center
                        </span>
                        <Col className="hotelPriceHighlight">
                            Book a stay  over 300CHF{data.cheapestPrice} at this property and get a
                            free airport taxi
                        </Col>
                        <Col className="hotelImages">
                            {/* {data.photos?.map((photo, i) => ( */}
                            <div className="hotelImgWrapper" >
                                <img
                                    onClick={() => handleOpen()}
                                    src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=2000"
                                    alt="room"
                                    className="hotelImg"
                                    style={{ width: "100%", height: "40vh" }}
                                />
                            </div>
                            {/* ))} */}
                        </Col>

                        <Row className="hotelDetailsPrice">
                            <Col>
                                Located in the real heart of Luzern, this property has an
                                excellent location !
                                <br /><br />
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis quia accusantium nam reiciendis quasi praesentium numquam et obcaecati, quaerat perferendis soluta magni quo sequi excepturi distinctio temporibus reprehenderit aut vel.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis quia accusantium nam reiciendis quasi praesentium numquam et obcaecati
                            </Col>
                            <Col style={{ display: "flex ", justifyContent: "center" }}>
                                <Link to={`/hotels/payment`}>
                                    <button className="CheckButton" >Pay NOW</button>
                                </Link></Col>
                        </Row>
                        <Row className="hotelDetails">
                            <Col className="hotelDetailsTexts">
                                <h1 className="hotelTitle">{data.title}</h1>
                                <p className="hotelDesc">{data.desc}</p>
                            </Col>

                        </Row>
                    </Row>

                </div>
            )}
        </Container>
    );
};


export default Room


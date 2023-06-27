import "./list.css";
import Navlist from "../Pages/Navlist"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
// import SearchItem from "../searchItem/SearchItem"
import SearchItem from "../searchItem/searceItem1"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navlist />
      <br /><br /><br /><br />
      <Container>
        <Row className="listContainer">
          <Row className="listWrapper">
            <Row className="listSearch" md={12}>
              <h1 className="lsTitle">Search</h1>
              <Col className="lsItem">
                <label>Destination</label>
                <input placeholder={destination} type="text" className=" input-style" />
              </Col>
              <Col className="lsItem">
                <label>Check-in Date</label>
                <span onClick={() => setOpenDate(!openDate)} className=" input-style">{`${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </Col>
              <Col className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput input-style" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput input-style" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput  input-style"
                      placeholder={options.adult}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput input-style"
                      placeholder={options.children}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput input-style"
                      placeholder={options.room}
                    />
                  </div>
                </div>
              </Col>
              <button>Search</button>
            </Row>

            <Row className="listResult" >
              <Col md={12}>
                <SearchItem />
                <SearchItem />
                <SearchItem />
              </Col>
            </Row>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default List;

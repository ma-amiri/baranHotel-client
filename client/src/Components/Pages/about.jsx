
import "./about.css"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import image from '../../assets/hot1.avif'

const AboutSection = () => {
  return (
    <>
      <Container>
        <Row>
          <div >
            <img src={image} className="about-image" />
            <div class="container">
              <div class="info-left">
                <h1 class="l-heading"> <span class="text-primary">About</span> our Hotel </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi omnis fugiat, quasi saepe provident non nulla itaque porro alias error. Similique repellendus odit enim illum, iusto tempore libero obcaecati.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus architecto labore facere expedita recusandae nesciunt beatae laudantium dolores rerum!</p>
              </div>
              <div class="info-right">
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="clr"></div>

          <div id="testimonials" class="py-3">
            <div class="container">
              <h2 class="l-heading ">Our mission</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nobis cum, doloremque culpa laborum sequi fugiat laboriosam iure, voluptatem autem voluptatum animi eos. Hic consectetur beatae reiciendis. Quidem, optio illum.</p>

            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default AboutSection;
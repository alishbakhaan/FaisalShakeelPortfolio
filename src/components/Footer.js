import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assetss/img/logo.png";
import navIcon1 from "../assetss/img/icon-3.png"
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://wa.me/03162658262" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="WhatsApp" />
                </a>
            </div>
            <p>faisalshakeel12@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

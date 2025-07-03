import { Container, Row, Col } from 'react-bootstrap';
import {
  MapPin,
  Clock,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Phone,
  MousePointer,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="footer-section text-white position-relative"
      style={{ background: '#0d0d0d', overflow: 'hidden' }}
    >
      {/* Background Overlay */}
      <div
        className="footer-overlay position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: 'url(/your-dark-tech-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          zIndex: -1,
        }}
      ></div>

      <Container className="py-5">
        {/* Links */}
        <Row className="mb-4 text-center">
          <Col>
            <ul className="nav justify-content-center flex-wrap gap-2">
              {['iPhone Repair', 'iPad Repair', 'Computer Repair', 'Smartphone Repair'].map(
                (link, idx) => (
                  <li key={idx} className="nav-item">
                    <a href="#" className="nav-link text-white-50 small fw-semibold px-3">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </Col>
        </Row>

        {/* Contact and Social */}
        <Row className="text-center text-md-start gy-4">
          <Col md={12} className="d-flex flex-column align-items-center">
            {/* Social Icons */}
            <div className="mb-3 d-flex gap-3 justify-content-center">
              <a href="#" className="text-white-50 hover-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white-50 hover-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white-50 hover-icon">
                <Instagram size={20} />
              </a>
            </div>

            {/* Phone */}
            <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center mb-3">
              <Phone size={18} className="text-primary" />
              <h5 className="mb-0 fw-semibold">
                Call Us:{" "}
                <a
                  href="tel:+18001234567"
                  className="text-info text-decoration-none"
                >
                  +1-800-1234567
                </a>
              </h5>
            </div>

            {/* Info Row */}
            <div className="d-flex flex-column flex-md-row justify-content-center gap-4 small text-white-50 mb-4 text-center text-md-start">
              <div>
                <MapPin size={16} className="me-1 text-primary" />
                5604 Willow Crossing Ct, Clifton, VA, 20124
              </div>
              <div>
                <Clock size={16} className="me-1 text-primary" />
                Mon–Fri: 7am–7pm 
              </div>
              <div>
                <Mail size={16} className="me-1 text-primary" />
                <a
                  href="mailto:noreply@envato.com"
                  className="text-white-50 text-decoration-none"
                >
                  noreply@envato.com
                </a>
              </div>
            </div>

            {/* Bottom Legal */}
            <p className="small text-white-50 mb-1">
              © 2025 INFINITE SOLUTIONS. All Rights Reserved.
            </p>
            <p className="small text-white-50">
              <a href="#" className="text-white-50 text-decoration-underline me-3">
                Terms & Conditions
              </a>
              |
              <a href="#" className="text-white-50 text-decoration-underline ms-3">
                Privacy Policy
              </a>
            </p>
          </Col>
        </Row>
      </Container>

      {/* Mouse Scroll Icon
      <div className="position-absolute bottom-0 end-0 pe-4 pb-3 opacity-25">
        <MousePointer size={28} className="text-white" />
      </div> */}
    </footer>
  );
};

export default Footer;

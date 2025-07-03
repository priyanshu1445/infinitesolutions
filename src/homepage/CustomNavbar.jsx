import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Download, HelpCircle } from 'lucide-react'; // Lucide icons
import logo from '../assets/logo-removebg-preview.png';
import '../style/global.css';

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar backdrop-blur bg-opacity-75 shadow-sm"
    >
      <Container>
        {/* Left: Logo */}
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center: Nav Links */}
          <Nav className="mx-auto gap-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Right: Buttons with Icons */}
          <div className="d-flex gap-3">
            <Button variant="primary" className="fw-semibold d-flex align-items-center gap-2">
              <Download size={18} />
              Download App
            </Button>
            <Button variant="primary" className="fw-semibold d-flex align-items-center gap-2">
              <HelpCircle size={18} />
              Support
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

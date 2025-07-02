import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/apple.png'; // Replace with your actual logo path
import '../style/global.css'; // Optional CSS for bl



const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar backdrop-blur  bg-opacity-75 shadow-sm"
    >
      <Container>
        {/* Left: Logo */}
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center: Nav Links */}
          <Nav className="mx-auto gap-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          {/* Right: Button */}
          <div className="text-end">
            <Button variant="primary" className="fw-semibold">
              Download App
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

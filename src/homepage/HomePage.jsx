import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import cat6 from '../assets/cat4.jpg';
import cat4 from '../assets/hero2.jpg';
import cat5 from '../assets/hero3.jpg';
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import { Smartphone, Download } from 'lucide-react';
import androidLogo from '../assets/android.png'
import { HelpCircle } from 'lucide-react';
import {  Accordion } from 'react-bootstrap';
import hpLogo from '../assets/hp.png';
import dellLogo from '../assets/dell.png';
import lenovoLogo from '../assets/lenovo.png';
import asusLogo from '../assets/asus.png';
import acerLogo from '../assets/acer.png';
import appleLogo from '../assets/apple.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import {
  User,
  MousePointerClick,
  MessageCircle,
  Handshake,
  Star,
  Stethoscope,
} from 'lucide-react';
import '../style/global.css';
import { MessageSquare, ClipboardList, Laptop } from 'lucide-react';

import {
  MonitorSmartphone,
  HardDrive,
  Wrench,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import Footer from './Footer';



const faqData = [
  {
    question: 'What types of devices do you repair?',
    answer: 'We repair laptops, desktops, Macs, tablets, and most major electronic devices.',
  },
  {
    question: 'How long does a typical repair take?',
    answer: 'Most repairs are completed within 24-48 hours depending on the complexity.',
  },
  {
    question: 'Do you offer pickup and delivery service?',
    answer: 'Yes, we offer free pickup and delivery service within city limits.',
  },
  {
    question: 'Is there a diagnostic fee?',
    answer: 'No! We offer free diagnosis and provide an estimate before any repair.',
  },
  {
    question: 'Do you use genuine parts?',
    answer: 'Yes, we use high-quality and genuine parts for all replacements and repairs.',
  },
];

const testimonials = [
  {
    name: 'Anjali Sharma',
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    feedback:
      'Fast service and amazing support! My laptop was picked up, fixed, and returned the same day!',
  },
  {
    name: 'Rahul Verma',
    role: 'Business Owner',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    feedback:
      'Excellent work! Very professional team and pricing was honest. Highly recommend for tech repair!',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Graphic Designer',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    feedback:
      'They fixed my MacBook screen in hours. It looks brand new now. Super happy with the results!',
  },
  {
    name: 'Kunal Mehta',
    role: 'Marketing Head',
    image: 'https://randomuser.me/api/portraits/men/72.jpg',
    feedback:
      'Impressed with their doorstep pickup and quick delivery. Highly recommended for busy professionals.',
  },
  {
    name: 'Pooja Batra',
    role: 'Content Creator',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
    feedback:
      'I’ve tried many services, but this one stands out! Transparent pricing and awesome results.',
  },
];

const brandLogos = [
  { src: hpLogo, alt: 'HP' },
  { src: dellLogo, alt: 'Dell' },
  { src: lenovoLogo, alt: 'Lenovo' },
  { src: asusLogo, alt: 'Asus' },
  { src: acerLogo, alt: 'Acer' },
  { src: appleLogo, alt: 'Apple' },
];

const reasons = [
  {
    title: 'Experienced Professionals',
    desc: 'We pride ourselves on being a professional computer repair facility',
    icon: <User size={40} color="#4f46e5" />,
    aos: 'fade-up',
  },
  {
    title: 'Expert Technical Skills',
    desc: 'Our technical experts will get you honest, reliable and professional help',
    icon: <MousePointerClick size={40} color="#4f46e5" />,
    aos: 'fade-up',
  },
  {
    title: 'Trustworthy See Reviews',
    desc: 'Our business has been built on trust and customer satisfaction',
    icon: <MessageCircle size={40} color="#4f46e5" />,
    aos: 'fade-up',
  },
  {
    title: 'Friendly Service',
    desc: 'Most services are repaired within hours or same day!',
    icon: <Handshake size={40} color="#4f46e5" />,
    aos: 'fade-up',
  },
  {
    title: 'Excellent Reputation',
    desc: 'Built on attention to detail and loyal service to our customers',
    icon: <Star size={40} color="#4f46e5" />,
    aos: 'fade-up',
  },
  {
    title: 'Affordable Diagnosis',
    desc: 'We diagnose your issues and provide you a FREE price estimate!',
    icon: <Stethoscope size={40} color="#4f46e5" />,
    aos: 'fade-up',
  },
];


const steps = [
  {
    title: 'Consultations',
    desc: 'Get a professional consultation and understand your device needs.',
    icon: <MessageSquare size={36} color="#3b82f6" />,
    aos: 'fade-up',
  },
  {
    title: 'Examine Problem',
    desc: 'Examine the best possible solutions for the problem ',
    icon: <ClipboardList size={36} color="#3b82f6" />,
    aos: 'fade-up',
  },
  {
    title: 'Solution',
    desc: 'We fix your device fast and reliably — it’s ready to go!',
    icon: <Laptop size={36} color="#3b82f6" />,
    aos: 'fade-up',
  },
];

const services = [
  {
    icon: <MonitorSmartphone size={40} />,
    title: 'Diagnosing Your Device',
    desc: 'We will diagnose your issues, provide you with options and give you a price for FREE!',
    aos: 'fade-up',
  },
  {
    icon: <HardDrive size={40} />,
    title: 'Hardware & Software Installation',
    desc: 'We can help you determine what hardware install or software installing solutions will fit your needs.',
    aos: 'fade-up',
  },
  {
    icon: <Wrench size={40} />,
    title: 'Professional Computer Repair',
    desc: 'We fix all sorts of computer issues! From software to hardware we have the solution!',
    aos: 'fade-up',
  },
  {
    icon: <ShieldCheck size={40} />,
    title: 'Virus & Spyware Removal',
    desc: 'We work through a remote super-secure connection, and give you a full report when our work is done.',
    aos: 'fade-up',
  },
];

const cards = [
  {
    title: 'Apple & Mac',
    image: cat1,
    content: 'We repair all Apple devices including iMacs, MacBooks, and more.',
    animation: 'zoom-in',
  },
  {
    title: 'PC & Computer',
    image: cat2,
    content: 'We service all brands: HP, Dell, Lenovo, Asus, etc.',
    animation: 'zoom-in',
  },
  {
    title: 'Laptop',
    image: cat3,
    content: 'Fast and affordable laptop repairs for all brands.',
    animation: 'zoom-in',
  }, {
    title: 'CPU',
    image: cat4,
    content: 'We repair all Apple devices including iMacs, MacBooks, and more.',
    animation: 'zoom-in',
  },
  {
    title: 'GPU',
    image: cat5,
    content: 'We service all brands: HP, Dell, Lenovo, Asus, etc.',
    animation: 'zoom-in',
  },
  {
    title: 'MOTHERBOARD',
    image: cat6,
    content: 'Fast and affordable laptop repairs for all brands.',
    animation: 'zoom-in',
  },
];


const HomePage = () => {
  return (
    <div>
      <section className="hero-section hero-background  div-box">
      <Container className='mt-5'>
        <Row className="align-items-center g-5">
          {/* Hero Text */}
          <Col lg={7} data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-3">
              Fast & Reliable <span className="text-white">Tech Repairs</span>
            </h1>
            <p className=" text-white fs-5 mb-4">
              We fix laptops, desktops, and gadgets with same-day pickup & delivery. Quality repairs, affordable pricing.
            </p>
            <ul className="list-unstyled fs-6 text-white">
              <li className="mb-2">✅ Free Diagnosis & Quote</li>
              <li className="mb-2">✅ Certified Technicians</li>
              <li>✅ No Fix, No Fee Guarantee</li>
            </ul>
          </Col>

          {/* Hero Form */}
          <Col lg={5} data-aos="fade-left">
            <div className="p-4 bg-white rounded-4 shadow">
              <h4 className="fw-semibold mb-3">Get a Free Quote</h4>
            <Form>
  <Row className="g-3">
    {/* Name */}
    <Col md={6}>
      <Form.Control type="text" placeholder="Full Name" required />
    </Col>

    {/* Email */}
    <Col md={6}>
      <Form.Control type="email" placeholder="Email Address" required />
    </Col>

    {/* Phone Number */}
    <Col md={6}>
      <Form.Control type="tel" placeholder="Phone Number" required />
    </Col>

    {/* Alternate Number */}
    <Col md={6}>
      <Form.Control type="tel" placeholder="Alternate Phone Number" />
    </Col>

    {/* Pickup Address */}
    <Col xs={12}>
      <Form.Control
        type="text"
        placeholder="Pickup Address"
        required
      />
    </Col>

    {/* Problem Type */}
    <Col xs={12}>
      <Form.Select required>
        <option value="">Select Issue Type</option>
        <option>Laptop</option>
        <option>Computer</option>
        <option>CPU</option>
        <option>GPU</option>
        <option>Motherboard</option>
        <option>Hard Disk</option>
        <option>Display Issue</option>
      </Form.Select>
    </Col>

    {/* Description */}
    <Col xs={12}>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Describe your issue..."
        required
      />
    </Col>

    {/* Video File Upload */}
    <Col xs={12}>
      <Form.Group controlId="formFile">
        <Form.Label>Upload Video (optional)</Form.Label>
        <Form.Control type="file" accept="video/*" />
      </Form.Group>
    </Col>

    {/* Submit Button */}
    <Col xs={12}>
      <Button type="submit" className="w-100 btn btn-primary fw-semibold">
        Request Callback
      </Button>
    </Col>
  </Row>
</Form>

            </div>
          </Col>
        </Row>
      </Container>
    </section>

     <Container className="div-box">
  <Row className="g-4">
    {cards.map((card, index) => (
      <Col key={index} xs={12} sm={6} lg={4} data-aos={card.animation}>
        <div className="hover-card-wrapper position-relative overflow-hidden rounded-4 shadow-sm">
          {/* Background Image */}
          <img
            src={card.image}
            alt={card.title}
            className="w-100 object-fit-cover"
            style={{ height: '350px', transition: '0.5s ease' }}
          />

          {/* Title Overlay (Always Visible) */}
          <div className="title-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
            <h3 className="text-white fw-bold fs-4 bg-dark bg-opacity-50 px-3 py-2 rounded">
              {card.title} Repair
            </h3>
          </div>

          {/* Hover Overlay */}
          <div className="hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4">
            <p className="text-light small mb-3">{card.content}</p>
            <Button variant="light">More Info</Button>
          </div>
        </div>
      </Col>
    ))}
  </Row>
</Container>


      <section className=" text-center div-box bg-light">
        <Container>
          <h1 className="display-5  mb-3">Get Your Computer Fixed NOW!</h1>
          <h1 className="display-6 gradient-text mb-3">+1-800-1234567</h1>
          <p className="fst-italic text-muted text-center mb-5 fs-5">
            for one of our professional computer repair techs to help you with your Desktop, Laptop, Mac or other inquiry
          </p>
          <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center">
            <button className="btn btn-primary px-4 py-2">Get Your Repair</button>
            <button className="btn btn-outline-primary px-4 py-2">Contact Us</button>
          </div>
        </Container>
      </section>

      <Container className='div-box'>
        <h2 className=" display-6 text-center mb-3">
          All Computer <span className="text-gradient">& Tablet Services</span>
        </h2>
        <p className="fst-italic text-muted text-center mb-5 fs-5">
          We can solve your hardware and software problems with expert care.
        </p>

        <Row className="gy-4 gx-4">
          {services.map((service, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              lg={3}
              data-aos={service.aos}
              className="d-flex"
            >
              <div className="service-card flex-fill p-4 rounded-4 shadow-sm text-center bg-white h-100 transition">
                <div
                  className="icon-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{ width: 80, height: 80 }}
                >
                  {service.icon}
                </div>
                <h5 className="fw-semibold mb-2">{service.title}</h5>
                <p className="text-muted small">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

     

    {/*  ends here  */}



    {/* amother starts */}


     <section className="div-box bg-light how-to-order-section">
      <Container>
        <div className="text-center mb-5">
          <p className="text-uppercase text-muted fw-semibold small" data-aos="fade-up">
            How we work
          </p>
          <h2 className="fw-bold display-6" data-aos="fade-up" data-aos-delay="100">
            Easy steps for getting the <span className="text-gradient">services</span>
          </h2>
        </div>

        <div className="position-relative">
          {/* Dashed connecting line for desktop */}
          <div className="horizontal-line d-none d-lg-block"></div>

          <Row className="gy-3 justify-content-center">
            {steps.map((step, index) => (
              <Col key={index} md={6} lg={4} data-aos={step.aos} data-aos-delay={index * 150}>
                <div className="p-4 bg-white rounded-4 shadow-sm h-100 text-center position-relative step-box">
                  <div className="mb-3">{step.icon}</div>
                  <h5 className="fw-bold mb-2">{step.title}</h5>
                  <p className="text-muted small">{step.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>


    {/*  ends here  */}

    {/*  download app section  */}


 <section className="download-app-section text-white d-flex align-items-center">
  <div className="container text-center py-5">
    <h2 className="display-5 fw-bold mb-3">Get Our App</h2>
    <p className="lead mb-4">
      Book repairs, track service, and get support — right from your phone!
    </p>
    <div className="d-flex flex-wrap justify-content-center gap-3">
      <a
        href="#"
        className="btn btn-light px-4 py-2 fw-semibold shadow-sm d-flex align-items-center gap-2"
      >
        <img
          src={androidLogo}
          alt="Android"
          style={{ width: 20, height: 20, objectFit: 'contain' }}
        />
        Android App
      </a>
      <a
        href="#"
        className="btn btn-light px-4 py-2 fw-semibold shadow-sm d-flex align-items-center gap-2"
      >
        <img
          src={appleLogo}
          alt="iOS"
          style={{ width: 35, height: 35, objectFit: 'contain' }}
        />
        iOS App
      </a>
    </div>
  </div>
</section>





    {/*  starts here  */}



        <section className="div-box bg-white why-choose-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <p className="fst-italic text-muted">
            There are many valid reasons why you should choose us to take care of your valuable device
          </p>
        </div>

        <Row className="gy-4">
          {reasons.map((reason, idx) => (
            <Col key={idx} md={6} lg={4} data-aos={reason.aos} data-aos-delay={idx * 100}>
              <div className="choose-card p-4 text-center h-100 rounded-4 shadow-sm">
                <div className="mb-3">{reason.icon}</div>
                <h5 className="fw-semibold mb-2">{reason.title}</h5>
                <p className="text-muted small">{reason.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>


    {/*  ends here  */}

    {/*  brands logos */}


   <section className="trusted-brands div-box bg-light">
      <Container>
        <div className="text-center mb-4">
          <h2 className="fw-bold display-6">
            Trusted by <span className="text-gradient">Top Brands</span>
          </h2>
          <p className="text-muted">We repair all major brands with precision and care</p>
        </div>
        <Row className="justify-content-center align-items-center g-4">
          {brandLogos.map((brand, index) => (
            <Col key={index} xs={6} sm={4} md={2} className="text-center" data-aos="zoom-in">
              <img
                src={brand.src}
                alt={brand.alt}
                className="brand-logo img-fluid"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>   



    {/*  ends here  */}



    {/*  testimonial section */}


 <section className="testimonials-section div-box testimonial py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-muted fst-italic">Real reviews from happy clients</p>
        </div>

    <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={30}
  loop={true} // ✅ This enables infinite loop
  autoplay={{ delay: 3500 }}
  pagination={{ clickable: true }}
  breakpoints={{
    0: { slidesPerView: 1 },
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  }}
>
  {testimonials.map((t, idx) => (
    <SwiperSlide key={idx}>
      <div className="testimonial-card bg-light p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between">
        <div className="d-flex align-items-center gap-3 mb-3">
          <img
            src={t.image}
            alt={t.name}
            className="rounded-circle"
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
          <div>
            <h6 className="mb-0 fw-semibold">{t.name}</h6>
            <small className="text-muted">{t.role}</small>
          </div>
        </div>
        <p className="text-muted fst-italic">“{t.feedback}”</p>
        <div className="text-warning mt-3">{'★'.repeat(5)}</div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </Container>
    </section>

    {/*  faqs section */}


<section className="faq-section div-box bg-light py-5">
  <Container>
    <Row className="align-items-center g-5 flex-column-reverse flex-md-row">
      {/* Left Column – FAQ Heading + Accordion */}
      <Col md={6} data-aos="fade-right">
        <div className="mb-4 text-center text-md-start">
          <h2 className="fw-bold display-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted fst-italic mb-4">
            Answers to common concerns from our customers
          </p>
        </div>

        <Accordion defaultActiveKey="0" flush>
          {faqData.map((item, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              className="mb-3 border-0 shadow-sm rounded-3"
            >
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body className="text-muted">
                {item.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Col>

      {/* Right Column – Embedded Video */}
      <Col md={6} data-aos="fade-left" className="text-center">
        <div className="ratio ratio-16x9 rounded-4 shadow-sm">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/XrGV7d0LfKw?si=kKKnnMxl12DNtSW_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </Col>
    </Row>
  </Container>
</section>




{/*  footer section */}


<div>
  <Footer />
</div>

    </div>
  );
};

export default HomePage;
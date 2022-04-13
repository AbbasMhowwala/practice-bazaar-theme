import React from 'react'
import { Col, Container, Image, ProgressBar, Row } from 'react-bootstrap'
import Helmet from 'react-helmet'
import './Assets/Css/Theme.css'
import about from './Assets/Images/about/about1.jpg'
import about1 from './Assets/Images/about/about2.jpg'
import about2 from './Assets/Images/about/about3.jpg'
import Slider from "react-slick";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ChevronRightIcon />,
    prevArrow: <KeyboardArrowLeftIcon />
  };
  return (
    <div className='bz-about-main'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us &#8211; Bazaar
        </title>
        <meta
          name="description"
          content="Specializing in fancy color diamonds including; pink, yellow, blue, green, orange, purple, and white diamonds. Colored diamond jewelry. Offering a luxury experience to clients worldwide."
        />
      </Helmet>
      <section className='breadcrumb-main d-flex align-items-center' style={{ height: '500px', backgroundImage: 'url("https://bazaar.qodeinteractive.com/wp-content/uploads/2017/06/about-us-title-img.jpg")', backgroundPosition: 'center 0px' }}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className='breadcrumb-area'>
                <div className="bz-breadcrumb text-center">
                  <h1 className="bz-current text-white font-bold">about us</h1>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className='mt-5 mb-5'>
        <Row>
          <Col lg={4}>
            <div className='bz-about-card'>
              <Image src={about} className='img-fluid' />
              <h1 className='h4 mt-5'>strategy and timing</h1>
              <p className='text-muted mt-3'>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. In ut ullamcor leo eget.</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className='bz-about-card'>
              <Image src={about1} className='img-fluid' />
              <h1 className='h4 mt-5'>social integration</h1>
              <p className='text-muted mt-3'>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. In ut ullamcor leo eget.</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className='bz-about-card'>
              <Image src={about2} className='img-fluid' />
              <h1 className='h4 mt-5'>shopping expirience</h1>
              <p className='text-muted mt-3'>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. In ut ullamcor leo eget.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <section className='bg-light p-5'>
        <Container>
          <Row className='align-items-center p-5'>
            <Col lg={6}>
              <div className='content-box'>
                <h2 class="contact-head">shooting campaign</h2>
                <p className='text-muted mt-5'>Alierewnum phaedrum torquatos nec eu, dasvis detraxit ertssa periculiser eres frtisi reex,nihdail dexpetendis in mei Meis an lorem tincidunt vix at, vele.adsaasx sensibus id, errdsaeore rwrepicurei mea et. Mea facilisis urbanies tas moderatius id. Vis eires rationibus definiebass, eu qui purto zril laoreet.. Ex error es omnium es interpretaris prout legimus similique vix, te equidem.</p>
              </div>
            </Col>
            <Col lg={6}>
              <div className='progress-section'>
                <div className='bz-progress w-100'>
                  <h4 className='progress-text'>Web Design</h4>
                  <small>76%</small>
                </div>
                <div className='progress d-block'>
                  <ProgressBar animated variant="dark" now={76} key={1} />
                </div>
                <div className='bz-progress w-100 mt-3'>
                  <h4 className='progress-text'>Development</h4>
                  <small>45%</small>
                </div>
                <div className='progress d-block'>
                  <ProgressBar animated variant="dark" now={45} key={1} />
                </div>
                <div className='bz-progress w-100 mt-3'>
                  <h4 className='progress-text'>Strategy</h4>
                  <small>45%</small>
                </div>
                <div className='progress d-block'>
                  <ProgressBar animated variant="dark" now={58} key={1} />
                </div>
                <div className='bz-progress w-100 mt-3'>
                  <h4 className='progress-text'>Marketing</h4>
                  <small>83%</small>
                </div>
                <div className='progress d-block'>
                  <ProgressBar animated variant="dark" now={83} key={1} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='d-flex align-items-center' style={{ height: '500px', backgroundImage: 'url("https://bazaar.qodeinteractive.com/wp-content/uploads/2017/06/about-us-parallax-img.jpg")', backgroundPosition: 'center 0px', backgroundAttachment: 'fixed', overflow: 'hidden' }}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className='bz-testimonial'>
                <h1 className='text-center text-white'>What they’re saying</h1>
              </div>
              <Slider {...settings}>
              <div>
                <div className='testi-item text-white'>
                  <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi nam eget eres furis aviatis.</p>
                  <h3 className='author'>Jennifer</h3>
                  <h6 className='author-designation'>Designer</h6>
                </div>
              </div>
              <div>
                <div className='testi-item text-white'>
                  <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi nam eget eres furis aviatis.</p>
                  <h3 className='author'>Jennifer</h3>
                  <h6 className='author-designation'>Designer</h6>
                </div>
              </div>
              <div>
                <div className='testi-item text-white'>
                  <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi nam eget eres furis aviatis.</p>
                  <h3 className='author'>Jennifer</h3>
                  <h6 className='author-designation'>Designer</h6>
                </div>
              </div>
              <div>
                <div className='testi-item text-white'>
                  <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi nam eget eres furis aviatis.</p>
                  <h3 className='author'>Jennifer</h3>
                  <h6 className='author-designation'>Designer</h6>
                </div>
              </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default About
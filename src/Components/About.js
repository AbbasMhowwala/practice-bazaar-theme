import React from 'react'
import Helmet from 'react-helmet'
import './Assets/Css/Theme.css'

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us &#8211; Bazaar
        </title>
        <meta
          name="description"
          content="Specializing in fancy color diamonds including; pink, yellow, blue, green, orange, purple, and white diamonds. Colored diamond jewelry. Offering a luxury experience to clients worldwide."
        />
      </Helmet>
      About Us
    </div>
  )
}

export default About
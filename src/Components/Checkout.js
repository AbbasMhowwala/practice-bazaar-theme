import { Autocomplete, Box, Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Accordion, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import Helmet from 'react-helmet';
import { countries } from './Country'

function Checkout() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className='bz-checkout'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Checkout &#8211; Bazaar
        </title>
        <meta
          name="description"
          content="Specializing in fancy color diamonds including; pink, yellow, blue, green, orange, purple, and white diamonds. Colored diamond jewelry. Offering a luxury experience to clients worldwide."
        />
      </Helmet>
      <Container>
        <Row>
          <Col lg={12}>
            <Accordion>
              <Accordion.Item eventKey="0" className='accordion-first mb-3'>
                <Accordion.Header>returning customer?</Accordion.Header>
                <Accordion.Body className='mt-3 mb-3'>
                  <p className='text-muted'>if you have shopped with us before, please enter your details in the boxes below. if you are a new customer, please proceed to the billing & shipping section.</p>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="username or email * " />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="password *">
                    <Form.Control type="password" placeholder="Password" />
                  </FloatingLabel>
                  <Button variant='contained' className='mt-3  bg-black rounded-0'>log in</Button>
                  <p className='text-muted mt-3'>lost your password?</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='accordion-second mb-3'>
                <Accordion.Header>have a coupon?</Accordion.Header>
                <Accordion.Body>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="coupon code"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="coupon code" />
                  </FloatingLabel>
                  <Button variant='contained' className='mt-3 bg-black rounded-0'>log in</Button>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row className='mt-5 mb-5'>
          <Col lg={6}>
            <h2 class="h5">billing details</h2>
            <Row>
              <Col lg={6}>
                <TextField id="first-name" label="first name *" variant="outlined" className='w-100 mb-3 mt-1' />
              </Col>
              <Col lg={6}>
                <TextField id="last-name" label="last name *" variant="outlined" className='w-100 mb-3 mt-1' />
              </Col>
              <Col lg={12}>
                <TextField id="company-name" label="company name *" variant="outlined" className='w-100 mb-3 mt-1' />
              </Col>
              <Col lg={12}>
                <TextField id="country-name" label="country name *" variant="outlined" className='w-100 mb-3 mt-1' />
              </Col>
              <Col lg={12}>
                <b>street address *</b>
                <Autocomplete
                  className='mb-3 mt-3'
                  id="country-select-demo"
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                      <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt="Flags"
                      />
                      {option.label} ({option.code}) +{option.phone}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a country"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              </Col>
              <Col lg={12}>
                <TextField id="suite" label="Apartment, suite, unit etc. (optional)" variant="outlined" className='w-100 mb-3 mt-1'  />
              </Col>
              <Col lg={12}>
                <TextField id="town-name" label="town / city *" variant="outlined" className='w-100 mb-3 mt-1' />
              </Col>
              <Col lg={12}>
                <TextField id="state-name" label="state / county *" variant="outlined" className='w-100 mb-3 mt-1' />
              </Col>
              <Col lg={12}>
                <TextField id="zipcode" label="postcode / zip *" variant="outlined" className='w-100 mb-3 mt-1' />
              </Col>
              <Col lg={6}>
                <TextField id="phone" label="phone *" variant="outlined" className='w-100 mb-3 mt-1' />
              </Col>
              <Col lg={6}>
                <TextField id="email" label="email address *" variant="outlined" className='w-100 mb-3 mt-1' />
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <FormGroup>
              <FormControlLabel control={<Checkbox onChange={handleChange} />} label="ship to a different address?" className='p-0 pb-0' />
            </FormGroup>
            {checked && (
              <div className='hidden-elements'>
                <Row>
                  <Col lg={6}>
                    <TextField id="first-name" label="first name *" variant="outlined" className='w-100 mb-3 mt-1' />
                  </Col>
                  <Col lg={6}>
                    <TextField id="last-name" label="last name *" variant="outlined" className='w-100 mb-3 mt-1' />
                  </Col>
                  <Col lg={12}>
                    <TextField id="company-name" label="company name *" variant="outlined" className='w-100 mb-3 mt-1' />
                  </Col>
                  <Col lg={12}>
                    <TextField id="country-name" label="country name *" variant="outlined" className='w-100 mb-3 mt-1' />
                  </Col>
                  <Col lg={12}>
                    <b>street address *</b>
                    <Autocomplete
                      className='mb-3 mt-3'
                      id="country-select-demo"
                      options={countries}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt=""
                          />
                          {option.label} ({option.code}) +{option.phone}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Choose a country"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password',
                          }}
                        />
                      )}
                    />              </Col>
                  <Col lg={12}>
                    <TextField id="suite" label="Apartment, suite, unit etc. (optional)" variant="outlined" className='w-100 mb-3 mt-1' />
                  </Col>
                  <Col lg={12}>
                    <TextField id="town-name" label="town / city *" variant="outlined" className='w-100 mb-3 mt-1' />
                  </Col>
                  <Col lg={12}>
                    <TextField id="state-name" label="state / county *" variant="outlined" className='w-100 mb-3 mt-1' />
                  </Col>
                  <Col lg={12}>
                    <TextField id="zipcode" label="postcode / zip *" variant="outlined" className='w-100 mb-3 mt-1' />
                  </Col>
                </Row>
              </div>
            )}
            <TextField id="text" label="order notes *" variant="outlined" className='w-100 mb-3 mt-1' />
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col lg={12}>
            <h2 class="h5">your order</h2>
            <table className='table-bordered mt-3'>
              <tr>
                <td className='p-3'>product</td>
                <td className='p-3'>total</td>
              </tr>
              <tr>
                <td className='p-3'>6-drawer chest  × 1	</td>
                <td className='p-3'>$179</td>
              </tr>
              <tr>
                <td className='p-3'>subtotal</td>
                <td className='p-3'>$179</td>
              </tr>
              <tr>
                <td className='p-3'>shipping	</td>
                <td className='p-3'>there are no shipping methods available. please double check your address, or contact us if you need any help.</td>
              </tr>
              <tr>
                <td className='p-3'>total	</td>
                <td className='p-3'>$179</td>
              </tr>
            </table>
            <div className='mt-5 mb-5'>
              <h2 class="h5">direct bank transfer</h2>
              <p className='text-muted'>make your payment directly into our bank account. please use your order id as the payment reference. your order will not be shipped until the funds have cleared in our account.</p>
            </div>
            <hr />
            <Button className='bg-black mt-3 rounded-0' variant='contained'>place order</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Checkout
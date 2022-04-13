import React, { useState } from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import product from './Assets/Images/p1.jpg'
import { TextField, Typography } from '@mui/material';

const Cart = () => {
    function increment(c) {
        return c + 1;
    }
    const [count, setCount] = useState(0);
    function decrement(c) {
        return c - 1;
    }
    return (
        <div className='bz-cart-main'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cart &#8211; Bazaar
                </title>
                <meta
                    name="description"
                    content="Specializing in fancy color diamonds including; pink, yellow, blue, green, orange, purple, and white diamonds. Colored diamond jewelry. Offering a luxury experience to clients worldwide."
                />
            </Helmet>
            <section className='breadcrumb-main d-flex align-items-center' style={{ height: '330px', backgroundImage: 'url("https://bazaar.qodeinteractive.com/wp-content/uploads/2017/07/cart-title-background-img.jpg")', backgroundPosition: 'center 0px' }}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='breadcrumb-area'>
                                <div className="bz-breadcrumb text-center">
                                    <span className="bz-current text-white">Cart</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
                <Row>
                    <Col lg={8} className='mb-5'>
                        <div className='cart-content mb-3'>
                            <h1 className='text-muted'>Shopping Cart</h1>
                        </div>
                        <Row className='mt-5'>
                            <Col md={12}>
                                <div className='product-cart mb-3'>
                                    <CloseIcon className='mx-3' />
                                    <Image src={product} className="p-image" width={100} />
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="p"
                                        className="product-title d-inline-block mx-3"
                                    >
                                        3-drawer chest
                                    </Typography>
                                    <span className='qty mx-3'>
                                    <Button variant='contained' className='qty-btn minus' onClick={() => setCount(decrement)}>-</Button>
                                    <TextField id="outlined-basic" variant="standard" value={count} style={{ verticalAlign: "middle" }} />
                                    <Button variant='contained' className='qty-btn plus' onClick={() => setCount(increment)}>+</Button>
                                    </span>
                                    <Typography
                                        variant="body2"
                                        component="small"
                                        className="product-price"
                                        color="text.black"
                                        style={{ float: "unset" }}
                                    >
                                        $ 493
                                    </Typography>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className='product-cart mb-3'>
                                    <CloseIcon className='mx-3' />
                                    <Image src={product} className="p-image" width={100} />
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="p"
                                        className="product-title d-inline-block mx-3"
                                    >
                                        3-drawer chest
                                    </Typography>
                                    <span className='qty mx-3'>
                                    <Button variant='contained' className='qty-btn minus' onClick={() => setCount(decrement)}>-</Button>
                                    <TextField id="outlined-basic" variant="standard" value={count} style={{ verticalAlign: "middle" }} />
                                    <Button variant='contained' className='qty-btn plus' onClick={() => setCount(increment)}>+</Button>
                                    </span>
                                    <Typography
                                        variant="body2"
                                        component="small"
                                        className="product-price"
                                        color="text.black"
                                        style={{ float: "unset" }}
                                    >
                                        $ 493
                                    </Typography>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className='product-cart mb-3'>
                                    <CloseIcon className='mx-3' />
                                    <Image src={product} className="p-image" width={100} />
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="p"
                                        className="product-title d-inline-block mx-3"
                                    >
                                        3-drawer chest
                                    </Typography>
                                    <span className='qty mx-3'>
                                    <Button variant='contained' className='qty-btn minus' onClick={() => setCount(decrement)}>-</Button>
                                    <TextField id="outlined-basic" variant="standard" value={count} style={{ verticalAlign: "middle" }} />
                                    <Button variant='contained' className='qty-btn plus' onClick={() => setCount(increment)}>+</Button>
                                    </span>
                                    <Typography
                                        variant="body2"
                                        component="small"
                                        className="product-price"
                                        color="text.black"
                                        style={{ float: "unset" }}
                                    >
                                        $ 493
                                    </Typography>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} className='mt-5'>
                        <div className="cart_order_sum">
                            <div className="opt-box">
                                <div className='cart-content mb-3'>
                                    <h1 className='text-muted'>cart totals</h1>
                                </div>
                                <p className="r-options opt2 mt-5">subtotal <span> $123 </span></p>
                                <p className="r-options opt2">shipping </p>
                                <span className='pb-3 d-block'> there are no shipping methods available. please double check your address, or contact us if you need any help.</span>
                            </div>
                            <hr />
                            <p className="r-options opt2">total <span> $123 </span></p>

                            <div className="btn-box">
                                <Link to="/checkout" className="checkout__btns text-decoration-none"> proceed to checkout</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart
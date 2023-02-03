import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, ListGroup, ModalTitle, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addCartThunk } from '../store/slices/addCart.slice';
import { filterNewsCategoryThunk } from '../store/slices/news.slice';

const ProductsDetail = () => {

    const { id } = useParams()

    const [news, setNews] = useState({})

    const productsList = useSelector(state => state.news)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(res => {
                setNews(res.data)
                dispatch(filterNewsCategoryThunk(res.data.category.id))
            })

    }, [id])

    const [productID, setProductId] = useState("")

    const addToPurchases = () => {
        const product = {
            quantity: 1,
            productId: news.id
        }
        dispatch(addCartThunk(product))
    }


    return (
        <div>
            <h1>{news.brand}</h1>


            <Row>
                <div className='container-superior' >
                    <Carousel className='carousel' variant="dark" >
                        <Carousel.Item>
                            <div className='container-image-description'>
                                <img
                                    className="d-block w-100"
                                    src={news.images?.[0].url}
                                />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='container-image-description'>
                                <img
                                    className="d-block w-100"
                                    src={news.images?.[1].url}
                                />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className='container-image-description'>
                                <img
                                    className="d-block w-100"
                                    src={news.images?.[2].url}
                                />
                            </div>
                        </Carousel.Item>
                    </Carousel>


                    {/* 
                 <div className='container-superior'> */}
                    {/* <div className='container-image-description'>
                        <img src={news.images?.[0].url} alt="" />
                    </div>
 */}

                    <div className='container-description'>
                        <p className='p'>{news.description}</p>
                        <input
                            type="text"
                            value={productID}
                            onChange={e => setProductId(e.target.value)} />
                        <div className='container-button'>
                            <button className='button-input' onClick={addToPurchases}> Add to Cart <i className='bx bxs-cart-add' ></i> </button>
                        </div>
                    </div>
                </div>

                <h3>Related Products</h3>
                <Row xs={1} md={2} lg={3} className="g-4">


                    {productsList.map(news => (

                        <Col key={news.id}>
                            <Card key={news.id} onClick={() => navigate(`/product/${news.id}`)}>
                                <Card.Img className="g-3"
                                    variant="top"
                                    style={{ height: 200, objectFit: "contain", paddingTop: "1rem" }}
                                    src={news.images?.[0].url} alt="producto"
                                />
                                <Card.Body className='card-body'>
                                    <Card.Title class>{news.title}</Card.Title>
                                    <div className='container-car-price'>
                                        <div>
                                            <Card.Text>
                                                Price: $ {news.price}
                                            </Card.Text>
                                        </div>
                                        <div className='car-container'>

                                            <i className='bx bxs-cart'></i>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Row>




            <p>Showing ID Product: <b>{id}</b></p>
        </div>
    );
};

export default ProductsDetail;
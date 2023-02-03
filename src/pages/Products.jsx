import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterNewsCategoryThunk, filterProductsHeadlineThunk, getNewsThunk } from '../store/slices/news.slice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, ListGroup } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import FilterPrice from '../components/FilterPrice';


const Products = () => {

    const dispatch = useDispatch()
    const newsList = useSelector(state => state.news)
    const [categories, setCategories] = useState([])
    const [productsSearch, setProductsSearch] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getNewsThunk())

        axios.get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
            .then(res => setCategories(res.data))

    }, [])

    console.log(categories)

    return (
        <div>
            <Row>
                <Col lg={3}>
                    < FilterPrice />
                    <br />
                    <h4>Category</h4>
                    <ListGroup>
                        {
                            categories.map(category => (
                                <ListGroup.Item key={category.id}
                                    onClick={() => dispatch(filterNewsCategoryThunk(category.id))}>
                                    {category.name}
                                </ListGroup.Item>

                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg={9}>
                    <h1>Products</h1>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={productsSearch}
                            onChange={e => setProductsSearch(e.target.value)}
                        />

                        <Button
                            onClick={() => dispatch(filterProductsHeadlineThunk(productsSearch))}
                            variant="outline-secondary"
                            id="button-addon2">
                            Button
                        </Button>
                    </InputGroup>

                    <ul>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {newsList.map(news => (

                                <Col key={news.id}>
                                    <Card key={news.id} onClick={() => navigate(`/product/${news.id}`)}>
                                        {/*    // <Link to={`/product/${news.id}`} style={{ textDecoration: "none" }}> */}
                                        <Card.Img className="g-3"
                                            variant="top"
                                            style={{ height: 200, objectFit: "contain", paddingTop: "1rem" }}
                                            src={news.images?.[0].url} alt="producto"
                                        />
                                        <Card.Body className='card-body'>
                                            <Card.Title className>{news.title}</Card.Title>
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
                    </ul>
                </Col>
            </Row>
        </div >
    );
};

export default Products;
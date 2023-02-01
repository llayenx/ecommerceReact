import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, ListGroup, ModalTitle, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { filterNewsCategoryThunk } from '../store/slices/news.slice';

const ProductsDetail = () => {

    const { id } = useParams()

    const [news, setNews] = useState({})

    const productsList = useSelector(state => state.news)

    /* const newsFound = newsList.find(newItem => newsItem.id ===Number.id)
    const relatedNews = newsList.filter(newsItem =>
   newsItem.category.id === newsFound.category.id &&
   newsItem.id !== newsFound.id
 */
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(res => {
                setNews(res.data)
                dispatch(filterNewsCategoryThunk(res.data.category.id))
            })

    }, [id])

    console.log(news)




    return (
        <div>
            <h1>{news.brand}</h1>
            <Row>
                <Col lg={9}>
                    <img src={news.images?.[0].url} alt="" className='img-fluid' style={{ width: 200 }} />
                    <p>{news.description}</p>
                </Col>
                <Col lg={3}>
                    <h3>Related Products</h3>

                    <ListGroup variant="flush">
                        {productsList.map(productItem => (
                            <ListGroup.Item key={productItem.id}  >
                                <Link to={`/product/${productItem.id}`} style={{ textDecoration: "none" }} onClick={() => navigate(`/product/${productItem.id}`)}>
                                    {productItem.title}
                                    <br />
                                    <img src={productItem.images?.[0].url} className="img-fluid" style={{ width: 200 }} />
                                    
                                </Link>

                            </ListGroup.Item>
                        ))
                        }

                    </ListGroup>





                </Col>
            </Row>




            <p>Showing ID Product: <b>{id}</b></p>
        </div>
    );
};

export default ProductsDetail;
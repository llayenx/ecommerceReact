import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const FilterPrice = () => {

    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    const product = useSelector(state => state.news)

    const item1 = product[0]?.price

    const price = () => {
        if (item1 == minPrice) {
            alert("producto coincide")
        }
        else {
            alert("el producto no coincide")
        }

    }
    console.log(product)
    return (
        <Form>
            <h4>Price</h4>

            <Form.Group className="mb-3" controlId="formPriceFrom">

                <Form.Label>From</Form.Label>
                <Form.Control type="number"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formPriceTo">
                <Form.Label>To</Form.Label>
                <Form.Control type="number"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)} />
            </Form.Group>

            <Button onClick={price} variant="primary" type="submit"
            //  onClick={() => dispatch(filterProductsPriceThunk(850.00))}
            >
                Filter Price
            </Button>
        </Form>
    );
};

export default FilterPrice;
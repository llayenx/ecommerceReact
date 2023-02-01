import axios from 'axios';
import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getaddCartThunk } from '../store/slices/addCart.slice';

const PurchaseSidebar = ({ show, handleClose }) => {

    const addCart = useSelector(state => state.addCart)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getaddCartThunk())


    }, [])

    console.log(addCart)


    return (
        <Offcanvas placement="end" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    {
                        addCart.map(cart => (
                            <li key={cart.id}>
                                <p>
                              <img src={cart.product.images[0].url} alt="" style= {{width:100}} />
                              {cart.product.tilte}
                              <br />
                              <b>Precio :{cart.product.price}</b>
                              <br />
                              <button>Button</button>
                              <br />
                              <button>Delete</button>
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default PurchaseSidebar;
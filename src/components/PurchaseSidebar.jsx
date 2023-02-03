import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getaddCartThunk, purchasesCartThunk } from '../store/slices/addCart.slice';

const PurchaseSidebar = ({ show, handleClose }) => {


    const addCart = useSelector(state => state.addCart)

    let total = 0
    addCart.forEach(product => {
        const totalproduct = Number(product.product.price) * product.quantity;
        total += totalproduct

    }) 




    const[counter, setCounter] = useState (1)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getaddCartThunk())


    }, [])

    console.log(addCart)
      const increment = () =>{
        setCounter(counter+1)
      }
      const decrement = () =>{
        setCounter (counter -1)
      }


    return (
        <>
        <Offcanvas placement="end" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title> <b>MyCart</b>  </Offcanvas.Title>
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
                              <b>Precio  :{cart.product.price}</b>
                             
                            <button onClick={decrement} disabled={counter==1}> - </button> <button> {counter} </button> <button onClick={increment}> +</button>
                                <br />
                              <button>Delete</button>
                                </p>
                            </li>
                        ))
                    }
                </ul>
                <br />
                <div>
                    <p>
                       <b>Total : </b> $ {total}
                    </p>
                </div>

                <Button onClick={() => dispatch(purchasesCartThunk())}>CheckOut</Button>
            </Offcanvas.Body>
        </Offcanvas>
        
        </>
    );
};

export default PurchaseSidebar;
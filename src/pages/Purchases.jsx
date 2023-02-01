import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const purchases = useSelector(state => state.purchases)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPurchasesThunk())

    }, [])
    console.log(purchases)


    return (
        <div>
            <h1>Purchases</h1>
            <ul>
                {purchases.map(purchase => (

                    <li key = {purchase.product.id}>
                        <Link to={`/product/${purchase.product.id}`}>
                        {purchase.product.brand}
                        <br />
                        <img src={purchase.product?.images[0].url} alt="" style={{ width: 200 }} />
                        <br />
                        ${purchase.product.price}
                        </Link>
                    </li>



                ))}
            </ul>

        </div>
    );
};

export default Purchases;
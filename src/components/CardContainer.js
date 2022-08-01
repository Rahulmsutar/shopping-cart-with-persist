import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAll, getCartTotal } from '../redux/features/cartSlice';
import CardItems from './CardItems';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const CardContainer = () => {
    const { items, totalAmount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal())
    }, [items])



    return (
        <>
            {items.length === 0 ?
                <h3>CART is empty</h3> :
                <Container>
                    <Box sx={{}}>
                        {items.map((item) => {
                            return <CardItems key={item.id} {...item} />
                        })}
                    </Box>
                    <Button variant="outlined" color="primary" onClick={() => dispatch(clearAll())}>Clear All</Button>
                </Container>
            }
        </>
    )
}

export default CardContainer
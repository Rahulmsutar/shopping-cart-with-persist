import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, removeItem } from '../redux/features/cartSlice';

const CardItems = ({ id, image, title, price, qty }) => {

    const dispatch = useDispatch();


    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ margin: "30px" }}>
                    <Card sx={{ maxWidth: 600 }} >
                        <CardMedia
                            component="img"
                            height="100%"
                            image={image}
                            alt={title}
                            width='100%'
                            objectfit='cover'
                        />
                        <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" color="blue">
                                ${price}
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Button variant="outlined" color="primary" onClick={() => dispatch(decrease(id))}>
                                    -
                                </Button>
                                <Typography gutterBottom variant="h5" component="div" sx={{ padding: "0 10px 0 10px" }}>
                                    {qty}
                                </Typography>

                                <Button variant="outlined" color="primary" onClick={() => dispatch(increase(id))}>
                                    +
                                </Button>
                            </Box>
                        </CardContent>
                        <CardActions style={{ display: "flex", justifyContent: "center" }}>
                            <Button size="small" variant='contained' color="secondary" onClick={() => dispatch(removeItem(id))}>Remove Item</Button>
                        </CardActions>
                    </Card>

                </Box>
            </div>


        </>
    )
}

export default CardItems
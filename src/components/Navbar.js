import React,{useEffect} from 'react'
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';



const Navbar = () => {
    const { totalCount, totalAmount } = useSelector((state) => state.cart)
  

    return (
        <>
            <Box component="div" sx={{ p: 2, border: '1px solid grey', backgroundColor: "blue", textAlign: "center" }} className="navbar">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography fontSize="30px" fontWeight="400" color="white">Online Shopping Cart</Typography>
                    </Grid>
                    <Grid item xs={4} >
                        
                        <Box sx={{ fontSize: "25px",  color: "orange" ,display:totalAmount? "block":"none"}}>
                            Total Amount:  <Box sx={{ fontSize: "25px", color: "#00FF00" }}>${totalAmount}</Box>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={2} >

                        <Badge color="secondary" badgeContent={`${totalCount}`}>
                            <ShoppingCartIcon style={{ fill: "white", fontSize: "40px" }} />
                        </Badge>

                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default Navbar
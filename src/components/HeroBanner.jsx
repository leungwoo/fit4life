import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import fitness from '../assets/images/fitness.png';
import TouchAppRoundedIcon from '@mui/icons-material/TouchAppRounded';

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' }
            }} p='20px' position='relative'>
            <Typography color='#95D600' fontSize='26px' fontWeight='600'>
                Fit4Life
            </Typography>
            <Typography fontWeight='700' mt='5px' mb='5px'
                sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
                Focus, Discipline <br />  and
                Results
            </Typography>
            <Typography lineHeight='35px' mb={4}>
                Exercise those fingers and check out the exercises below!
            </Typography>
            <Button variant='outlined' href='#exercises'
                sx={{
                    color: '#95D600',
                    backgroundColor: 'black',
                    fontSize: '10px',
                    fontWeight: "bold",
                    padding: '10px'
                }} >
                <TouchAppRoundedIcon /> Click to grow some muscles
            </Button>
            <Typography
                fontWeight={600}
                color='#95D600'
                sx={{
                    opacity: '0.1',
                    display: { lg: 'block', xs: 'none' }
                }} fontSize='200px'>
                Exercise
            </Typography>
            <img src={fitness} alt='banner' className="hero-banner-img" />

        </Box>

    );
};

export default HeroBanner;
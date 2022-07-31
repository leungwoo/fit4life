import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import fitness from '../assets/images/Richard-10.JPEG';
import TouchAppRoundedIcon from '@mui/icons-material/TouchAppRounded';
import fist from '../assets/icons/fist.jpeg';

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' }
            }} p='20px' position='relative'>
            <Typography color='#95D600' fontSize='26px' fontWeight='600'>
                <img src={fist} width='40px' /> TrainHard or go home
            </Typography>
            <Typography fontWeight='700' mt='10px' mb='10px'
                sx={{ fontSize: { lg: '54px', xs: '45px' } }}>
                Focus, Discipline <br />  and
                Commitment
            </Typography>
            <Typography lineHeight='35px' mb={4}>
                Exercise those fingers and check out the exercises below!
            </Typography>
            <Button className='search-btn' variant='outlined' href='#exercises'
                sx={{
                    color: '#95D600',
                    backgroundColor: 'black',
                    fontSize: { lg: '20px', xs: '14px' },
                    fontWeight: "600",
                    padding: '8px',
                    textTransform: 'none',
                    width: { lg: '350px', xs: '250px' },
                }} >
                <TouchAppRoundedIcon /> Click to GROW some muscles
            </Button>
            <Typography
                fontWeight={800}
                color='#95D600'
                mt='15px'
                sx={{
                    opacity: '0.1',
                    display: { lg: 'block', xs: 'none' }
                }} fontSize='250px'>
                Exercise
            </Typography>
            <img src={fitness} alt='banner' className="hero-banner-img" />

        </Box>

    );
};

export default HeroBanner;
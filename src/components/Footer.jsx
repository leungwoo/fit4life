import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Logo-2.png';
const Footer = () => {

    return (

        <Box bgcolor='#95D600' marginTop={10}>
            <Stack
                gap='1px'
                alignItems='center'
                px='40px'
                pt='4px'
                color='#000'>
                <img src={logo}
                    alt="log"
                    width='150px'
                    height='100px' />
                <Typography variant='5'
                    fontWeight={900}
                    pb='10px'>Or Go Home...</Typography>
            </Stack>
        </Box>

    );
};

export default Footer;